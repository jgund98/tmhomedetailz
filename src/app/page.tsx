import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import GrimeCanvas from "@/components/GrimeCanvas";
import ServiceFlood from "@/components/ServiceFlood";
import FleetSection from "@/components/FleetSection";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonial from "@/components/Testimonial";
import AreaRipple from "@/components/AreaRipple";
import SocialReel from "@/components/SocialReel";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import JetButton from "@/components/JetButton";
import SplashMark from "@/components/SplashMark";

export default function Home() {
  return (
    <>
      <Hero />
      <GrimeCanvas />
      <ServiceFlood />
      <FleetSection />

      {/* proof: before/after */}
      <section className="relative bg-foam py-24 text-ink md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="label mb-4 flex items-center gap-3 text-brand">
                  <SplashMark className="h-3.5" />
                  Receipts, not promises
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display text-4xl md:text-6xl">
                  Every job leaves
                  <br />
                  <span className="text-hydro">evidence.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-slate">
                  Curb appeal isn&apos;t a coat of paint — it&apos;s concrete that looks
                  poured yesterday. Drag the wand and watch a whole front yard change
                  its mind.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9">
                  <JetButton href="/work">See more work</JetButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <BeforeAfter
                before="/images/house-dirty.jpg"
                after="/images/house-clean.jpg"
                altBefore="Florida home with a grimy, algae-stained sidewalk"
                altAfter="The same home with bright, freshly washed concrete"
                aspect="aspect-[3/2]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* family story teaser */}
      <section className="relative overflow-hidden bg-abyss py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-hydro/15">
                <Image
                  src="/images/travis.jpg"
                  alt="Travis Moss, founder of TM Home Detailz, beside his rig"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/85 to-transparent p-6">
                  <p className="display text-xl text-foam">Travis Moss</p>
                  <p className="label mt-1 text-spray">Founder · Lake County native</p>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="label mb-4 flex items-center gap-3 text-hydro">
                  <SplashMark className="h-3.5" />
                  Family owned. Florida proud.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display text-4xl md:text-6xl">
                  Built on grit,
                  <br />
                  run on <span className="text-hydro">integrity.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-mist">
                  From a Walt Disney World mechanic with one pressure washer to a
                  commercial operation trusted across Central Florida — TM Home Detailz
                  is a family business raising the standard (and a son) in the same
                  community we serve.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <Link href="/about" className="label drip-link mt-8 inline-block pb-1 text-spray">
                  Read our story →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <AreaRipple />
      <SocialReel />
      <CtaBand />
    </>
  );
}
