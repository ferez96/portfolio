import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/work/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col space-y-1 mb-4"
            href={`/work/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-cyan-700/75 dark:text-cyan-500/80 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-slate-900 dark:text-cyan-50 tracking-tight group-hover:text-cyan-800 dark:group-hover:text-cyan-200">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
