"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";

/* The owner's note arrives the way everything here does: covered in grime,
   then pressure-washed clean. Travis, in person, offering to look himself.
   Shows once per session, never on the contact page. */
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

    const timer = window.setTimeout(show, 14000);
    const onScroll = () => {
      const p = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (p > 0.35) show();
    };
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
          className="fixed inset-0 z-[70] flex items-end justify-center bg-abyss/55 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="A note from the owner"
        >
          <motion.div
            initial={{ y: 48, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Travis, up top like a text from a neighbor */}
            <div className="relative h-44 overflow-hidden bg-trench">
              <Image
                src="/images/travis.jpg"
                alt="Travis Moss, owner of TM Home Detailz"
                fill
                className="object-cover object-[50%_22%]"
                sizes="448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-5 flex items-center gap-2.5">
                <Image src="/images/logo-white.png" alt="" width={40} height={40} className="h-9 w-9" />
                <div>
                  <p className="display text-lg leading-none text-foam">Travis Moss</p>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-spray">Owner · TM Home Detailz</p>
                </div>
              </div>
            </div>

            <div className="relative p-6">
              <p className="display text-2xl leading-tight text-ink">
                Want me to take a look <span className="text-hydro">myself?</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                I quote every job personally. Send your address and a phone number —
                I&apos;ll text you a straight price, usually the same day.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-jet label rounded-full bg-hydro py-3.5 text-center text-abyss"
                >
                  Get my free quote
                </Link>
                <a
                  href={`sms:+13526029854`}
                  className="label rounded-full border border-slate/30 py-3.5 text-center text-brand transition-colors hover:border-hydro"
                >
                  Text Travis · {SITE.phone}
                </a>
              </div>
              <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.18em] text-slate/70">
                Family owned · Lake County FL
              </p>
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
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-abyss/50 text-foam backdrop-blur-sm transition-colors hover:bg-abyss/80"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
