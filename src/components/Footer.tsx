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
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <Image src="/images/logo-white.png" alt="TM Home Detailz logo" width={96} height={96} className="h-20 w-20 object-contain" />
                <div>
                  <p className="display text-2xl text-foam">TM Home Detailz</p>
                  <p className="label mt-1 text-hydro">The Detailz make the difference</p>
                </div>
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
              <div className="mt-6 flex gap-5">
                {[
                  { href: SITE.facebook, label: "Facebook" },
                  { href: SITE.instagram, label: "Instagram" },
                  { href: SITE.tiktok, label: "TikTok" },
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
                {`${CITIES.slice(0, 10).join(" · ")} & beyond`}
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-hydro/10 pt-6 text-[0.6875rem] text-mist-dim md:flex-row">
            <p>© {new Date().getFullYear()} TM Home Detailz. Family owned &amp; operated in Central Florida.</p>
            <p className="label text-[0.5625rem]">Commercial · Residential · Fleet · Heavy Equipment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
