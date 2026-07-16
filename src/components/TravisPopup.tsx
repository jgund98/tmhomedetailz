"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";

/* The owner's note, cut on the brand's wand angle and pressure-washed clean
   on arrival. Shows once per session, never on the contact page. */
export default function TravisPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("tm-travis-seen")) return;

    const show = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      sessionStorage.setItem("tm-travis-seen", "1");
      setOpen(true);
    };

    // A) they scroll past the hero, or B) 10s on the landing view without scrolling
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) show();
    };
    const timer = window.setTimeout(() => {
      if (window.scrollY < 80) show();
    }, 10000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-abyss/60 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="A note from the owner"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="no-scrollbar relative max-h-[92svh] w-full max-w-[26rem] overflow-hidden overflow-y-auto rounded-[1.75rem] bg-white shadow-[0_48px_120px_-24px_rgba(4,18,31,0.85)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Travis, cut on the wand angle */}
            <div className="relative h-56 sm:h-60" style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 0 100%)" }}>
              <Image
                src="/images/travis.jpg"
                alt="Travis Moss, owner of TM Home Detailz"
                fill
                className="object-cover object-[50%_20%]"
                sizes="416px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/75 via-abyss/10 to-abyss/30" />

              {/* google proof, pinned top-left */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-abyss/60 px-3 py-1.5 backdrop-blur-sm">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#fbbc04">
                      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
                    </svg>
                  ))}
                </span>
                <span className="text-[0.6rem] font-bold text-foam">5.0 on Google</span>
              </div>

              <div className="absolute bottom-[4.5rem] left-5 flex items-center gap-2.5">
                <Image src="/images/logo-white.png" alt="" width={44} height={44} className="h-10 w-10 drop-shadow-lg" />
                <div>
                  <p className="display text-xl leading-none text-foam drop-shadow-md">Travis Moss</p>
                  <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-spray">Owner · TM Home Detailz</p>
                </div>
              </div>
            </div>

            {/* the jet riding the cut — clipped to the exact edge geometry */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-56 w-full sm:h-60"
              style={{
                clipPath: "polygon(0 97.4%, 100% 75.4%, 100% 78.2%, 0 100%)",
                background: "linear-gradient(90deg, rgba(2,171,223,0.25), rgba(127,214,242,0.95), rgba(2,171,223,0.25))",
                filter: "drop-shadow(0 0 10px rgba(2,171,223,0.6))",
              }}
            />

            <div className="relative px-6 pb-6 pt-4">
              {/* ghosted splash behind the copy */}
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={280}
                height={140}
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 bottom-2 w-40 rotate-6 opacity-[0.06]"
              />
              <p className="display text-[1.65rem] leading-[1.05] text-ink">
                Let&apos;s get you a <span className="whitespace-nowrap text-hydro">straight price.</span>
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">
                Send your address and what needs washing — Travis or one of the team
                will text your quote back, usually the{" "}
                <span className="whitespace-nowrap">same day.</span>
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-jet label rounded-full bg-hydro py-4 text-center text-abyss"
                >
                  Get my free quote
                </Link>
                <a
                  href={SITE.smsHref}
                  className="group flex items-center justify-center gap-2.5 rounded-full border border-slate/25 py-3 transition-colors hover:border-hydro"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-hydro/12 text-brand transition-colors group-hover:bg-hydro group-hover:text-abyss">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M21 12a8 8 0 0 1-8 8H4l2-3.2A8 8 0 1 1 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="leading-none text-left">
                    <span className="block text-[0.55rem] font-bold uppercase tracking-[0.22em] text-slate">Text Travis</span>
                    <span className="display mt-1 block text-base text-ink">{SITE.phone}</span>
                  </span>
                </a>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full py-2 text-center text-xs font-semibold text-slate/80 underline-offset-4 transition-colors hover:text-slate hover:underline"
              >
                No thanks — just looking around
              </button>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-2.5 top-2.5 z-10 grid h-11 w-11 place-items-center rounded-full bg-abyss/60 text-foam backdrop-blur-sm transition-all hover:scale-105 hover:bg-abyss/85"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
