"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PowerWash from "@/components/PowerWash";
import JetButton from "@/components/JetButton";
import SplashMark from "@/components/SplashMark";
import { SITE } from "@/lib/site";

/* Hero: the screen is split by a pressure jet. Left, the pitch on deep water;
   right, the foamed-out Peterbilt behind a diagonal cut that matches the wand
   angle in the TM logo. The headline still gets washed clean on load. */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-abyss">
      {/* ---------- mobile backdrop: foam truck under heavy water ---------- */}
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <Image
          src="/images/fleet.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[68%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-abyss/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss/35 to-abyss" />
      </div>

      {/* ---------- desktop: diagonal jet-cut photo panel ---------- */}
      <div className="absolute inset-y-0 right-0 hidden w-[57%] md:block" aria-hidden="true">
        {/* skewed window onto the photo — the left edge is the wand stroke */}
        <div className="absolute inset-y-0 -right-40 left-0 origin-top-left skew-x-[7deg] overflow-hidden">
          <motion.div style={{ y: photoY }} className="absolute -inset-x-40 -inset-y-12 origin-top-left -skew-x-[7deg]">
            <motion.div
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/images/fleet.jpg"
                alt="Semi truck covered in foam during a TM Home Detailz fleet wash"
                fill
                priority
                className="object-cover object-[60%_55%]"
                sizes="60vw"
              />
            </motion.div>
          </motion.div>
          {/* keep the far edge readable against the stats strip */}
          <div className="absolute inset-0 bg-gradient-to-r from-abyss/55 via-transparent to-abyss/30" />
        </div>

        {/* the jet itself: glowing line + mist riding the cut */}
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
          {/* droplets sliding down the stroke */}
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
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-36 pt-28 md:px-8 md:pb-32"
      >
        <div className="md:max-w-[46%]">
          {/* the real mark, full size — not a favicon-sized afterthought */}
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
              className="h-24 w-24 drop-shadow-[0_6px_24px_rgba(2,171,223,0.35)] md:h-32 md:w-32"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="label mb-6 mt-2 flex items-center gap-3 text-spray"
          >
            <SplashMark className="h-3.5" />
            Commercial Pressure Washing · {SITE.base}
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
            Buildings, fleets, heavy equipment, and every square foot of concrete in
            between — washed hot, washed right, and photographed to prove it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.75 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <JetButton href="/contact">Request a Quote</JetButton>
            <a href="#proof" className="label group flex items-center gap-3 text-foam/80 transition-colors hover:text-hydro">
              See the proof
              <span className="grid h-10 w-10 place-items-center rounded-full border border-foam/25 transition-all duration-300 group-hover:translate-y-1 group-hover:border-hydro">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v11M3 9l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* pressure readout strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 3.0 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-foam/10 bg-abyss/65 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-8">
          {[
            ["4,000 PSI", "commercial-grade pressure"],
            ["250°F", "hot water on demand"],
            ["7 days", "on-site fleet scheduling"],
            ["Family", "owned & operated"],
          ].map(([big, small]) => (
            <div key={big} className="flex items-baseline gap-2.5">
              <span className="display text-xl text-hydro md:text-2xl">{big}</span>
              <span className="text-[0.7rem] font-medium uppercase tracking-wider text-mist-dim">{small}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
