"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PowerWash from "@/components/PowerWash";
import JetButton from "@/components/JetButton";
import { SITE } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-abyss">
      {/* cinematic backdrop — sunrise TPO roof wash */}
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/equipment.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[62%_38%]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/78 to-abyss/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss/60" />
      </motion.div>

      {/* ambient rising bubbles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${(i * 11 + 4) % 100}%`,
              width: `${5 + (i % 4) * 3}px`,
              height: `${5 + (i % 4) * 3}px`,
              animationDuration: `${11 + (i % 5) * 4}s`,
              animationDelay: `${i * 1.4}s`,
              ["--o" as string]: `${0.16 + (i % 3) * 0.1}`,
              ["--dx" as string]: `${(i % 2 ? -1 : 1) * (18 + i * 3)}px`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-28 pt-32 md:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="label mb-6 flex items-center gap-3 text-spray"
        >
          <span className="inline-block h-px w-10 bg-hydro" />
          Commercial Pressure Washing · {SITE.base}
        </motion.p>

        <h1 className="display max-w-5xl text-[clamp(2.9rem,9.5vw,7.5rem)]">
          <PowerWash text="THE DETAILZ" delay={0.45} duration={1.15} className="block" />
          <PowerWash text="MAKE THE" delay={1.15} duration={1.0} className="block" />
          <span className="block">
            <PowerWash text="DIFFERENCE." delay={1.85} duration={1.15} cleanClassName="text-hydro" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-mist"
        >
          Buildings, fleets, heavy equipment, and every square foot of concrete in between —
          washed hot, washed right, and photographed to prove it. Family owned. Florida proud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.85 }}
          className="mt-10 flex flex-wrap items-center gap-5"
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
      </motion.div>

      {/* pressure readout strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 3.1 }}
        className="relative z-10 border-t border-foam/10 bg-abyss/60 backdrop-blur-sm"
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
