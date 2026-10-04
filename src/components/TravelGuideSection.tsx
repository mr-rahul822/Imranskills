'use client';

import React, { useState } from 'react';
import { Train, Plane, Building2, MapPin, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { TRAVEL_GUIDE_CARDS, TravelCard } from '@/data/siteData';

interface TravelGuideProps {
  isHindi?: boolean;
}

const categoryIcons = {
  RAILWAY: Train,
  METRO: MapPin,
  AIR: Plane,
  HOTELS: Building2,
  STREETS: MapPin,
};

export default function TravelGuideSection({ isHindi = false }: TravelGuideProps) {
  const [selectedCardId, setSelectedCardId] = useState<string>(TRAVEL_GUIDE_CARDS[0].id);

  const activeCard = TRAVEL_GUIDE_CARDS.find((c) => c.id === selectedCardId) || TRAVEL_GUIDE_CARDS[0];
  const Icon = categoryIcons[activeCard.category] || MapPin;

  return (
    <section id="travel" className="py-20 sm:py-28 bg-[#F8F7F4] border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE6DF] text-[#121316] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'सुगम यात्रा गाइड' : 'PRACTICAL MOBILITY GUIDE'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                भारतीय परिस्थितियों में <br />
                <span className="text-[#E64A19]">आत्मविश्वास से यात्रा करें।</span>
              </>
            ) : (
              <>
                Travel With More Confidence. <br />
                <span className="text-[#E64A19]">Real Indian Transit Intelligence.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            Accessible travel in India requires more than just hoping for a ramp. It demands practical knowledge of train coach clearances, metro gaps, airline aisle chair rights, and proactive hotel verification.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {TRAVEL_GUIDE_CARDS.map((card) => {
            const CardIcon = categoryIcons[card.category] || MapPin;
            const isActive = card.id === selectedCardId;
            return (
              <button
                key={card.id}
                onClick={() => setSelectedCardId(card.id)}
                className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all focus:ring-2 focus:ring-[#E64A19] ${
                  isActive
                    ? 'bg-[#121316] text-white border-[#121316] shadow-md'
                    : 'bg-white text-[#121316] border-[#E4E1DA] hover:border-zinc-400'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-[#E64A19] text-white' : 'bg-[#F8F7F4] text-[#121316]'
                  }`}
                >
                  <CardIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase font-bold text-[#E64A19]">
                    {card.category}
                  </div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                    {card.title.split(' ')[0]} {card.title.split(' ')[1]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Guide Card */}
        <div className="rounded-3xl bg-white border-2 border-[#121316] p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4E1DA]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E64A19] text-white flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#E64A19] uppercase tracking-wider">
                  {activeCard.category} TRANSIT
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight uppercase">
                  {activeCard.title}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F7F4] border border-[#E4E1DA] text-xs font-mono text-[#52525B]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{activeCard.verifiedNote}</span>
            </div>
          </div>

          <p className="text-base text-[#4A4E57] py-6 leading-relaxed">
            {activeCard.summary}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
            
            {/* Critical Realities / Key Insights */}
            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-4">
              <h4 className="text-sm font-mono font-bold text-[#121316] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E64A19]" />
                <span>GROUND REALITIES & PROTOCOLS</span>
              </h4>
              <ul className="space-y-3">
                {activeCard.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Field Tips */}
            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-4">
              <h4 className="text-sm font-mono font-bold text-[#121316] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span>IMRAN&apos;S PRACTICAL TIPS</span>
              </h4>
              <ul className="space-y-3">
                {activeCard.practicalTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#121316] shrink-0 mt-2" />
                    <span className="font-medium text-[#121316]">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#E4E1DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#717682]">
              Need personalized advice for an upcoming journey?
            </span>
            <a
              href="#booking"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E64A19] hover:underline"
            >
              <span>Book Independent Travel Training with Imran</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
