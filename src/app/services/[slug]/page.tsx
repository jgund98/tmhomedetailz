import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import JetButton from "@/components/JetButton";
import { SERVICES } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.name, description: s.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero kicker={`Services / ${s.name}`} title={s.name} body={s.headline} image={s.image} imageAlt={s.imageAlt} />

      <section className="bg-abyss pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-mist">{s.intro}</p>
              </Reveal>

              <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
                {s.bullets.map((b, i) => (
                  <Reveal key={b.title} delay={i * 0.06}>
                    <div className="relative border-l-2 border-hydro/30 pl-6">
                      <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-hydro" />
                      <h3 className="display text-xl text-foam">{b.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-mist">{b.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-16 rounded-2xl border border-hydro/15 bg-trench p-8 md:p-10">
                  <p className="label mb-5 text-hydro">Perfect for</p>
                  <div className="flex flex-wrap gap-2.5">
                    {s.ideal.map((x) => (
                      <span key={x} className="rounded-full border border-mist/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-mist">
                        {x}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <JetButton href="/contact">Get a custom quote</JetButton>
                    <p className="text-sm text-mist-dim">Walked, measured &amp; priced straight — no pressure. Well, some.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* sticky visual rail */}
            <div className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-6">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hydro/15">
                    <Image src={s.image} alt={s.imageAlt} fill className="object-cover" sizes="40vw" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss/80 to-transparent p-6">
                      <p className="label text-spray">{s.name} · TM Home Detailz</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="rounded-2xl border border-hydro/15 bg-trench p-6">
                    <p className="label mb-4 text-mist-dim">More services</p>
                    {others.map((o) => (
                      <Link
                        key={o.slug}
                        href={`/services/${o.slug}`}
                        className="drip-link display block border-b border-hydro/10 py-3 text-lg text-foam last:border-0 hover:text-hydro"
                      >
                        {o.name}
                      </Link>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
