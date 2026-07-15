import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free pressure washing quote from TM Home Detailz — homes, businesses, fleets, and heavy equipment across Lake County, Florida.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Free Quote"
        title="Let's talk"
        accent="Detailz."
        body="Three quick questions and we'll come back with a straight price — usually the same day. No spam, no pushy calls."
      />

      <section className="bg-foam pb-24 text-ink md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Reveal>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="label mb-3 text-slate">Call or text</p>
                    <a href={SITE.phoneHref} className="display text-4xl text-ink transition-colors hover:text-hydro md:text-5xl">
                      {SITE.phone}
                    </a>
                  </div>
                  <div>
                    <p className="label mb-3 text-slate">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-brand underline-offset-4 hover:underline">
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <p className="label mb-3 text-slate">Service area</p>
                    <p className="max-w-xs text-base leading-relaxed text-slate">
                      Lake County, FL and surrounding Central Florida — crews travel
                      further for the right project.
                    </p>
                  </div>
                  <div>
                    <p className="label mb-3 text-slate">Follow the transformations</p>
                    <div className="flex gap-5">
                      {[
                        { href: SITE.facebook, label: "Facebook" },
                        { href: SITE.instagram, label: "Instagram" },
                        { href: SITE.tiktok, label: "TikTok" },
                      ].map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="label text-brand transition-colors hover:text-hydro">
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-brand/15 bg-white p-6 shadow-[0_16px_40px_-20px_rgba(13,37,55,0.25)]">
                    <p className="label mb-3 text-brand">Fast quotes, straight answers</p>
                    <p className="text-sm leading-relaxed text-slate">
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
