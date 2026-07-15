"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PowerWash from "@/components/PowerWash";
import JetButton from "@/components/JetButton";
import SplashMark from "@/components/SplashMark";
import { SITE } from "@/lib/site";

/* Hero: the screen is split by a pressure jet on the wand angle from the TM
   logo. Left, the pitch; right, live footage of a Florida pool deck getting
   its color back. The headline still washes itself clean on load. */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-abyss">
      {/* ---------- mobile backdrop: the pool-deck footage under water glass ---------- */}
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover object-[62%_center]"
        >
          <source src="/videos/hero-pool.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-abyss/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/80 via-abyss/30 to-abyss" />
      </div>

      {/* ---------- desktop: diagonal jet-cut video panel ---------- */}
      <div className="absolute inset-y-0 right-0 hidden w-[57%] md:block" aria-hidden="true">
        <div className="absolute inset-y-0 -right-40 left-0 origin-top-left skew-x-[7deg] overflow-hidden">
          <div className="absolute -inset-x-24 inset-y-0 origin-top-left -skew-x-[7deg]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-poster.jpg"
              className="h-full w-full object-cover object-[55%_60%]"
            >
              <source src="/videos/hero-pool.mp4" type="video/mp4" />
            </video>
          </div>
          {/* readability feather on the seam side only — keep the footage bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-abyss/45 via-transparent to-transparent" />
        </div>

        {/* the jet riding the cut */}
        <div className="absolute inset-y-0 left-0 origin-top-left skew-x-[7deg]">
          <div
            className="absolute inset-y-0 -left-[2px] w-[3px]"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(2,171,223,0.9) 60%, rgba(2,171,223,0.35))",
              boxShadow: "0 0 22px 5px rgba(2,171,223,0.45)",
            }}
          />
          <div
            className="absolute inset-y-0 -left-4 w-8 blur-md"
            style={{ background: "linear-gradient(90deg, transparent, rgba(127,214,242,0.28), transparent)" }}
          />
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute left-[-3px] h-6 w-[5px] rounded-full bg-spray/80 blur-[1px]"
              initial={{ top: "-10%", opacity: 0 }}
              animate={{ top: "110%", opacity: [0, 0.9, 0.9, 0] }}
              transition={{ duration: 3.2, delay: 1.2 + i * 2.1, repeat: Infinity, repeatDelay: 3.4, ease: "easeIn" }}
            />
          ))}
        </div>
      </div>

      {/* ambient rising bubbles on the deep-water side */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-[45%]" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${(i * 13 + 5) % 100}%`,
              width: `${5 + (i % 4) * 3}px`,
              height: `${5 + (i % 4) * 3}px`,
              animationDuration: `${12 + (i % 5) * 4}s`,
              animationDelay: `${i * 1.6}s`,
              ["--o" as string]: `${0.14 + (i % 3) * 0.09}`,
              ["--dx" as string]: `${(i % 2 ? -1 : 1) * (16 + i * 3)}px`,
            }}
          />
        ))}
      </div>

      {/* ---------- content ---------- */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-5 pb-24 pt-32 md:px-8 md:pb-16 md:pt-36"
      >
        <div className="md:max-w-[44%]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/logo-white.png"
              alt="TM Home Detailz"
              width={220}
              height={220}
              priority
              className="h-24 w-24 drop-shadow-[0_6px_24px_rgba(2,171,223,0.4)] md:h-32 md:w-32"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="label mb-6 mt-2 flex items-center gap-3 text-spray"
          >
            <SplashMark className="h-3.5" />
            Residential &amp; Commercial · Lake County, FL
          </motion.p>

          <h1 className="display text-[clamp(2.7rem,10.5vw,4rem)] md:text-[clamp(2.6rem,5vw,5rem)]">
            <PowerWash text="THE DETAILZ" delay={0.5} duration={1.05} className="block" />
            <PowerWash text="MAKE THE" delay={1.15} duration={0.95} className="block" />
            <PowerWash text="DIFFERENCE." delay={1.8} duration={1.05} cleanClassName="text-hydro" className="block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-7 max-w-md text-base leading-relaxed text-mist md:text-lg"
          >
            Driveways, homes, storefronts, and whole fleets — washed hot, washed right,
            and photographed to prove it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.75 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <JetButton href="/contact">Get My Free Quote</JetButton>
            <a href="#proof" className="label group flex items-center gap-3 text-foam/85 transition-colors hover:text-hydro">
              See the proof
              <span className="grid h-10 w-10 place-items-center rounded-full border border-foam/25 transition-all duration-300 group-hover:translate-y-1 group-hover:border-hydro">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v11M3 9l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* proof points, worked into the composition — not a bolted-on bar */}
          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="mt-12 flex max-w-md flex-wrap items-center gap-x-7 gap-y-3 border-t border-foam/15 pt-6"
          >
            {[
              ["4,000 PSI", "pro equipment"],
              ["250°F", "hot water"],
              ["Family", "owned & local"],
            ].map(([big, small]) => (
              <li key={big} className="flex items-baseline gap-2">
                <span className="display text-lg text-spray">{big}</span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-mist-dim">{small}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
