/** Site & resume content — single source of truth. */
export const profile = {
  name: 'Dương Thái Minh',
  headline:
    'Distributed Systems Engineer (Go) | Kubernetes, Microservices, High-Throughput Systems | End-to-End Ownership | AI-Augmented Development',
  email: 'minh9a4@gmail.com',
  phone: '+84352408979',
  linkedin: 'https://www.linkedin.com/in/ferez96',
  github: 'https://github.com/ferez96',
  location: 'Quận 7, Ho Chi Minh City, Vietnam',
  timezone: 'Asia/Ho_Chi_Minh',
  englishForWork: 'communication & collaboration',
} as const

export const education = [
  {
    school: 'Ho Chi Minh City University of Technology (HCMUT)',
    degree: 'B.Sc. Computer Science',
    period: '2014–2020',
  },
] as const

export const career = {
  jobSearchStatus: 'active' as const,
  targetEmploymentHorizon: '2026-05-31',
  directionSummary: `Systems-level product delivery: own critical paths end-to-end in distributed environments; prioritize reliability, throughput, and maintainability; use AI (production ML paths, evaluation, developer tooling) to raise delivery performance and iteration speed—without abandoning strong backend/distributed foundations.`,
  targetTitles: {
    primary: 'Distributed Systems Engineer',
    alsoConsider: [
      'Staff Software Engineer (Distributed Systems / Platform)',
      'Senior Software Engineer (Backend / Distributed Systems)',
    ],
    minimumAcceptable: 'Mid-Senior Software Engineer',
  },
  yearsExperienceBackend: '~7',
  domains: ['Public Safety', 'Video Processing', 'Accounting & Finance'],
  goalsPriority: [
    'Maintain a stable income while advancing my professional growth',
    'Stay close to my family and friends in Ho Chi Minh City',
    'Safeguard and build upon my professional reputation and future opportunities',
  ],
  goalsSecondary: [
    'Competitive Salary',
    'Exceptional Career Growth',
    'Technically Challenging Projects',
    'Healthy Work-Life Balance',
    'Positive Company Culture',
  ],
  desiredSalaryGrossUsdMonth: {
    preferred: '3000+',
    notePreferred: 'Higher if globally competitive pay scale',
    localMinimum: '2500',
  },
  compensationStyle: 'salary_first',
  equityVsCash: 'prefer_cash',
  taxHandling: 'self_managed_with_authorities',
  workMode: 'Remote-first',
  preferredLocation: 'Ho Chi Minh City, Vietnam',
  dealBreakers: ['Outsourcing-only / body-shop slavery arrangements'],
} as const

export const skills = {
  topSkills: ['Algorithms', 'Go', 'Distributed Systems'],
  spokenLanguages: ['English', 'Vietnamese'],
  programmingLanguages: ['Go', 'Python', 'Java', 'C++'],
  backendArchitecture: [
    'Distributed systems',
    'Microservices',
    'Event-driven architecture',
    'API design',
    'Domain modeling',
    'Data pipelines',
  ],
  protocols: ['REST', 'gRPC', 'WebSocket'],
  datastores: [
    'Azure SQL',
    'MySQL',
    'Cassandra',
    'Redis',
    'Azure Blob Storage',
  ],
  messaging: ['Kafka', 'ActiveMQ', 'RabbitMQ'],
  cloudInfra: ['Kubernetes', 'Docker', 'Terraform', 'ArgoCD'],
  observabilityOps: [
    'Prometheus',
    'Grafana',
    'OpenTelemetry',
    'Splunk',
    'Sentry',
    'Opsgenie',
  ],
  cicdTooling: [
    'GitHub Actions',
    'Jenkins',
    'TeamCity',
    'Makefile',
    'Shell scripting',
  ],
  productionAiAndTooling: [
    'ML-backed features in production (integration, evaluation, operational concerns)',
    'Cost / load / latency trade-offs for AI pipelines',
    'AI-augmented development workflows (code review, iteration speed)',
  ],
} as const

export type ExperienceItem = {
  company: string
  period: string
  role: string
  location?: string
  highlights?: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Axon',
    period: 'Mar 2022 – Dec 2025',
    role: 'Software Engineer',
    highlights: [
      'Marker Management Service (Owner) — migrated Marker from monolith to standalone microservice on Kubernetes; consolidated legacy logic and data models; standardized REST APIs, migrated UI, deprecated legacy API; documentation and handoff with sign-off',
      'Face Re-identification (partial technical design lead) — co-led design for AI face detection and identity grouping; evaluated options with cost/load/storage estimates; defended approach to senior leadership; backend implementation with small team; shipped as part of Axon Top 5 Giant Leaps 2024',
    ],
  },
  {
    company: 'Teko',
    period: 'Sep 2019 – Jan 2022',
    role: 'Software Engineer',
    highlights: [
      'Developed Finance Management Service (Python Flask) and Billing Service (Golang)',
      'Implemented APIs per cross-service contracts; large-scale financial data for reporting and billing',
    ],
  },
  {
    company: 'Yedda.AI',
    period: 'Dec 2020 – May 2021',
    role: 'Software Engineer',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: ['Marketplace backend and data models'],
  },
  {
    company: 'Bach Khoa Algorithms Club',
    period: '2019 – Oct 2020',
    role: 'Founder',
  },
  {
    company: 'VNG (Zalo)',
    period: 'Jan 2019 – May 2019',
    role: 'Associate Software Developer',
  },
  {
    company: "Ho Chi Minh University of Technology's Olympiad in Informatics Team",
    period: 'Oct 2018 – Dec 2018',
    role: 'Coach',
  },
  {
    company: 'VNG (Zalo)',
    period: 'Apr 2018 – Sep 2018',
    role: 'Collaborator',
  },
  {
    company: 'VNG (Zalo)',
    period: 'Jan 2018 – Mar 2018',
    role: 'Intern',
  },
]

export const honors = [
  'Vietnam Informatics Olympiad 2017 — First Prize',
  'ACM-ICPC 2017 — Vietnam National Rank 72; Asia HCMC Regional Rank 46',
  'ACM-ICPC 2016 — Vietnam National Rank 19; Asia Nha Trang Regional Rank 38',
  'Vietnam Informatics Olympiad 2014 — Honorable Mention',
  'Vietnam National Young Informatics Contest 2011 — Second Prize',
] as const

export const portfolioRepoUrl = 'https://github.com/ferez96/portfolio'
