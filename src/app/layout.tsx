import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA, HYROX_ACHIEVEMENT, FAQ_LIST } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohammad Imran | Imran Skills - Wheelchair Lifestyle Instructor & Adaptive Athlete",
  description: "Official website of Mohammad Imran (Imran Skills). HYROX Delhi Adaptive Champion (01:40:42), Wheelchair Skills Coach, and Community Mentor. Learn to move, travel, and live independently across India.",
  keywords: [
    "wheelchair skills training India",
    "wheelchair training India",
    "Mohammad Imran",
    "Imran Skills",
    "wheelchair lifestyle instructor",
    "wheelchair coach India",
    "adaptive athlete India",
    "HYROX Delhi adaptive champion",
    "wheelchair curb climbing",
    "wheelchair transfer skills",
    "accessible travel India",
    "adaptive fitness India",
    "independent living wheelchair India",
    "wheelchair community India"
  ],
  authors: [{ name: "Mohammad Imran", url: "https://imranskills.com" }],
  creator: "Mohammad Imran",
  publisher: "Imran Skills",
  metadataBase: new URL("https://imranskills.com"),
  openGraph: {
    title: "Mohammad Imran | Imran Skills - Independently Jeena Seekhiye",
    description: "Practical wheelchair skills, adaptive fitness, and independent-living training coached by HYROX Delhi Adaptive Champion Mohammad Imran.",
    url: "https://imranskills.com",
    siteName: "Imran Skills",
    images: [
      {
        url: "/images/imran/imran-hyrox-champion.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Imran - HYROX Delhi Adaptive Champion and Wheelchair Skills Coach",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Imran | Imran Skills",
    description: "Learn To Move. Learn To Travel. Live Independently. Practical wheelchair skills coaching in India.",
    images: ["/images/imran/imran-hyrox-champion.jpg"],
  },
  alternates: {
    canonical: "https://imranskills.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": ["Person", "SportsPerson"],
    name: SITE_METADATA.name,
    alternateName: ["Imran Skills", "Mohammad Imran"],
    jobTitle: "Wheelchair Lifestyle Instructor & Adaptive Athlete",
    description: SITE_METADATA.coreMission,
    url: "https://imranskills.com",
    image: "https://imranskills.com/images/imran/imran-hyrox-champion.jpg",
    sameAs: [
      SITE_METADATA.instagramUrl,
      SITE_METADATA.youtubeUrl
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sultanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    award: [
      "HYROX Delhi Adaptive Men Champion (01:40:42)",
      "Gold Medalist in Swimming (Punjab)"
    ]
  };

  const jsonLdEvent = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "HYROX Delhi - Adaptive Men (Seated Without Hip Function)",
    competitor: {
      "@type": "Person",
      name: SITE_METADATA.name,
    },
    result: "1st Place Champion (01:40:42)",
    startDate: "2024",
    location: {
      "@type": "Place",
      name: "New Delhi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN"
      }
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_LIST.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased selection:bg-[#E64A19] selection:text-white`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#121316]">
        {/* Skip to Content for Keyboard and Screen Reader Accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
