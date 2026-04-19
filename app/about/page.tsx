import type { Metadata } from 'next'
import {
  career,
  education,
  experience,
  honors,
  profile,
  skills,
} from 'app/data/profile'

export const metadata: Metadata = {
  title: 'About',
  description: `${profile.name} — experience, skills, and career direction.`,
}

function SkillBlock({
  title,
  items,
}: {
  title: string
  items: readonly string[]
}) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-800 dark:text-cyan-400/90 mb-2">
        {title}
      </h3>
      <ul className="list-disc pl-5 space-y-1 text-slate-800 dark:text-cyan-50/85">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function AboutPage() {
  return (
    <section className="space-y-12">
      <header>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter text-slate-900 dark:text-cyan-50">
          {profile.name}
        </h1>
        <p className="text-cyan-800/90 dark:text-cyan-300/90 mb-4">{profile.headline}</p>
        <dl className="text-sm space-y-1 text-slate-700 dark:text-cyan-200/80">
          <div>
            <dt className="inline font-medium">Location · </dt>
            <dd className="inline">{profile.location}</dd>
          </div>
          <div>
            <dt className="inline font-medium">Timezone · </dt>
            <dd className="inline">{profile.timezone}</dd>
          </div>
          <div>
            <dt className="inline font-medium">English · </dt>
            <dd className="inline">{profile.englishForWork}</dd>
          </div>
        </dl>
      </header>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 dark:text-cyan-50">
          Contact
        </h2>
        <ul className="text-sm space-y-1">
          <li>
            <a
              className="underline decoration-cyan-400/60 hover:text-cyan-700 dark:hover:text-cyan-200"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              className="underline decoration-cyan-400/60 hover:text-cyan-700 dark:hover:text-cyan-200"
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
            >
              {profile.phone}
            </a>
          </li>
          <li>
            <a
              className="underline decoration-cyan-400/60 hover:text-cyan-700 dark:hover:text-cyan-200"
              href={profile.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="underline decoration-cyan-400/60 hover:text-cyan-700 dark:hover:text-cyan-200"
              href={profile.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 dark:text-cyan-50">
          Education
        </h2>
        {education.map((edu) => (
          <div key={edu.school} className="text-sm">
            <p className="font-medium text-slate-900 dark:text-cyan-50">{edu.school}</p>
            <p className="text-cyan-800/85 dark:text-cyan-300/85">
              {edu.degree} · {edu.period}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 dark:text-cyan-50">
          Career direction
        </h2>
        <p className="text-sm leading-relaxed text-slate-800 dark:text-cyan-50/90 mb-4">
          {career.directionSummary}
        </p>
        <div className="text-sm space-y-4">
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Search status</h3>
            <p className="text-cyan-800/90 dark:text-cyan-300/85">
              {career.jobSearchStatus === 'active' ? 'Actively searching' : career.jobSearchStatus}
              {' · '}
              target horizon {career.targetEmploymentHorizon} · {career.workMode} ·{' '}
              {career.preferredLocation}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Target titles</h3>
            <p className="text-cyan-800/90 dark:text-cyan-300/85">
              Primary: {career.targetTitles.primary}
            </p>
            <ul className="list-disc pl-5 mt-1 text-cyan-800/90 dark:text-cyan-300/85">
              {career.targetTitles.alsoConsider.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-1 text-cyan-800/90 dark:text-cyan-300/85">
              Minimum acceptable: {career.targetTitles.minimumAcceptable}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Experience & domains</h3>
            <p className="text-cyan-800/90 dark:text-cyan-300/85">
              Backend-focused experience: {career.yearsExperienceBackend} years · Domains:{' '}
              {career.domains.join(', ')}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Compensation (USD / month, gross)</h3>
            <p className="text-cyan-800/90 dark:text-cyan-300/85">
              Preferred: {career.desiredSalaryGrossUsdMonth.preferred} —{' '}
              {career.desiredSalaryGrossUsdMonth.notePreferred}. Local minimum:{' '}
              {career.desiredSalaryGrossUsdMonth.localMinimum}. Style:{' '}
              {career.compensationStyle.replace(/_/g, ' ')} ·{' '}
              {career.equityVsCash.replace(/_/g, ' ')} · Tax:{' '}
              {career.taxHandling.replace(/_/g, ' ')}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Goals (priority)</h3>
            <ul className="list-disc pl-5 text-cyan-800/90 dark:text-cyan-300/85">
              {career.goalsPriority.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Goals (secondary)</h3>
            <ul className="list-disc pl-5 text-cyan-800/90 dark:text-cyan-300/85">
              {career.goalsSecondary.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-slate-900 dark:text-cyan-50 mb-1">Deal breakers</h3>
            <ul className="list-disc pl-5 text-cyan-800/90 dark:text-cyan-300/85">
              {career.dealBreakers.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4 text-slate-900 dark:text-cyan-50">
          Skills
        </h2>
        <SkillBlock title="Top" items={skills.topSkills} />
        <SkillBlock title="Spoken languages" items={skills.spokenLanguages} />
        <SkillBlock title="Programming languages" items={skills.programmingLanguages} />
        <SkillBlock title="Backend & architecture" items={skills.backendArchitecture} />
        <SkillBlock title="Protocols" items={skills.protocols} />
        <SkillBlock title="Datastores" items={skills.datastores} />
        <SkillBlock title="Messaging" items={skills.messaging} />
        <SkillBlock title="Cloud & infra" items={skills.cloudInfra} />
        <SkillBlock title="Observability & ops" items={skills.observabilityOps} />
        <SkillBlock title="CI/CD & tooling" items={skills.cicdTooling} />
        <SkillBlock title="Production AI & tooling" items={skills.productionAiAndTooling} />
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4 text-slate-900 dark:text-cyan-50">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="text-sm">
              <div className="flex flex-col gap-0.5 mb-2">
                <h3 className="font-semibold text-slate-900 dark:text-cyan-50">{job.company}</h3>
                <p className="text-cyan-800/85 dark:text-cyan-400/85">
                  {job.role} · {job.period}
                  {job.location ? ` · ${job.location}` : ''}
                </p>
              </div>
              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-slate-800 dark:text-cyan-50/88 leading-relaxed">
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 dark:text-cyan-50">
          Honors
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800 dark:text-cyan-50/88">
          {honors.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
