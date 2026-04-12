// @ts-check
import { defineConfig } from 'astro/config'
import htaccess from 'astro-htaccess'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import { DOMAIN_NAME, INDEXABLE } from './src/constants/static_paths'
import dotenv from 'dotenv'
import favicons from 'astro-favicons'

const mode = process.env.NODE_ENV ?? 'development'
dotenv.config({ path: `.env.${mode}` })

// https://astro.build/config
export default defineConfig({
  // Project paths
  outDir: './dist',
  publicDir: './public',
  cacheDir: './.astro',

  // Site info
  site: DOMAIN_NAME,

  // Image optimization
  image: {
    // Permite a Astro optimizar imágenes remotas de Firebase Storage en la build (SSG)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },

  // Markdown configuration
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  // Trailing slash
  trailingSlash: 'ignore',
  compressHTML: mode === 'production',
  // Integrations
  integrations: [
    INDEXABLE &&
      sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
      }),
    htaccess({
      generateHtaccessFile: true,
      errorPages: [{ code: 404, document: '/404' }],
      customRules: INDEXABLE
        ? [
            `RewriteEngine On`,
            // GZIP compression
            `<IfModule mod_deflate.c>`,
            `  AddOutputFilterByType DEFLATE text/html text/plain text/xml`,
            `  AddOutputFilterByType DEFLATE text/css text/javascript`,
            `  AddOutputFilterByType DEFLATE application/javascript`,
            `  AddOutputFilterByType DEFLATE application/xml+rss`,
            `  AddOutputFilterByType DEFLATE text/x-js`,
            `</IfModule>`,
            // Cache fuerte sólo para assets hashados emitidos por Astro/Vite
            `SetEnvIf Request_URI "^/(assets|_astro)/" LONG_CACHE_ASSET=1`,
            `<IfModule mod_headers.c>`,
            `  Header always set Cache-Control "public, max-age=31536000, immutable" env=LONG_CACHE_ASSET`,
            `</IfModule>`,
            // Cache headers - HTML
            `<FilesMatch "\\.html$">`,
            `  Header set Cache-Control "public, max-age=3600, must-revalidate"`,
            `</FilesMatch>`,
            // Disable ETag
            `Header unset ETag`,
            `FileETag None`,
            // Remove server headers
            `Header always unset X-Powered-By`,
            // Security headers
            `Header set X-Content-Type-Options "nosniff"`,
            `Header set X-Frame-Options "SAMEORIGIN"`,
            `Header set X-XSS-Protection "1; mode=block"`,
            // Redirect www to non-www
            `RewriteCond %{HTTP_HOST} ^www\\.tutto-a-lena\\.com$ [NC]`,
            `RewriteRule ^(.*)$ https://tutto-a-lena.com/$1 [L,R=301]`,
            // Force HTTPS
            `RewriteCond %{HTTPS} off`,
            `RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`,
          ]
        : [],
    }),
    favicons(),
  ].filter(Boolean),

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
        },
      },
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            const extension = assetInfo.names?.[0]?.split('.').pop()?.toLowerCase()

            if (extension === 'css') {
              return 'assets/styles.[hash][extname]'
            }

            return 'assets/[name].[hash][extname]'
          },
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: '[name].[hash].js',
        },
      },
    },
    server: {
      allowedHosts: true,
      preTransformRequests: true,
    },
    ssr: {
      external: [],
      noExternal: ['tailwind-animations'],
    },
  },
})
