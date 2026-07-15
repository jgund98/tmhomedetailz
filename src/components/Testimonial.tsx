import { Reveal } from "@/components/Reveal";

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-foam py-24 text-abyss md:py-32">
      {/* faint waterline behind quote */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 w-full -translate-y-1/2 opacity-[0.05]"
        aria-hidden="true"
      >
        <path d="M0 160 C 240 60, 480 260, 720 160 C 960 60, 1200 260, 1440 160" stroke="#105089" strokeWidth="40" fill="none" strokeLinecap="round" />
      </svg>

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
      </div>
    </section>
  );
}
