import https from 'node:https';

import { WP_API_BASE } from '@/constants/static_paths';
import type { Post, PostCard } from '@/types/pageTypes';

const WP_REQUEST_TIMEOUT_MS = 8_000;

// Cache simple para build-time
const postCache = new Map<string, any>();
const imageCache = new Map<number, any>();

const fetchWpJson = async (url: string) => {
    return new Promise<any>((resolve, reject) => {
        const req = https.request(
            url,
            {
                method: 'GET',
                family: 4,
                timeout: WP_REQUEST_TIMEOUT_MS,
                headers: {
                    Accept: 'application/json',
                    'User-Agent': 'tutto-a-lena-astro/1.0',
                },
            },
            (res) => {
                const chunks: Buffer[] = [];

                res.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
                res.on('end', () => {
                    const body = Buffer.concat(chunks).toString('utf8');
                    const statusCode = res.statusCode ?? 0;

                    if (statusCode >= 400) {
                        reject(new Error(`WordPress API error: HTTP ${statusCode}`));
                        return;
                    }

                    try {
                        resolve(JSON.parse(body));
                    } catch {
                        reject(new Error('Invalid JSON response from WordPress'));
                    }
                });
            },
        );

        req.on('timeout', () => {
            req.destroy(new Error(`WordPress request timeout (${WP_REQUEST_TIMEOUT_MS}ms)`));
        });
        req.on('error', reject);
        req.end();
    });
};

/**
 * Calcula tiempo de lectura estimado en minutos (base: 200 palabras/min)
 */
function calculateReadTime(content: string): number {
    const wordCount = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 200));
}

/**
 * Obtiene imagen de WordPress Media Library
 */
export const getImage = async (mediaId: number) => {
    if (!mediaId) return null;
    
    // Verificar caché
    if (imageCache.has(mediaId)) {
        return imageCache.get(mediaId);
    }

    const url = `${WP_API_BASE}/media/${mediaId}`;

    try {
        const data = await fetchWpJson(url);
        imageCache.set(mediaId, data);
        return data;
    } catch (error) {
        console.warn(`Image fetch failed (ID: ${mediaId}): ${(error as Error).message}`);
        return null;
    }
};

/**
 * Mapea post de WordPress a PostCard
 */
async function mapWpPostToCard(post: any): Promise<PostCard> {
    const img = await getImage(post.featured_media);

    return {
        id: post.id,
        date: new Date(post.date),
        slug: post.slug,
        title: post.title?.rendered || 'Sin título',
        excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
        image: img?.source_url || null,
    };
}

/**
 * Mapea post de WordPress a Post completo
 */
async function mapWpPostToFull(post: any): Promise<Post> {
    const card = await mapWpPostToCard(post);
    const readTime = calculateReadTime(post.content?.rendered || '');

    return {
        ...card,
        content: post.content?.rendered || '',
        author: post._embedded?.author?.[0] && {
            id: post._embedded.author[0].id,
            name: post._embedded.author[0].name,
            url: post._embedded.author[0].link,
            avatar: post._embedded.author[0].avatar_urls?.[96],
        },
        categories: post._embedded?.['wp:term']?.[0]?.map((cat: any) => cat.name) || [],
        tags: post._embedded?.['wp:term']?.[1]?.map((tag: any) => tag.name) || [],
        featured: post.sticky || false,
        readTime,
    };
}

/**
 * Obtiene todos los posts del blog
 */
export const getPosts = async (): Promise<PostCard[]> => {
    const url = `${WP_API_BASE}/posts?per_page=100&_fields=id,slug,title,date,excerpt,featured_media&orderby=date&order=desc`;

    try {
        const data = await fetchWpJson(url);
        return Array.isArray(data) 
            ? await Promise.all(data.map(mapWpPostToCard))
            : [];
    } catch (error) {
        console.error(`getPosts failed: ${(error as Error).message}`);
        return [];
    }
};

/**
 * Obtiene lista de slugs para getStaticPaths
 */
export const getSlugList = async (): Promise<string[]> => {
    const url = `${WP_API_BASE}/posts?per_page=100&_fields=slug`;

    try {
        const data = await fetchWpJson(url);
        return Array.isArray(data) 
            ? data.map((post: any) => post.slug)
            : [];
    } catch (error) {
        console.error(`getSlugList failed: ${(error as Error).message}`);
        return [];
    }
};

/**
 * Obtiene post completo por slug
 */
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
    // Verificar caché
    if (postCache.has(slug)) {
        return postCache.get(slug);
    }

    const url = `${WP_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=author,wp:term`;

    try {
        const data = await fetchWpJson(url);
        
        if (!Array.isArray(data) || data.length === 0) {
            console.warn(`Post not found: ${slug}`);
            return null;
        }

        const post = await mapWpPostToFull(data[0]);
        postCache.set(slug, post);
        return post;
    } catch (error) {
        console.error(`getPostBySlug failed (${slug}): ${(error as Error).message}`);
        return null;
    }
};

/**
 * Obtiene posts relacionados
 */
export const getRelatedPosts = async (
    currentSlug: string,
    limit: number = 3
): Promise<PostCard[]> => {
    const url = `${WP_API_BASE}/posts?per_page=${limit + 1}&_fields=id,slug,title,date,excerpt,featured_media`;

    try {
        const data = await fetchWpJson(url);
        
        if (!Array.isArray(data)) return [];

        const posts = await Promise.all(data.map(mapWpPostToCard));
        return posts
            .filter(p => p.slug !== currentSlug)
            .slice(0, limit);
    } catch (error) {
        console.warn(`getRelatedPosts failed: ${(error as Error).message}`);
        return [];
    }
};

/**
 * Busca posts por término
 */
export const searchPosts = async (query: string): Promise<PostCard[]> => {
    if (!query.trim()) return [];

    const url = `${WP_API_BASE}/posts?search=${encodeURIComponent(query)}&_fields=id,slug,title,date,excerpt,featured_media`;

    try {
        const data = await fetchWpJson(url);
        return Array.isArray(data)
            ? await Promise.all(data.map(mapWpPostToCard))
            : [];
    } catch (error) {
        console.warn(`searchPosts failed: ${(error as Error).message}`);
        return [];
    }
};
