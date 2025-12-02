import { loadEnv } from "vite"

type StaticPath = string | undefined

const { PUBLIC_SITE_URL, PUBLIC_INDEXABLE } = loadEnv(
  process.env.NODE_ENV ?? "",
  process.cwd(),
  "",
)

export const DOMAIN_NAME: StaticPath = PUBLIC_SITE_URL
export const INDEXABLE: boolean = PUBLIC_INDEXABLE === "true"

export const CTA_TARGET: StaticPath = ""
