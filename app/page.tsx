import { BlogPosts } from 'app/components/posts'
import { career, profile } from 'app/data/profile'

export default function Page() {
  return (
    <section>
      <h1 className="mb-3 text-2xl font-semibold tracking-tighter text-slate-900 dark:text-cyan-50">
        {profile.name}
      </h1>
      <p className="mb-4 text-sm leading-relaxed text-cyan-900/90 dark:text-cyan-200/90">
        {profile.headline}
      </p>
      <p className="mb-2 text-sm text-cyan-800/85 dark:text-cyan-400/85">
        {profile.location} · {profile.timezone.replace(/_/g, ' ')}
      </p>
      <p className="mb-6 text-sm text-cyan-800/85 dark:text-cyan-400/85">
        {career.jobSearchStatus === 'active' ? 'Actively job searching' : `Status: ${career.jobSearchStatus}`}
        {' · '}
        Remote-first · Target horizon {career.targetEmploymentHorizon}
      </p>
      <p className="mb-8 text-sm leading-relaxed text-slate-800 dark:text-cyan-50/90">
        {career.directionSummary}
      </p>
      <div className="mb-10 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          className="underline decoration-cyan-400/60 hover:text-cyan-800 dark:hover:text-cyan-200"
          href={`mailto:${profile.email}`}
        >
          Email
        </a>
        <a
          className="underline decoration-cyan-400/60 hover:text-cyan-800 dark:hover:text-cyan-200"
          href={profile.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="underline decoration-cyan-400/60 hover:text-cyan-800 dark:hover:text-cyan-200"
          href={profile.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-cyan-50">
        Selected work
      </h2>
      <div className="my-2">
        <BlogPosts />
      </div>
    </section>
  )
}
