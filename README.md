# Portfolio

Next.js site for an independent backend practice. Case studies and notes live as MDX under `app/work/posts/`.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your production URL if it is not on Vercel (on Vercel, `VERCEL_URL` is used automatically when this is unset).

## Deploy

Deploy on [Vercel](https://vercel.com) or any host that supports Next.js. The template originally came from [Vercel’s portfolio / blog example](https://github.com/vercel/examples/tree/main/solutions/blog).
