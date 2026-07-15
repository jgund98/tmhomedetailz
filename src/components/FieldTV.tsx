"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import SplashMark from "@/components/SplashMark";
import { FIELD_CLIPS, SITE } from "@/lib/site";

/* The Detailz Channel: Travis's real field footage, center-stage.
   The middle screen autoplays muted; tap it for sound, tap a side screen to
   swap it in behind a jet-wipe. Clips hand off to each other when they end. */

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 8.6a6.8 6.8 0 0 1-4.2-1.5v7.4a6.3 6.3 0 1 1-6.3-6.3c.3 0 .7 0 1 .1v3.3a3 3 0 1 0 2.1 2.9V1.9h3.2A4.6 4.6 0 0 0 21 5.4z" />
    </svg>
  );
}
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FieldTV() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false); // don't download until near viewport
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null); // width driven directly — no re-renders
  const sectionRef = useRef<HTMLElement>(null);
  const n = FIELD_CLIPS.length;
  const clip = FIELD_CLIPS[active];
  const prev = FIELD_CLIPS[(active + n - 1) % n];
  const next = FIELD_CLIPS[(active + 1) % n];

  const go = useCallback((i: number) => {
    if (progressRef.current) progressRef.current.style.width = "0%";
    setActive(((i % n) + n) % n);
  }, [n]);

  // mount lazily, pause offscreen, resume onscreen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
        const v = videoRef.current;
        if (!v) return;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15, rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  return (
    <section ref={sectionRef} className="caustics grain relative overflow-hidden bg-abyss py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="label mb-4 flex items-center gap-3 text-hydro">
                <SplashMark className="h-3.5" />
                @tmhomedetailz · live from the field
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display text-4xl text-foam md:text-6xl">
                Watch the grime
                <br />
                <span className="text-hydro">lose.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="label sheen inline-flex items-center gap-2.5 rounded-full border border-spray/35 px-6 py-3.5 text-foam transition-colors hover:border-hydro hover:text-hydro"
              >
                <TikTokIcon className="h-4 w-4" /> TikTok
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="label sheen inline-flex items-center gap-2.5 rounded-full border border-spray/35 px-6 py-3.5 text-foam transition-colors hover:border-hydro hover:text-hydro"
              >
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex items-center justify-center gap-5 md:gap-10">
            {/* previous — leaning in from the wings */}
            <button
              onClick={() => go(active - 1)}
              aria-label={`Play: ${prev.label}`}
              className="group relative hidden w-44 shrink-0 -rotate-3 overflow-hidden rounded-3xl border border-foam/15 opacity-60 transition-all duration-500 hover:-translate-y-2 hover:opacity-90 md:block lg:w-56"
              style={{ aspectRatio: "9/16" }}
            >
              <Image src={prev.poster} alt="" fill className="object-cover" sizes="224px" />
              <div className="absolute inset-0 bg-abyss/40 transition-colors group-hover:bg-abyss/15" />
              <span className="label absolute bottom-3 left-3 right-3 text-left text-[0.55rem] text-foam/90">{prev.label}</span>
            </button>

            {/* the main screen */}
            <div className="relative w-full max-w-[300px] shrink-0 md:max-w-[340px]">
              <div
                className="relative overflow-hidden rounded-[2rem] border-2 border-foam/20 bg-trench shadow-[0_40px_90px_-30px_rgba(2,171,223,0.35)]"
                style={{ aspectRatio: "9/16" }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={clip.id}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {!started && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={clip.poster} alt={clip.label} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                    )}
                    {started && (
                    <video
                      ref={videoRef}
                      key={clip.src}
                      src={clip.src}
                      poster={clip.poster}
                      autoPlay
                      muted={muted}
                      playsInline
                      preload="auto"
                      onTimeUpdate={(e) => {
                        const v = e.currentTarget;
                        if (v.duration && progressRef.current) {
                          progressRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
                        }
                      }}
                      onEnded={() => go(active + 1)}
                      onClick={() => setMuted((m) => !m)}
                      className="h-full w-full cursor-pointer object-cover"
                    />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* handle bar */}
                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-abyss/75 to-transparent p-4">
                  <Image src="/images/logo-white.png" alt="" width={28} height={28} className="h-7 w-7" />
                  <span className="text-[0.65rem] font-bold tracking-wider text-foam">@tmhomedetailz</span>
                  <span className="label ml-auto rounded-full bg-hydro/90 px-2.5 py-1 text-[0.5rem] text-abyss">{clip.tag}</span>
                </div>

                {/* caption + sound state */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/85 to-transparent p-4 pt-10">
                  <p className="display text-lg leading-tight text-foam">{clip.label}</p>
                  <p className="mt-1.5 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-spray">
                    {muted ? (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M11 5 6.5 9H3v6h3.5L11 19zM16 9l5 6m0-6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Tap for sound
                      </>
                    ) : (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M11 5 6.5 9H3v6h3.5L11 19zM15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Sound on — tap to mute
                      </>
                    )}
                  </p>
                </div>

                {/* water-pressure progress line */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-foam/10">
                  <div
                    ref={progressRef}
                    className="h-full bg-hydro shadow-[0_0_10px_rgba(2,171,223,0.8)]"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>

              {/* mobile prev/next */}
              <div className="mt-5 flex items-center justify-between md:hidden">
                <button
                  onClick={() => go(active - 1)}
                  aria-label="Previous clip"
                  className="grid h-11 w-11 place-items-center rounded-full border border-foam/25 text-foam active:bg-hydro active:text-abyss"
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {FIELD_CLIPS.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => go(i)}
                      aria-label={`Play clip ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-hydro" : "w-2 bg-foam/30"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => go(active + 1)}
                  aria-label="Next clip"
                  className="grid h-11 w-11 place-items-center rounded-full border border-foam/25 text-foam active:bg-hydro active:text-abyss"
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* next */}
            <button
              onClick={() => go(active + 1)}
              aria-label={`Play: ${next.label}`}
              className="group relative hidden w-44 shrink-0 rotate-3 overflow-hidden rounded-3xl border border-foam/15 opacity-60 transition-all duration-500 hover:-translate-y-2 hover:opacity-90 md:block lg:w-56"
              style={{ aspectRatio: "9/16" }}
            >
              <Image src={next.poster} alt="" fill className="object-cover" sizes="224px" />
              <div className="absolute inset-0 bg-abyss/40 transition-colors group-hover:bg-abyss/15" />
              <span className="label absolute bottom-3 left-3 right-3 text-left text-[0.55rem] text-foam/90">{next.label}</span>
            </button>
          </div>
        </Reveal>

        {/* desktop dots */}
        <div className="mt-8 hidden justify-center gap-2.5 md:flex">
          {FIELD_CLIPS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => go(i)}
              aria-label={`Play: ${c.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-hydro" : "w-2 bg-foam/25 hover:bg-foam/50"}`}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-mist-dim">
            Real jobs, real footage — new transformations drop weekly
          </p>
        </Reveal>
      </div>
    </section>
  );
}
