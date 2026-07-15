"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE, SERVICES } from "@/lib/site";
import JetButton from "@/components/JetButton";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-abyss/85 backdrop-blur-md border-b border-hydro/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="TM Home Detailz home">
          <Image
            src="/images/logo-white.png"
            alt=""
            width={52}
            height={52}
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:rotate-[-4deg] md:h-13 md:w-13"
            priority
          />
          <span className="leading-none">
            <span className="display block text-[1.05rem] tracking-tight text-foam">TM</span>
            <span className="label block text-[0.55rem] text-mist">Home Detailz</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))}
              className="drip-link label py-2 text-foam/85 transition-colors hover:text-foam"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={SITE.phoneHref} className="label text-spray transition-colors hover:text-foam">
            {SITE.phone}
          </a>
          <JetButton href="/contact" small>
            Get a Quote
          </JetButton>
        </div>

        {/* mobile: tap-to-call + menu */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-foam/20 text-spray active:bg-hydro active:text-abyss"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 4h4l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 15v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] flex h-11 w-11 items-center justify-center"
        >
          <span className="relative block h-3.5 w-7">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-foam transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-hydro transition-all duration-300 ${
                open ? "bottom-1/2 w-full translate-y-1/2 -rotate-45" : "w-2/3"
              }`}
            />
          </span>
        </button>
        </div>
      </div>

      {/* mobile menu — rises like a water level */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="caustics fixed inset-0 z-50 flex flex-col bg-trench lg:hidden"
          >
            {/* real mark as a watermark behind the menu */}
            <Image
              src="/images/logo-white.png"
              alt=""
              width={400}
              height={400}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 w-64 opacity-[0.07]"
            />
            <div className="relative flex-1 overflow-y-auto px-6 pb-10 pt-24">
              <p className="label mb-6 text-mist-dim">Menu</p>
              <div className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      className="display block border-b border-hydro/10 py-4 text-4xl text-foam active:text-hydro"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <p className="label mb-4 text-mist-dim">Services</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm font-medium text-mist active:text-hydro">
                      {s.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  <JetButton href="/contact">Get a Quote</JetButton>
                  <a href={SITE.phoneHref} className="label text-center text-spray">
                    Call {SITE.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
