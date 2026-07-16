"use client";

import { useState } from "react";
import Hero from "@/components/Hero";

/* Temporary side-by-side compare of the three hero video options.
   Not linked anywhere — reachable only at /preview-hero. */
const OPTIONS = [
  {
    key: "hero-wash",
    name: "Low-angle jet + mist wall",
    media: { video: "/videos/hero-wash.mp4", poster: "/images/hero-wash-poster.jpg", posDesktop: "45% 55%", posMobile: "62% center" },
  },
  {
    key: "alt-1",
    name: "Wand jet on concrete (4K) — current live",
    media: { video: "/videos/hero-alt-1.mp4", poster: "/images/hero-alt-1-poster.jpg", posDesktop: "62% 60%", posMobile: "68% center" },
  },
  {
    key: "alt-2",
    name: "Bench + rolling mist",
    media: { video: "/videos/hero-alt-2.mp4", poster: "/images/hero-alt-2-poster.jpg", posDesktop: "50% 55%", posMobile: "60% center" },
  },
];

export default function HeroPreview() {
  const [i, setI] = useState(1);
  const opt = OPTIONS[i];

  return (
    <>
      {/* floating switcher */}
      <div className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/80 p-1.5 backdrop-blur-md">
        {OPTIONS.map((o, idx) => (
          <button
            key={o.key}
            onClick={() => setI(idx)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              i === idx ? "bg-hydro text-abyss" : "text-white/80 hover:text-white"
            }`}
          >
            {o.key}
          </button>
        ))}
        <span className="hidden px-3 text-[0.7rem] text-white/60 sm:inline">{opt.name}</span>
      </div>

      {/* remount Hero on switch so the video + intro replays */}
      <Hero key={opt.key} media={opt.media} />
    </>
  );
}
