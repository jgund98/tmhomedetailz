import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import { SITE } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "700", "800", "900"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "TM Home Detailz — Commercial Pressure Washing, Lake County FL",
    template: "%s — TM Home Detailz",
  },
  description:
    "Commercial-grade pressure washing for Central Florida: building washes, fleet washing, heavy equipment cleaning, roof washing, and hot water sanitation. Family owned. The Detailz make the difference.",
  metadataBase: new URL("https://www.tmhomedetailz.com"),
  openGraph: {
    title: "TM Home Detailz — The Detailz Make the Difference",
    description:
      "Commercial pressure washing, fleet washing, and exterior detailing across Lake County, Florida and beyond.",
    images: ["/images/fleet.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileDock />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.name,
              telephone: SITE.phone,
              email: SITE.email,
              areaServed: "Lake County, Florida",
              url: "https://www.tmhomedetailz.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
