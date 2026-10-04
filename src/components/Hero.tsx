'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Trophy, Play, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { SITE_METADATA, HYROX_ACHIEVEMENT } from '@/data/siteData';

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenVideo?: () => void;
  isHindi?: boolean;
}

export default function Hero({ onOpenBooking, onOpenVideo, isHindi = false }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] pt-8 pb-16 md:pt-12 md:pb-24 border-b border-[#E4E1DA]">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#121316_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Storytelling & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Top Verified Badge */}
            <div className="inline-flex items-center gap-2 self-start flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#121316] text-white">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>HYROX Delhi Adaptive Champion</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EFECE6] text-[#3F3F46] border border-[#E2DDD4]">
                <span className="font-mono font-bold text-[#E64A19]">01:40:42</span> • Bib #85001
              </span>
            </div>

            {/* Central Empowering Headlines */}
            <div className="space-y-3">
              <div className="inline-block">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#E64A19] font-mono">
                  {isHindi ? 'आत्मनिर्भरता • गतिशीलता • कौशल' : 'INDEPENDENCE • MOBILITY • SKILLS'}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121316] leading-[1.08] uppercase">
                {isHindi ? (
                  <>
                    पहियों पर आत्मनिर्भरता। <br />
                    <span className="text-[#E64A19]">Independently</span> जीना सीखिए।
                  </>
                ) : (
                  <>
                    Learn To Move. <br />
                    Learn To Travel. <br />
                    <span className="text-[#E64A19]">Live Independently.</span>
                  </>
                )}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#2E3138] italic pt-1">
                &ldquo;Your wheelchair is not the end of the road — it is your vehicle to the world.&rdquo;
              </p>
            </div>

            {/* Factual, Trust-Building Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4A4E57] max-w-2xl leading-relaxed">
              Practical wheelchair handling, curb navigation, independent transfers, and adaptive fitness coached by someone who has lived every step, won on the athletic stage, and taught wheelchair users across India to claim their independence without sympathy.
            </p>

            {/* Action Buttons & CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking();
                  } else {
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-bold tracking-wide uppercase bg-[#E64A19] hover:bg-[#D84315] text-white rounded-xl shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-[#121316]"
              >
                <span>{isHindi ? 'ट्रेनिंग सेशन बुक करें' : 'Book A Training Session'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold tracking-wide uppercase bg-[#FFFFFF] hover:bg-[#F3F0EA] text-[#121316] rounded-xl border border-[#D5D0C6] shadow-sm transition-all focus:ring-2 focus:ring-[#E64A19]"
              >
                <span>{isHindi ? 'कौशल सीखें' : 'Explore Skills'}</span>
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#52525B] hover:text-[#121316] transition-colors"
              >
                <Play className="w-4 h-4 text-[#E64A19] fill-current" />
                <span>{isHindi ? 'इमरान की कहानी' : 'Watch Story'}</span>
              </a>
            </div>

            {/* Trust Anchors Row */}
            <div className="pt-4 border-t border-[#E4E1DA] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-[#3F3F46]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E64A19] shrink-0" />
                <span>Zero Sympathy, 100% Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E64A19] shrink-0" />
                <span>Real Street Navigation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E64A19] shrink-0" />
                <span>Peer-Led Coaching</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Authentic Photography & Real Accolade Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Real Photograph */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-zinc-900 aspect-[4/5] sm:aspect-[3/4]">
                <Image
                  src="/images/imran/imran-hyrox-champion.jpg"
                  alt="Mohammad Imran Qureshi smiling proudly in his wheelchair with arms open at HYROX Delhi, showing Bib #85001"
                  fill
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                />

                {/* Subtle Image Gradient Overlay at Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Real Caption Box */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                      HYROX DELHI • ADAPTIVE MEN
                    </span>
                    <span className="text-[11px] font-mono font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-white">
                      01:40:42
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    Mohammad Imran Qureshi
                  </h3>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Wheelchair Lifestyle Instructor & Adaptive Athlete
                  </p>
                </div>
              </div>

              {/* Floating Verified Achievement Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 shadow-xl border border-[#E4E1DA] max-w-[270px] sm:max-w-[300px]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#FBE9E7] text-[#E64A19] shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#717682]">
                      Official Verified Result
                    </div>
                    <div className="text-sm font-extrabold text-[#121316] leading-snug">
                      1st Place Champion
                    </div>
                    <div className="text-xs text-[#52525B] mt-0.5">
                      HYROX Adaptive Men (Seated Without Hip Function)
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Mini-Tag */}
              <div className="absolute -top-3 -right-3 bg-[#121316] text-[#F8F7F4] text-xs font-bold py-1.5 px-3 rounded-lg shadow-md border border-[#2B2E37] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for 1:1 Bookings</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
