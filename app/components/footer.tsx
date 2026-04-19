import { portfolioRepoUrl, profile } from 'app/data/profile'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const linkClass =
  'flex items-center transition-all hover:text-cyan-700 dark:hover:text-cyan-200'

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col flex-wrap gap-x-4 gap-y-2 text-cyan-800/80 md:flex-row md:items-center dark:text-cyan-400/80">
        <li>
          <a className={linkClass} href="/rss">
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a className={linkClass} href={`mailto:${profile.email}`}>
            <ArrowIcon />
            <p className="ml-2 h-7">email</p>
          </a>
        </li>
        <li>
          <a
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
            href={profile.linkedin}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
            href={profile.github}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
            href={portfolioRepoUrl}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">site source</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-cyan-800/70 dark:text-cyan-500/70">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
