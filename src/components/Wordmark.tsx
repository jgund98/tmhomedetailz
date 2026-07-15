/* The TM monogram rebuilt as an inline SVG so it scales crisply and can animate.
   T + M share a stroke that becomes the pressure wand, ending in a cyan splash. */
export default function Wordmark({ size = 44, splash = true }: { size?: number; splash?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* T */}
      <path d="M8 18h44v10H35v44H25V28H8z" fill="currentColor" opacity="0.92" />
      {/* M */}
      <path
        d="M44 72V28h10l12 22 12-22h10v44H78V45L66 66 54 45v27z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* wand stroke */}
      <path
        d="M52 24 78 76"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* nozzle */}
      <rect x="74.5" y="72.5" width="9" height="9" rx="1.5" fill="#c2a265" transform="rotate(26 79 77)" />
      {splash && (
        <path
          d="M82 80c4 4 9 6 15 5-3 3-8 4-12 3 2 2 6 3 9 3-6 2-12 0-16-5-2-2-2-5 0-7 1.5-1 3-0.5 4 1z"
          fill="#02abdf"
        />
      )}
    </svg>
  );
}
