import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Independent backend practice
      </h1>
      <p className="mb-4">
        {`I design and build reliable systems — APIs, services, and data paths — with Go as my primary language. I care about clear boundaries, observable behavior, and shipping software that stays maintainable after launch.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
