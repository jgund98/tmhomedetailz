import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import BeforeAfter from "@/components/BeforeAfter";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Before & After — Pressure Washing Results in Central Florida",
  description:
    "Real before-and-after pressure washing results from TM Home Detailz: driveways, homes, storefronts, fleets and heavy equipment across Lake County and greater Orlando.",
  alternates: { canonical: "/work" },
};

const SHOTS = [
  { src: "/images/truck-rig-field.jpg", alt: "TM Home Detailz truck and trailer rig with Travis", label: "The rig, ready to roll", tall: true },
  { src: "/images/fleet.jpg", alt: "Semi truck mid-wash, fully foamed", label: "Fleet wash — two-step foam", tall: true },
  { src: "/images/equipment.jpg", alt: "TPO roof cleaning at sunrise", label: "Commercial TPO roof — sunrise pass", tall: true },
  { src: "/images/roof.jpg", alt: "Storefront washing from a boom lift", label: "New-construction storefront wash", tall: true },
  { src: "/images/sidewalk.jpg", alt: "Surface cleaner cutting a clean lane through dirty concrete", label: "Walkway surface clean", tall: true },
  { src: "/images/steam.jpg", alt: "Hot water pass throwing steam off a sidewalk", label: "Hot water sanitation", tall: true },
  { src: "/images/building.jpg", alt: "Handrail ramp being surface cleaned", label: "Entry ramp restoration", tall: true },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Our Work"
        title="Our work speaks."
        accent="Loudly."
        body="Every project gets documented before, during, and after — the transformation is the product. A few recent favorites, straight off the trailer."
      />

      {/* the money shot: interactive before/after story */}
      <section className="bg-foam pb-20 pt-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-3xl md:text-4xl">
                A Florida front yard, <span className="text-hydro">found again</span>
              </h2>
              <p className="label text-slate">Drag the wand ↔</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter
              before="/images/house-dirty.jpg"
              after="/images/house-clean.jpg"
              altBefore="Home with algae-stained concrete before washing"
              altAfter="Same home with bright clean concrete after washing"
              aspect="aspect-[4/5] sm:aspect-[16/9]"
            />
          </Reveal>

          <Reveal>
            <div className="mb-8 mt-20 flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-3xl md:text-4xl">
                Service entry, <span className="text-hydro">years of grease</span>
              </h2>
              <p className="label text-slate">Real job · documented</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter
              before="/images/corner-before.jpg"
              after="/images/corner-after.jpg"
              altBefore="Service entry blackened with grease and algae before cleaning"
              altAfter="Service entry restored to bare, clean concrete"
              aspect="aspect-[4/5] sm:aspect-[16/9]"
            />
          </Reveal>

          {/* during strip */}
          <Reveal delay={0.15}>
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-center">
              <div className="relative aspect-[3/4] max-h-80 overflow-hidden rounded-2xl border border-brand/10 shadow-[0_20px_50px_-24px_rgba(13,37,55,0.4)] md:max-h-none">
                <Image src="/images/corner-during.jpg" alt="Mid-clean: degreaser foam working across the slab" fill className="object-cover" sizes="(min-width: 768px) 35vw, 100vw" />
                <span className="label absolute left-4 top-4 rounded-full bg-abyss/70 px-3.5 py-1.5 text-spray backdrop-blur-sm">During</span>
              </div>
              <div className="rounded-2xl border border-brand/15 bg-white p-8 shadow-[0_20px_50px_-28px_rgba(13,37,55,0.3)] md:p-10">
                <p className="label mb-4 text-brand">How this one went down</p>
                <p className="text-base leading-relaxed text-slate">
                  Degrease → dwell → hot-water surface clean → rinse and neutralize. The
                  middle photo is the part most companies skip: chemistry doing its work
                  before a single PSI gets spent. That&apos;s why the after looks like new
                  concrete instead of clean-ish dirt.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* gallery */}
      <section className="bg-foam pb-24 text-ink md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="label mb-8 flex items-center gap-3 text-brand">
              <span className="inline-block h-px w-10 bg-brand" />
              From the field
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SHOTS.map((shot, i) => (
              <Reveal key={shot.src + i} delay={(i % 3) * 0.07}>
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-hydro/10">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/75 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-5 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="label text-spray">{shot.label}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-sm text-slate">
              Fresh transformations drop weekly on{" "}
              <a href="https://www.instagram.com/tmhomedetailz/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline underline-offset-4">
                Instagram
              </a>{" "}
              and{" "}
              <a href="https://www.tiktok.com/@tmhomedetailz" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline underline-offset-4">
                TikTok
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
