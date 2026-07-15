import Image from "next/image";

/* The real TM splash from the brand kit — used as the recurring section mark. */
export default function SplashMark({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt=""
      width={200}
      height={100}
      aria-hidden="true"
      className={`${className} select-none`}
      style={{ width: "auto" }}
    />
  );
}
