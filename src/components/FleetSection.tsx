"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Surface } from "@/components/Reveal";

/* Full-bleed cinematic feature: the foamed-out Peterbilt. Type slides over the
   image on scroll like water sheeting off a hood. */
export default function FleetSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const typeX = useTransform(scrollYProgress, [0.1, 0.9], ["3%", "-3%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-abyss">
      <div className="relative h-[130svh] min-h-[720px]">
        <motion.div style={{ y: imgY }} className="absolute inset-[-10%_0]">
          <Image
            src="/images/fleet.jpg"
            alt="Semi truck fully covered in cleaning foam during a TM fleet wash"
            fill
            className="object-cover object-[50%_60%]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss/20 to-abyss" />

        <div className="sticky top-0 flex h-svh flex-col justify-center">
          <motion.h2
            style={{ x: typeX }}
            className="display whitespace-nowrap px-5 text-[clamp(2.2rem,10.5vw,11rem)] leading-none text-foam md:px-0"
            aria-label="Fleets. Rigs. Heavy iron."
          >
            <span className="block md:ml-[5vw]">
              <Surface>Fleets. Rigs.</Surface>
            </span>
            <span className="block text-hydro md:ml-[14vw]">
              <Surface delay={0.12}>Heavy iron.</Surface>
            </span>
          </motion.h2>

          <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
            <Reveal delay={0.2} className="max-w-md">
              <p className="text-base leading-relaxed text-foam/95 [text-shadow:0_1px_14px_rgba(4,18,31,0.9)] md:text-lg">
                Two-step chemistry, hand washing, and hot water — on your yard, on your
                schedule. From a single box truck to the whole fleet, we keep your name
                clean everywhere it drives.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/services/fleet-washing"
                  className="label sheen inline-flex items-center justify-center gap-2 rounded-full border border-spray/60 bg-abyss/55 px-7 py-4 text-foam backdrop-blur-sm transition-colors hover:border-hydro hover:text-hydro"
                >
                  Fleet Washing
                </Link>
                <Link
                  href="/services/heavy-equipment"
                  className="label sheen inline-flex items-center justify-center gap-2 rounded-full border border-spray/60 bg-abyss/55 px-7 py-4 text-foam backdrop-blur-sm transition-colors hover:border-hydro hover:text-hydro"
                >
                  Heavy Equipment
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
