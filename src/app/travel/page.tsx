import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Train, Plane, Building2, MapPin, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { TRAVEL_GUIDE_CARDS } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Accessible Wheelchair Travel in India | Practical Transit Guide",
  description: "Real-world wheelchair travel guide for India by Mohammad Imran: Indian Railways train boarding, Metro navigation, airport aisle chair protocols, and street transit tips.",
  keywords: [
    "accessible travel India",
    "wheelchair train travel India",
    "wheelchair airport aisle chair",
    "accessible metro India",
    "wheelchair travel guide",
    "Mohammad Imran travel coach"
  ],
  alternates: {
    canonical: "https://imranskills.com/travel",
  },
  openGraph: {
    title: "Accessible Wheelchair Travel in India | Practical Guide",
    description: "Battle-tested wheelchair travel guidelines for Indian Railways, flights, metros, and street navigation.",
    url: "https://imranskills.com/travel",
    siteName: "Imran Skills",
    images: [
      {
        url: "https://imranskills.com/images/imran/imran-travel-railway.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Imran wheelchair travel in Indian Railways",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
};

const categoryIcons = {
  RAILWAY: Train,
  METRO: MapPin,
  AIR: Plane,
  HOTELS: Building2,
  STREETS: MapPin,
};

export default function TravelPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F4] text-[#121316]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-between border-b border-[#E4E1DA] pb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#52525B] hover:text-[#121316] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E64A19]">
              ACCESSIBILITY TRANSIT INTELLIGENCE
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold uppercase tracking-wider">
              <span>FIELD-TESTED PRACTICES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] uppercase leading-tight">
              Accessible Travel In India. <br />
              <span className="text-[#E64A19]">Travel With More Confidence.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-3xl">
              Real Indian public transit and urban infrastructure present distinct challenges. Here is Imran&apos;s verified guide to navigating trains, metros, airports, and accommodations with dignity and autonomy.
            </p>
          </div>

          {/* Detailed Transit Cards */}
          <div className="space-y-12">
            {TRAVEL_GUIDE_CARDS.map((card) => {
              const Icon = categoryIcons[card.category] || MapPin;
              return (
                <article
                  key={card.id}
                  className="rounded-3xl bg-white border-2 border-[#121316] p-6 sm:p-10 shadow-md space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E4E1DA]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#E64A19] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#E64A19] uppercase">
                          {card.category} TRANSIT
                        </span>
                        <h2 className="text-2xl font-black text-[#121316] uppercase">
                          {card.title}
                        </h2>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#52525B] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{card.verifiedNote}</span>
                    </div>
                  </div>

                  <p className="text-base text-[#4A4E57] leading-relaxed">
                    {card.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
                        KEY PROTOCOLS & REALITIES
                      </h3>
                      <ul className="space-y-2.5">
                        {card.keyInsights.map((insight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
                        PRACTICAL FIELD TIPS
                      </h3>
                      <ul className="space-y-2.5">
                        {card.practicalTips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#121316] shrink-0 mt-2" />
                            <span className="font-medium text-[#121316]">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Travel Consultation CTA */}
          <div className="p-8 rounded-3xl bg-white border border-[#E4E1DA] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#121316]">
                Planning a solo trip or family vacation?
              </h3>
              <p className="text-sm text-[#52525B]">
                Book a 1:1 travel mobility session with Imran to plan your route, transfers, and equipment prep.
              </p>
            </div>

            <Link
              href="/#booking"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E64A19] hover:bg-[#D84315] text-white font-bold text-xs uppercase tracking-wider shadow"
            >
              <span>Book Travel Training</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
