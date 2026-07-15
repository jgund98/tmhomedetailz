"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import JetButton from "@/components/JetButton";
import { SITE } from "@/lib/site";

/* Closing CTA: dark water with a slow surface swell and one clear ask. */
export default function CtaBand() {
  return (
    <section className="caustics grain relative overflow-hidden bg-abyss py-28 md:py-36">
      {/* slow moving waterline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="swell absolute top-0 h-full w-[106%]">
          <path d="M0 30 C 200 70, 420 0, 640 40 C 860 80, 1080 10, 1440 46 L 1440 0 L 0 0 Z" fill="#071e30" />
        </svg>
      </div>

      {/* real splash, ghosted behind the ask */}
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={640}
        height={320}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-6 w-80 rotate-6 opacity-[0.06] md:w-[30rem]"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <p className="label mb-5 text-hydro">Free custom quotes · Fast turnaround</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display text-[clamp(2.6rem,7.5vw,5.5rem)]">
            Let&apos;s make your property
            <br />
            the <span className="text-hydro">clean one</span> on the street.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <JetButton href="/contact">Request a Quote</JetButton>
            <motion.a
              href={SITE.phoneHref}
              whileHover={{ scale: 1.03 }}
              className="display text-2xl text-foam transition-colors hover:text-hydro md:text-3xl"
            >
              {SITE.phone}
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
