/**
 * Writes public/rss.xml before `next build` (static export has no RSS route handler).
 * Run from repo root: pnpm exec tsx scripts/generate-rss.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import { getBlogPosts } from '../app/work/utils'
import { profile } from '../app/data/profile'

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000'

const posts = getBlogPosts().sort((a, b) => {
  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
    return -1
  }
  return 1
})

const itemsXml = posts
  .map(
    (post) => `        <item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${baseUrl}/work/${post.slug}</link>
          <description>${escapeXml(post.metadata.summary || '')}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`
  )
  .join('\n')

const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(profile.name)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(String(profile.headline))}</description>
${itemsXml}
  </channel>
</rss>
`

const outFile = path.join(process.cwd(), 'public', 'rss.xml')
fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, rssFeed, 'utf-8')
console.log('Wrote', outFile)
