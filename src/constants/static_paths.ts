import { loadEnv } from 'vite'

type StaticPath = string

const { PUBLIC_SITE_URL, PUBLIC_INDEXABLE, WP_DOMAIN } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '')

export const DOMAIN_NAME: StaticPath = PUBLIC_SITE_URL
export const INDEXABLE: boolean = PUBLIC_INDEXABLE === 'true'
export const WP_API_BASE: StaticPath = WP_DOMAIN ?? ''

export const CTA_TARGET: StaticPath = ''
