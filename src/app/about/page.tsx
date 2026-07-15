import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TM Home Detailz is a family-owned pressure washing company from Lake County, Florida — built on grit, quality, and integrity by founder Travis Moss.",
};

const TIMELINE = [
  {
    year: "Born & raised",
    title: "Lake County, Florida",
    body: "Travis grows up outdoors, hooked on the satisfaction of transforming a space — mowing yards, cleaning pools, anything with a before and after.",
  },
  {
    year: "Age 18",
    title: "Walt Disney World mechanic",
    body: "Years of turning wrenches at the most detail-obsessed operation on earth. The standard sticks.",
  },
  {
    year: "2021",
    title: "The first pressure washer",
    body: "One machine, small side jobs, and a growing reputation for results you can photograph.",
  },
  {
    year: "January 2025",
    title: "All in",
    body: "Equipment upgraded, services expanded, focus shifted to commercial work. TM Home Detailz goes full time.",
  },
  {
    year: "Today",
    title: "Family owned & operated",
    body: "Travis in the field making things shine; his wife behind the brand and graphics; a son growing up in the same community the business serves.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Who we are"
        title="Built on grit."
        accent="Run on integrity."
        body="TM Home Detailz is a family-owned business from Lake County, Florida — and the story starts with a kid who loved a good before-and-after."
      />

      <section className="bg-foam pb-24 pt-20 text-ink md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            {/* portrait rail */}
            <div>
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-brand/10 shadow-[0_20px_50px_-24px_rgba(13,37,55,0.4)]">
                    <Image
                      src="/images/travis.jpg"
                      alt="Travis Moss standing beside his truck and pressure washing trailer"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/85 to-transparent p-7">
                      <p className="display text-2xl">Travis Moss</p>
                      <p className="label mt-1 text-spray">Founder &amp; lead technician</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {STATS.map((s) => (
                      <div key={s.label} className="rounded-2xl border border-brand/15 bg-white p-5 shadow-[0_12px_32px_-18px_rgba(13,37,55,0.3)]">
                        <p className="display text-2xl text-brand">
                          {s.value.toLocaleString()}
                          {s.suffix}
                        </p>
                        <p className="mt-1.5 text-xs leading-snug text-slate">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* the hose-line timeline */}
            <div>
              <Reveal>
                <p className="max-w-xl text-lg leading-relaxed text-slate">
                  &ldquo;Like most Florida boys, I grew up outdoors — always drawn to the
                  satisfaction of transforming a space. That passion for before-and-after
                  results eventually became this company.&rdquo;
                </p>
              </Reveal>

              <div className="relative mt-14">
                {/* the line — styled like a charged hose */}
                <span className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-gradient-to-b from-hydro via-brand to-brand/20" aria-hidden="true" />
                <div className="flex flex-col gap-12">
                  {TIMELINE.map((t, i) => (
                    <Reveal key={t.title} delay={i * 0.05}>
                      <div className="relative pl-10">
                        <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center" aria-hidden="true">
                          <span className="h-4 w-4 rounded-full border-2 border-hydro bg-foam" />
                          <span className="absolute h-1.5 w-1.5 rounded-full bg-hydro" />
                        </span>
                        <p className="label text-brand">{t.year}</p>
                        <h3 className="display mt-2 text-2xl text-ink md:text-3xl">{t.title}</h3>
                        <p className="mt-3 max-w-lg text-base leading-relaxed text-slate">{t.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={0.1}>
                <div className="mt-16 rounded-2xl border border-brand/15 bg-white p-8 shadow-[0_20px_50px_-28px_rgba(13,37,55,0.3)] md:p-10">
                  <p className="label mb-4 text-brand">Why &ldquo;Detailz&rdquo;?</p>
                  <p className="text-base leading-relaxed text-slate">
                    Because the last 10% is the whole job. Edges, corners, downspouts, the
                    dumpster pad nobody looks at — that&apos;s where a wash becomes a
                    detail. It&apos;s in the name so we can&apos;t forget it.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
