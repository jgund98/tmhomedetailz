import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a custom pressure washing quote from TM Home Detailz — commercial, fleet, heavy equipment, and residential across Lake County, Florida.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk"
        accent="Detailz."
        body="One-time deep clean or a standing maintenance program — tell us about the property and we'll come back with a straight answer and a custom quote."
      />

      <section className="bg-abyss pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Reveal>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="label mb-3 text-mist-dim">Call or text</p>
                    <a href={SITE.phoneHref} className="display text-4xl text-foam transition-colors hover:text-hydro md:text-5xl">
                      {SITE.phone}
                    </a>
                  </div>
                  <div>
                    <p className="label mb-3 text-mist-dim">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-lg font-medium text-spray underline-offset-4 hover:underline">
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <p className="label mb-3 text-mist-dim">Service area</p>
                    <p className="max-w-xs text-base leading-relaxed text-mist">
                      Lake County, FL and surrounding Central Florida — commercial crews
                      travel further for the right project.
                    </p>
                  </div>
                  <div>
                    <p className="label mb-3 text-mist-dim">Follow the transformations</p>
                    <div className="flex gap-5">
                      {[
                        { href: SITE.facebook, label: "Facebook" },
                        { href: SITE.instagram, label: "Instagram" },
                        { href: SITE.tiktok, label: "TikTok" },
                      ].map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="label text-spray transition-colors hover:text-foam">
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-hydro/15 bg-trench p-6">
                    <p className="label mb-3 text-hydro">Fast quotes, straight answers</p>
                    <p className="text-sm leading-relaxed text-mist">
                      Most quotes go out within one business day. Commercial and fleet
                      work can be scheduled nights and weekends so your operation never
                      slows down.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
