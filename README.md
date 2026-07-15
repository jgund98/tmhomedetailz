# TM Home Detailz

Marketing site for **TM Home Detailz** — family-owned commercial pressure washing in Lake County, Florida. Commercial exteriors, fleet washing, heavy equipment, surface cleaning, roof washing, and hot water sanitation.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static output)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- TypeScript, pnpm

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3720
```

## Build & run

```bash
pnpm build
pnpm start      # production server on :3720
```

## Where things live

- `src/lib/site.ts` — all copy-adjacent data: services, cities, contact info, stats
- `src/components/` — sections & interactions (PowerWash headline, GrimeCanvas wash-it-yourself, BeforeAfter jet slider, SocialReel, …)
- `public/images/` — brand assets and field photography
