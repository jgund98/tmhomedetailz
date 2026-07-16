import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import SplashMark from "@/components/SplashMark";
import { SOCIAL_CARDS, SITE } from "@/lib/site";

/* An endless film strip of Travis's real clips — every card is a doorway to
   the socials. Pressure washing is the most-watchable trade on the internet. */

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 8.6a6.8 6.8 0 0 1-4.2-1.5v7.4a6.3 6.3 0 1 1-6.3-6.3c.3 0 .7 0 1 .1v3.3a3 3 0 1 0 2.1 2.9V1.9h3.2A4.6 4.6 0 0 0 21 5.4z" />
    </svg>
  );
}
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// alternate TikTok / Instagram destinations across the cards
const CARDS = SOCIAL_CARDS.map((c, i) => ({
  ...c,
  id: `${c.tag}-${i}`,
  href: i % 2 === 0 ? SITE.tiktok : SITE.instagram,
  platform: (i % 2 === 0 ? "tiktok" : "instagram") as "tiktok" | "instagram",
}));

function Card({ c }: { c: (typeof CARDS)[number] }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-44 shrink-0 overflow-hidden rounded-2xl border border-hydro/15 md:w-52"
      style={{ aspectRatio: "9 / 15" }}
      aria-label={`${c.label} — watch on ${c.platform === "tiktok" ? "TikTok" : "Instagram"}`}
    >
      <Image src={c.poster} alt={c.label} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" sizes="208px" />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/45 via-transparent to-abyss/80" />
      <div className="absolute inset-x-0 top-0 flex items-center gap-2 p-3">
        {c.platform === "tiktok" ? <TikTokIcon className="h-3.5 w-3.5 text-foam" /> : <InstagramIcon className="h-3.5 w-3.5 text-foam" />}
        <span className="text-[0.6rem] font-semibold tracking-wider text-foam/90">@tmhomedetailz</span>
      </div>
      <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-abyss/55 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-hydro">
        <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5 3.2v9.6L13 8z" fill="currentColor" className="text-foam transition-colors group-hover:text-abyss" />
        </svg>
      </span>
      <div className="absolute inset-x-0 bottom-0 p-3">
        <span className="label mb-1.5 inline-block rounded-full bg-hydro/90 px-2 py-0.5 text-[0.48rem] text-abyss">{c.tag}</span>
        <p className="display text-sm leading-tight text-foam">{c.label}</p>
      </div>
    </a>
  );
}

export default function SocialStrip() {
  return (
    <section className="grain relative overflow-hidden bg-abyss py-20 md:py-28">
      <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-5 px-5 md:mb-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Reveal>
            <p className="label mb-3 flex items-center gap-3 text-hydro">
              <SplashMark className="h-3.5" />
              @tmhomedetailz · everywhere
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-3xl text-foam md:text-5xl">
              The most satisfying <br className="hidden sm:block" />
              feed in <span className="text-hydro">Florida.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="label sheen inline-flex items-center gap-2.5 rounded-full border border-spray/35 px-6 py-3.5 text-foam transition-colors hover:border-hydro hover:text-hydro">
              <TikTokIcon className="h-4 w-4" /> TikTok
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="label sheen inline-flex items-center gap-2.5 rounded-full border border-spray/35 px-6 py-3.5 text-foam transition-colors hover:border-hydro hover:text-hydro">
              <InstagramIcon className="h-4 w-4" /> Instagram
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="marquee-hover relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-abyss to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-abyss to-transparent md:w-32" />
          <div className="marquee-track flex w-max gap-4 pr-4 [animation-duration:64s] md:gap-5 md:pr-5">
            {[...CARDS, ...CARDS].map((c, i) => (
              <Card key={`${c.id}-${i}`} c={c} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-9 text-center text-xs uppercase tracking-[0.2em] text-mist-dim">
          Tap any clip to follow along — new transformations weekly
        </p>
      </Reveal>
    </section>
  );
}
