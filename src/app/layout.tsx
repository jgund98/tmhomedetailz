import type { Metadata } from "next";
import { Archivo, Instrument_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";
import TravisPopup from "@/components/TravisPopup";
import { SITE, SERVICES, CITIES } from "@/lib/site";

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

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pressure Washing Lake County FL | TM Home Detailz — Clermont, Leesburg & Central Florida",
    template: "%s | TM Home Detailz",
  },
  description:
    "Top-rated (5.0★) pressure washing in Lake County, FL. Driveways, house soft washing, roofs, commercial exteriors, fleets & heavy equipment — hot water, family owned, serving Clermont, Leesburg, Mount Dora, The Villages & greater Orlando. Free quotes: 352-602-9854.",
  keywords: [
    "pressure washing Lake County FL",
    "pressure washing Clermont FL",
    "pressure washing Leesburg FL",
    "power washing near me",
    "soft washing house",
    "driveway cleaning Central Florida",
    "roof cleaning Lake County",
    "commercial pressure washing Orlando",
    "fleet washing Florida",
    "heavy equipment cleaning",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "TM Home Detailz — Pressure Washing, Lake County FL | The Detailz Make the Difference",
    description:
      "Family-owned pressure washing across Central Florida: homes, driveways, roofs, storefronts, fleets & heavy equipment. 5.0★ on Google. Free quotes.",
    images: [{ url: "/images/house-clean.jpg", width: 1600, height: 1067, alt: "A freshly pressure washed Florida home by TM Home Detailz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TM Home Detailz — Pressure Washing, Lake County FL",
    description: "The Detailz make the difference. 5.0★ family-owned pressure washing across Central Florida.",
    images: ["/images/house-clean.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "Home Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable} ${caveat.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileDock />
        <TravisPopup />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": `${SITE.url}/#business`,
              name: SITE.name,
              legalName: SITE.legalName,
              slogan: SITE.tagline,
              description:
                "Family-owned pressure washing and exterior cleaning company serving Lake County and Central Florida: driveways, house soft washing, roof cleaning, commercial exteriors, hot water sanitation, fleet washing, and heavy equipment cleaning.",
              url: SITE.url,
              telephone: "+1-352-602-9854",
              email: SITE.email,
              foundingDate: SITE.founded,
              founder: { "@type": "Person", name: "Travis Moss" },
              image: [`${SITE.url}/images/house-clean.jpg`, `${SITE.url}/images/fleet.jpg`, `${SITE.url}/images/travis.jpg`],
              logo: `${SITE.url}/icon.png`,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressLocality: "Lake County",
                addressCountry: "US",
              },
              geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
              areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c}, FL` })),
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "07:00",
                closes: "21:00",
              },
              sameAs: [SITE.facebook, SITE.instagram, SITE.tiktok],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pressure Washing Services",
                itemListElement: SERVICES.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    url: `${SITE.url}/services/${s.slug}`,
                    description: s.short,
                  },
                })),
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
