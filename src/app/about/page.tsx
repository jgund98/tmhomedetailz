import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SplashMark from "@/components/SplashMark";
import { Reveal } from "@/components/Reveal";
import { STATS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Travis Moss — Family-Owned Pressure Washing in Lake County FL",
  description:
    "Meet Travis Moss, the Lake County native behind TM Home Detailz — a family-owned pressure washing company built on grit, quality, and integrity, serving Central Florida since 2021.",
};

const TIMELINE = [
  {
    year: "Born & raised",
    title: "Lake County, Florida",
    body: "I grew up outdoors, hooked on the satisfaction of transforming a space — mowing yards, cleaning pools, anything with a before and after.",
  },
  {
    year: "Age 18",
    title: "Walt Disney World mechanic",
    body: "Years of turning wrenches at the most detail-obsessed operation on earth. The standard stuck.",
  },
  {
    year: "2021",
    title: "The first pressure washer",
    body: "One machine, small side jobs after work, and a growing reputation for results you can photograph.",
  },
  {
    year: "January 2025",
    title: "All in",
    body: "Upgraded the equipment, expanded the services, and took TM Home Detailz full time — homes, businesses, fleets, all of it.",
  },
  {
    year: "Today",
    title: "Family owned & operated",
    body: "Me in the field making things shine, my wife behind the brand, and our son growing up in the same community we serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="From the owner's tailgate"
        title="Hey there —"
        accent="I'm Travis."
        body="Proud Lake County native, born and raised. This page isn't an 'About Us' written by a marketing team — it's me telling you who's showing up at your property."
        image="/images/truck-rig-field.jpg"
        imageAlt="Travis Moss with the TM Home Detailz truck and pressure washing trailer rig"
      />

      <section className="bg-foam pb-24 pt-20 text-ink md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            {/* the letter */}
            <div>
              <Reveal>
                <div className="relative rounded-3xl border border-brand/15 bg-white p-8 shadow-[0_24px_60px_-28px_rgba(13,37,55,0.35)] md:p-12">
                  <SplashMark className="h-5" />
                  <div className="mt-8 flex flex-col gap-6 text-[1.05rem] leading-relaxed text-slate">
                    <p>
                      Like most Florida boys, I grew up outdoors — always drawn to the
                      satisfaction of transforming a space. Whether it was mowing a yard,
                      cleaning a pool, or anything in between, that passion for
                      before-and-after results eventually led me to pressure washing.
                    </p>
                    <p>
                      At 18, I started working for Walt Disney World as a mechanic, and in
                      2021 I bought my first pressure washer and started taking on small
                      side jobs. Over the years, that side hustle grew into TM Home
                      Detailz — a family-owned and operated business built on{" "}
                      <strong className="font-semibold text-ink">grit, quality, and integrity</strong>.
                      In January 2025, I made the leap to go all in: upgrading equipment,
                      expanding services, and taking on everything from driveways to
                      whole commercial properties.
                    </p>
                    <p>
                      <strong className="font-semibold text-ink">
                        My wife is the creative mind behind our branding and graphics
                      </strong>{" "}
                      — the logo on this page, the wrap on the truck, all of it — while
                      I&apos;m out in the field making things shine. We&apos;re raising our
                      son here in the same community we serve, and we&apos;re proud to be
                      building a business that&apos;s rooted in{" "}
                      <strong className="font-semibold text-ink">
                        hard work, trust, and results you can see
                      </strong>.
                    </p>
                    <p>
                      If you call the number on this site, you get me. If someone shows up
                      at your property, it&apos;s someone I&apos;d trust at my own. That&apos;s
                      the whole business plan.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="script whitespace-nowrap text-4xl text-brand md:text-5xl">Travis Moss</p>
                      <p className="label mt-2 whitespace-nowrap text-[0.6rem] text-slate">Owner · TM Home Detailz</p>
                    </div>
                    <a
                      href={SITE.smsHref}
                      className="label shrink-0 rounded-full border border-brand/25 px-5 py-3.5 text-center text-brand transition-colors hover:border-hydro hover:text-hydro"
                    >
                      <span className="whitespace-nowrap">Text me · {SITE.phone}</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* her work, credited */}
              <Reveal delay={0.1}>
                <div className="mt-6 flex items-center gap-5 rounded-3xl bg-trench p-6 md:p-7">
                  <Image src="/images/logo-white.png" alt="The TM Home Detailz logo" width={80} height={80} className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
                  <p className="text-sm leading-relaxed text-mist">
                    <span className="label mb-1.5 block text-spray">Credit where it&apos;s&nbsp;due</span>
                    The mark, the colors, the truck wrap — that&apos;s my wife&apos;s work. She
                    builds the brand; I keep the promise it makes.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* portrait rail */}
            <div>
              <div className="flex flex-col gap-6 lg:sticky lg:top-32">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-brand/10 shadow-[0_20px_50px_-24px_rgba(13,37,55,0.4)]">
                    <Image
                      src="/images/travis.jpg"
                      alt="Travis Moss standing beside his truck and pressure washing trailer"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/85 to-transparent p-6">
                      <p className="display text-2xl text-foam">Travis Moss</p>
                      <p className="label mt-1 text-spray">Founder · lead technician · quote-writer</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="grid grid-cols-2 gap-4">
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
          </div>

          {/* the hose-line timeline */}
          <div className="mx-auto mt-24 max-w-3xl">
            <Reveal>
              <p className="label mb-10 flex items-center gap-3 text-brand">
                <SplashMark className="h-3.5" />
                How we got here
              </p>
            </Reveal>
            <div className="relative">
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
                  dumpster pad nobody looks at — that&apos;s where a wash becomes a detail.
                  It&apos;s in the name so we can&apos;t forget it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
