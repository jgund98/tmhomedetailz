import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES, CITIES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="caustics grain relative overflow-hidden bg-abyss">
      {/* waterline top edge */}
      <div className="relative h-16 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="swell absolute bottom-0 h-full w-[106%]">
          <path
            d="M0 40 C 180 10, 360 60, 540 36 C 720 12, 900 58, 1080 34 C 1260 12, 1380 44, 1440 30 L 1440 64 L 0 64 Z"
            fill="#071e30"
          />
        </svg>
      </div>

      <div className="bg-trench">
        {/* extra bottom clearance below lg so the fixed mobile CTA dock never
            covers the copyright / credit row — you can scroll fully to the end */}
        <div className="mx-auto max-w-7xl px-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-16 md:px-8 lg:pb-10">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
            <div>
              <div>
                <Image
                  src="/images/logo-main.png"
                  alt="TM Home Detailz — tmhomedetailz@gmail.com · 352-602-9854"
                  width={1500}
                  height={307}
                  className="h-14 w-auto object-contain md:h-16"
                />
                <p className="label mt-4 text-hydro">The Detailz make the difference</p>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
                Family-owned commercial pressure washing based in {SITE.base} — building washes,
                fleets, heavy equipment, roofs, and the tough stuff in between.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <a href={SITE.phoneHref} className="display text-3xl text-foam transition-colors hover:text-hydro">
                  {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="text-sm text-mist transition-colors hover:text-hydro">
                  {SITE.email}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-5">
                {[
                  { href: SITE.facebook, label: "Facebook" },
                  { href: SITE.instagram, label: "Instagram" },
                  { href: SITE.tiktok, label: "TikTok" },
                  { href: SITE.google, label: "5.0★ on Google" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-mist-dim transition-colors hover:text-hydro"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="label mb-5 text-mist-dim">Services</p>
              <ul className="flex flex-col gap-3">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm font-medium text-mist transition-colors hover:text-foam">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label mb-5 text-mist-dim">Explore</p>
              <ul className="flex flex-col gap-3">
                {[
                  { href: "/work", label: "Our Work" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "All Services" },
                  { href: "/contact", label: "Request a Quote" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-medium text-mist transition-colors hover:text-foam">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="label mb-3 mt-8 text-mist-dim">Proudly serving</p>
              <p className="text-xs leading-relaxed text-mist-dim">
                {`${CITIES.slice(0, 10).join(" · ")} & beyond`}
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hydro/10 pt-6 text-[0.8125rem] text-mist-dim md:flex-row">
            <p>© {new Date().getFullYear()} TM Home Detailz. Family owned &amp; operated in Central Florida.</p>
            <a
              href="https://www.epicdevsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100"
              aria-label="Website by Epic Dev Solutions"
            >
              <span className="text-[0.6875rem] uppercase tracking-[0.18em]">Site by</span>
              <Image
                src="/images/epic-logo.png"
                alt="Epic Dev Solutions"
                width={663}
                height={160}
                className="h-6 w-auto opacity-90 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
