import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BookingSection from '@/components/BookingSection';

export const metadata: Metadata = {
  title: "Book Wheelchair Training & Consultations | Mohammad Imran",
  description: "Book 1:1 wheelchair skills coaching, virtual consultations, or institutional disability mobility workshops with Mohammad Imran.",
  keywords: [
    "hire wheelchair trainer",
    "book wheelchair instructor",
    "wheelchair coach India",
    "personal wheelchair trainer",
    "wheelchair trainer near me",
    "wheelchair mobility coach",
    "wheelchair skills consultation",
    "Mohammad Imran booking"
  ],
  alternates: {
    canonical: "https://imranskills.com/booking",
  },
  openGraph: {
    title: "Book Wheelchair Training & Consultations | Mohammad Imran",
    description: "Personal 1:1 coaching, online video sessions, and corporate/NGO workshops across India.",
    url: "https://imranskills.com/booking",
    siteName: "Imran Skills",
    images: [
      {
        url: "https://imranskills.com/images/imran/imran-hyrox-champion.jpg",
        width: 1200,
        height: 630,
        alt: "Book training with Mohammad Imran",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F4] text-[#121316]">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E4E1DA] pb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#52525B] hover:text-[#121316] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E64A19]">
              DIRECT APPOINTMENTS
            </span>
          </div>

          <BookingSection />
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
