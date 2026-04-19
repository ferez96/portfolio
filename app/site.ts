/** Subpath when hosted on GitHub Pages project sites (set in CI). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Canonical site URL for metadata, OG, RSS, and sitemap. */
export const baseUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
})()
