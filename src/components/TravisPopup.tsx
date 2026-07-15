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
  const [washed, setWashed] = useState(false);
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
            initial={{ y: 56, scale: 0.94, rotate: -1 }}
            animate={{ y: 0, scale: 1, rotate: 0 }}
            exit={{ y: 56, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="relative max-h-[92svh] w-full max-w-[26rem] overflow-hidden overflow-y-auto rounded-[1.75rem] bg-white shadow-[0_48px_120px_-24px_rgba(4,18,31,0.85)]"
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

              <div className="absolute bottom-8 left-5 flex items-center gap-2.5">
                <Image src="/images/logo-white.png" alt="" width={44} height={44} className="h-10 w-10 drop-shadow-lg" />
                <div>
                  <p className="display text-xl leading-none text-foam drop-shadow-md">Travis Moss</p>
                  <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-spray">Owner · TM Home Detailz</p>
                </div>
              </div>
            </div>

            {/* the jet riding the cut */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-4%] top-0 h-56 w-[108%] sm:h-60"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <span
                className="absolute left-[-2%] right-[-2%] h-[3px] origin-left"
                style={{
                  top: "88%",
                  transform: "rotate(-4.6deg)",
                  background: "linear-gradient(90deg, rgba(2,171,223,0.2), rgba(127,214,242,0.95), rgba(2,171,223,0.2))",
                  boxShadow: "0 0 18px 4px rgba(2,171,223,0.5)",
                }}
              />
            </div>

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
                Want me to take a look <span className="text-hydro">myself?</span>
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">
                I quote every job personally. Send your address — I&apos;ll text back a
                straight price, usually the same day.
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

            {/* grime layer that gets washed off on arrival */}
            {!washed && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                initial={{ clipPath: "inset(0 0% 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 100%)" }}
                transition={{ duration: 1.15, delay: 0.45, ease: [0.65, 0, 0.35, 1] }}
                onAnimationComplete={() => setWashed(true)}
                style={{
                  background:
                    "linear-gradient(150deg,#57503c 0%,#6b6350 26%,#4a4232 52%,#5e5744 76%,#4d4534 100%)",
                }}
              >
                <span className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_25%_30%,rgba(0,0,0,0.35)_0,transparent_35%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.3)_0,transparent_30%),radial-gradient(circle_at_45%_85%,rgba(0,0,0,0.35)_0,transparent_25%)]" />
              </motion.div>
            )}
            {!washed && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-8%] top-[-8%] w-1 rounded-full"
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.15, delay: 0.45, ease: [0.65, 0, 0.35, 1], opacity: { times: [0, 0.1, 0.9, 1], duration: 1.2, delay: 0.45 } }}
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(2,171,223,0.85))",
                  boxShadow: "0 0 20px 5px rgba(2,171,223,0.6)",
                }}
              />
            )}

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
