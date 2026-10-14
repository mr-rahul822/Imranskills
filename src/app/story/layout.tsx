import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Story: Mohammad Imran | Wheelchair Trainer & Adaptive Athlete",
  description: "Read the true inspiring story of Mohammad Imran: from loss of eyesight and neurological adversity to HYROX Delhi Champion and India's premier wheelchair trainer & skills coach.",
  keywords: [
    "Mohammad Imran story",
    "wheelchair trainer story",
    "wheelchair coach India",
    "wheelchair instructor biography",
    "HYROX Delhi adaptive champion story",
    "wheelchair skills coach journey",
    "disability resilience India",
    "paraplegia independence story",
    "Mohammad Imran Qureshi"
  ],
  alternates: {
    canonical: "https://imranskills.com/story",
  },
  openGraph: {
    title: "Mohammad Imran Story — Wheelchair Trainer & Adaptive Champion",
    description: "From spinal condition in Mumbai to HYROX Delhi champion & wheelchair trainer. The story of Mohammad Imran.",
    url: "https://imranskills.com/story",
    siteName: "Imran Skills",
    images: [
      {
        url: "https://imranskills.com/images/imran/imran-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Imran - Wheelchair Lifestyle Instructor",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Imran Story — Wheelchair Lifestyle Instructor",
    description: "The inspiring journey of Mohammad Imran: turning adversity into wheelchair mastery across India.",
    images: ["https://imranskills.com/images/imran/imran-portrait.jpg"],
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
