"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, SITE } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-mist/25 bg-abyss/40 px-4 py-3.5 text-foam placeholder:text-mist-dim outline-none transition-colors focus:border-hydro";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState<string[]>([]);

  const toggle = (name: string) =>
    setService((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const email = fd.get("email") as string;
    const property = fd.get("property") as string;
    const message = fd.get("message") as string;
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProperty type: ${property}\nServices: ${service.join(", ") || "Not sure yet"}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Quote request — ${name}`
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-hydro/25 bg-trench p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
              className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-hydro"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m4.5 12.5 5 5 10-11" stroke="#04121f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <p className="display text-3xl">Request launched.</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
              Your email app should be open with everything filled in — hit send and we&apos;ll
              get back to you fast. Prefer to talk?{" "}
              <a href={SITE.phoneHref} className="text-hydro underline underline-offset-4">
                Call {SITE.phone}
              </a>
              .
            </p>
            <button onClick={() => setSent(false)} className="label mt-8 text-mist-dim transition-colors hover:text-hydro">
              ← Back to the form
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={false}
            onSubmit={onSubmit}
            className="rounded-2xl border border-hydro/15 bg-trench/80 p-6 backdrop-blur-sm md:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="label mb-2 block text-mist-dim" htmlFor="qf-name">Name *</label>
                <input id="qf-name" name="name" required placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label className="label mb-2 block text-mist-dim" htmlFor="qf-phone">Phone *</label>
                <input id="qf-phone" name="phone" required type="tel" placeholder="(352) 000-0000" className={inputCls} />
              </div>
              <div>
                <label className="label mb-2 block text-mist-dim" htmlFor="qf-email">Email *</label>
                <input id="qf-email" name="email" required type="email" placeholder="you@company.com" className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className="label mb-2 block text-mist-dim" htmlFor="qf-property">Property type</label>
                <select id="qf-property" name="property" className={inputCls} defaultValue="Commercial property">
                  {["Commercial property", "Fleet / vehicles", "Heavy equipment", "Residential", "Other"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="label mb-3 mt-6 text-mist-dim">What needs washing?</p>
            <div className="flex flex-wrap gap-2.5">
              {SERVICES.map((s) => {
                const on = service.includes(s.name);
                return (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => toggle(s.name)}
                    aria-pressed={on}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      on
                        ? "border-hydro bg-hydro text-abyss"
                        : "border-mist/25 text-mist hover:border-hydro/60"
                    }`}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <label className="label mb-2 block text-mist-dim" htmlFor="qf-msg">Tell us about the job</label>
              <textarea
                id="qf-msg"
                name="message"
                rows={4}
                placeholder="Square footage, surfaces, problem areas, timelines — whatever you know."
                className={inputCls}
              />
            </div>

            <button
              type="submit"
              className="btn-jet label mt-7 w-full rounded-full bg-hydro py-4 text-abyss transition-transform active:scale-[0.99]"
            >
              Send my quote request
            </button>
            <p className="mt-4 text-center text-xs text-mist-dim">
              Or skip the form: <a href={SITE.phoneHref} className="text-spray">call {SITE.phone}</a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
