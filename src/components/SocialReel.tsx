import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

/* TikTok / Instagram, incorporated as a "satisfying feed": an endless film strip
   of vertical clips from the field. Every card is a doorway to the socials —
   because pressure washing is the most-watchable trade on the internet. */

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

const CLIPS: {
  img: string;
  alt: string;
  label: string;
  tag: string;
  platform: "tiktok" | "instagram";
}[] = [
  { img: "/images/sidewalk.jpg", alt: "Surface cleaner cutting one clean lane through dark concrete", label: "One pass. That's it.", tag: "Oddly satisfying", platform: "tiktok" },
  { img: "/images/fleet.jpg", alt: "Semi truck buried in white foam", label: "Foam party: fleet edition", tag: "Fleet wash", platform: "instagram" },
  { img: "/images/corner-during.jpg", alt: "Degreaser foam working across a grimy slab", label: "Degreaser doing its thing", tag: "Deep clean", platform: "tiktok" },
  { img: "/images/equipment.jpg", alt: "Rooftop wash at sunrise, sky reflected in wet TPO", label: "Sunrise shift, rooftop office", tag: "Roof wash", platform: "instagram" },
  { img: "/images/steam.jpg", alt: "Steam rolling off hot-water surface cleaning", label: "Hot water > everything", tag: "Steam mode", platform: "tiktok" },
  { img: "/images/roof.jpg", alt: "Technician washing a storefront from a boom lift", label: "Boom lift kind of day", tag: "Commercial", platform: "instagram" },
];

function ClipCard({ clip }: { clip: (typeof CLIPS)[number] }) {
  const href = clip.platform === "tiktok" ? SITE.tiktok : SITE.instagram;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-52 shrink-0 overflow-hidden rounded-2xl border border-hydro/15 md:w-60"
      style={{ aspectRatio: "9 / 15" }}
      aria-label={`${clip.label} — watch on ${clip.platform === "tiktok" ? "TikTok" : "Instagram"}`}
    >
      <Image
        src={clip.img}
        alt={clip.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        sizes="240px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/55 via-transparent to-abyss/80" />

      {/* handle row */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-2 p-3.5">
        {clip.platform === "tiktok" ? (
          <TikTokIcon className="h-4 w-4 text-foam" />
        ) : (
          <InstagramIcon className="h-4 w-4 text-foam" />
        )}
        <span className="text-[0.65rem] font-semibold tracking-wider text-foam/90">@tmhomedetailz</span>
      </div>

      {/* play affordance */}
      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-abyss/55 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-hydro">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5 3.2v9.6L13 8z" fill="currentColor" className="text-foam transition-colors group-hover:text-abyss" />
        </svg>
      </span>

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 p-3.5">
        <span className="label mb-2 inline-block rounded-full bg-hydro/90 px-2.5 py-1 text-[0.5rem] text-abyss">
          {clip.tag}
        </span>
        <p className="display text-lg leading-tight text-foam">{clip.label}</p>
      </div>
    </a>
  );
}

export default function SocialReel() {
  return (
    <section className="grain relative overflow-hidden bg-abyss py-24 md:py-32">
      <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-6 px-5 md:mb-16 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Reveal>
            <p className="label mb-4 flex items-center gap-3 text-hydro">
              <span className="inline-block h-px w-10 bg-hydro" />
              @tmhomedetailz · everywhere
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display text-4xl md:text-6xl">
              The most satisfying
              <br />
              feed in <span className="text-hydro">Florida.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="label sheen inline-flex items-center gap-2.5 rounded-full border border-spray/35 px-6 py-3.5 text-foam transition-colors hover:border-hydro hover:text-hydro"
            >
              <TikTokIcon className="h-4 w-4" /> TikTok
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="label sheen inline-flex items-center gap-2.5 rounded-full border border-spray/35 px-6 py-3.5 text-foam transition-colors hover:border-hydro hover:text-hydro"
            >
              <InstagramIcon className="h-4 w-4" /> Instagram
            </a>
          </div>
        </Reveal>
      </div>

      {/* endless clip strip — pauses while you hover */}
      <Reveal>
        <div className="marquee-hover relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-abyss to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-abyss to-transparent md:w-32" />
          <div className="marquee-track flex w-max gap-4 pr-4 [animation-duration:58s] md:gap-5 md:pr-5">
            {[...CLIPS, ...CLIPS].map((clip, i) => (
              <ClipCard key={`${clip.img}-${i}`} clip={clip} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-mist-dim">
          New transformations drop weekly — tap any clip to follow along
        </p>
      </Reveal>
    </section>
  );
}
