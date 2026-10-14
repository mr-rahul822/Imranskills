import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA, HYROX_ACHIEVEMENT, FAQ_LIST, TRAINING_PROGRAMS } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Wheelchair Trainer & Skills Coach India | Mohammad Imran",
    template: "%s | Mohammad Imran - Wheelchair Trainer"
  },
  description: "India's premier wheelchair trainer & skills coach Mohammad Imran (HYROX Delhi Champion). Practical 1-on-1 wheelchair mobility training, curb climbing, transfers & adaptive fitness across India.",
  keywords: [
    "wheelchair trainer",
    "wheelchair trainer India",
    "wheelchair instructor",
    "wheelchair coach",
    "wheelchair coach India",
    "wheelchair skills coach",
    "wheelchair mobility trainer",
    "wheelchair skills training India",
    "wheelchair trainer Lucknow",
    "wheelchair trainer Mumbai",
    "wheelchair trainer Delhi",
    "wheelchair lifestyle instructor",
    "Mohammad Imran",
    "Imran Skills",
    "adaptive fitness coach",
    "adaptive athlete India",
    "HYROX Delhi adaptive champion",
    "wheelchair curb climbing",
    "wheelchair transfer skills",
    "independent wheelchair living",
    "spinal cord injury wheelchair training"
  ],
  authors: [{ name: "Mohammad Imran", url: "https://imranskills.com" }],
  creator: "Mohammad Imran",
  publisher: "Imran Skills",
  metadataBase: new URL("https://imranskills.com"),
  openGraph: {
    title: "Wheelchair Trainer & Skills Coach India | Mohammad Imran",
    description: "Learn practical wheelchair skills, curb climbing, independent transfers, and adaptive fitness coached by HYROX Delhi Champion Mohammad Imran.",
    url: "https://imranskills.com",
    siteName: "Imran Skills",
    images: [
      {
        url: "/images/imran/imran-hyrox-champion.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Imran - Premier Wheelchair Trainer and Skills Coach in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Trainer & Skills Coach India | Mohammad Imran",
    description: "Learn To Move. Learn To Travel. Live Independently. Practical 1-on-1 wheelchair skills coaching across India.",
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
    alternateName: ["Imran Skills", "Mohammad Imran", "Wheelchair Power Man of India"],
    jobTitle: "Wheelchair Trainer, Skills Coach & Adaptive Athlete",
    description: SITE_METADATA.coreMission,
    url: "https://imranskills.com",
    image: "https://imranskills.com/images/imran/imran-hyrox-champion.jpg",
    sameAs: [
      SITE_METADATA.instagramUrl,
      SITE_METADATA.youtubeUrl
    ],
    knowsAbout: [
      "Wheelchair Skills Training",
      "Curb Climbing & Street Obstacle Navigation",
      "Independent Wheelchair Transfers",
      "Two-Wheel Balance & Wheelie Mechanics",
      "Adaptive Fitness & Shoulder Longevity",
      "Spinal Cord Injury Mobility",
      "Accessible Travel & Transit"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
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

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "SportsActivityLocation"],
    name: "Mohammad Imran | Wheelchair Trainer & Skills Coach",
    image: "https://imranskills.com/images/imran/imran-hyrox-champion.jpg",
    url: "https://imranskills.com",
    telephone: "+917800222101",
    priceRange: "₹₹",
    description: "India's premier wheelchair trainer & skills coach. Professional 1-on-1 wheelchair mobility training, curb climbing, independent transfers, and adaptive fitness coached by HYROX Delhi Champion Mohammad Imran.",
    serviceType: [
      "Wheelchair Trainer",
      "Wheelchair Skills Coaching",
      "Adaptive Fitness Instruction",
      "Independent Living Wheelchair Transfers"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.8467",
      longitude: "80.9462"
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Lucknow" },
      { "@type": "State", name: "Uttar Pradesh" }
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wheelchair Skills & Coaching Programs",
      itemListElement: TRAINING_PROGRAMS.map((prog, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: prog.title,
          description: prog.tagline,
        },
        position: index + 1
      }))
    }
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Safely Ascend a Street Curb in a Manual Wheelchair",
    description: "Step-by-step biomechanical guide by Wheelchair Instructor Mohammad Imran on how to mount 2 to 6 inch street curbs without tipping or assistance.",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0"
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Approach and Momentum",
        text: "Approach the curb perpendicularly at moderate speed to ensure front casters meet the edge squarely."
      },
      {
        "@type": "HowToStep",
        name: "Caster Elevation",
        text: "Execute a controlled rearward push and snap forward on the hand-rims to pop the front casters 3-4 inches above curb height."
      },
      {
        "@type": "HowToStep",
        name: "Caster Placement",
        text: "Land the front casters gently onto the upper sidewalk surface while maintaining forward momentum."
      },
      {
        "@type": "HowToStep",
        name: "Drive Wheel Roll-Up",
        text: "Lean upper body forward over the front casters to shift weight, then deliver a powerful drive stroke to roll the rear wheels cleanly onto the curb."
      }
    ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
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
