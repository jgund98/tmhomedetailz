import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-foam py-24 text-abyss md:py-32">
      {/* the real TM splash as a watermark ornament */}
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={560}
        height={280}
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 w-72 -rotate-12 opacity-[0.07] md:w-[26rem]"
      />
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={400}
        height={200}
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-8 w-56 rotate-[168deg] opacity-[0.05] md:w-80"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <div className="mb-8 flex justify-center gap-1.5" aria-label="Five star review">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#02abdf" aria-hidden="true">
                <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
              </svg>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="display text-2xl leading-tight md:text-4xl">
            “Very professional and very thorough! Quality really shows in his workmanship —
            a true pleasure to work with. I would definitely use{" "}
            <span className="text-hydro">TM Home Detailz</span> again!”
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="label mt-8 text-brand">— Proud Property Owner, Lake County</p>
        </Reveal>
        <Reveal delay={0.25}>
          <a
            href="https://www.google.com/search?q=TM+Home+Detailz+pressure+washing+Lake+County+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-brand/20 px-5 py-2.5 transition-colors hover:border-hydro"
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#fbbc04">
                  <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
                </svg>
              ))}
            </span>
            <span className="text-xs font-bold text-ink">5.0 on Google · 17 reviews</span>
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          {/* the company's actual light-background lockup, contact info and all */}
          <Image
            src="/images/logo-alt.png"
            alt="TM Home Detailz — tmhomedetailz@gmail.com · 352-602-9854"
            width={480}
            height={98}
            className="mx-auto mt-12 h-auto w-64 opacity-85 md:w-80"
          />
        </Reveal>
      </div>
    </section>
  );
}
