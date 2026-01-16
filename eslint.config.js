import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**'] },
  { ...js.configs.recommended, languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.cjs', '**/*.mjs', 'astro.config.mjs', 'eslint.config.js'],
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-case-declarations': 'off',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-set-html-directive': 'warn',
    },
  },
]
