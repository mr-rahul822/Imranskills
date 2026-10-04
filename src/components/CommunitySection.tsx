'use client';

import React from 'react';
import Image from 'next/image';
import { Users, MessageCircle, Calendar, Share2, Compass, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_METADATA } from '@/data/siteData';

interface CommunitySectionProps {
  isHindi?: boolean;
}

export default function CommunitySection({ isHindi = false }: CommunitySectionProps) {
  const communityBenefits = [
    {
      icon: Users,
      title: "Peer-to-Peer Support",
      description: "Connect with fellow wheelchair users across India who face the exact same physical and architectural realities."
    },
    {
      icon: Compass,
      title: "Accessible Route Knowledge",
      description: "Crowdsourced, real-time intelligence on accessible railway stations, accessible public spaces, ramps, and accessible taxis."
    },
    {
      icon: Calendar,
      title: "Workshops & Skill Camps",
      description: "Priority announcements for group wheelchair mobility camps, adaptive sports clinics, and outdoor training meetups."
    },
    {
      icon: HeartHandshake,
      title: "Caregiver & Family Guidance",
      description: "Empowering family members with ergonomic assistance principles so they support independence rather than over-protecting."
    }
  ];

  return (
    <section id="community" className="py-20 sm:py-28 bg-white border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'कम्युनिटी और साथ' : 'THE MOVEMENT'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                आप अकेले नहीं सीख रहे हैं। <br />
                <span className="text-[#E64A19]">The Imran Skills Community.</span>
              </>
            ) : (
              <>
                You Are Not Learning Alone. <br />
                <span className="text-[#E64A19]">The Imran Skills Community.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            Independence is contagious. When you see another wheelchair user clear a curb or board a train with ease, mental barriers evaporate. Join a nationwide community united by active living.
          </p>
        </div>

        {/* Feature Grid with Real Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Left Column: Community Real Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-zinc-900 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/imran/imran-hyrox-community.jpg"
                alt="Imran Qureshi with fellow wheelchair athlete and coach celebrating unity at HYROX Delhi"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                  SOLIDARITY IN MOTION
                </span>
                <p className="text-sm font-semibold mt-0.5 text-zinc-100">
                  Shared training builds shared courage. No wheelchair user should have to figure out mobility in isolation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communityBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] hover:border-[#121316] transition-all space-y-2"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white text-[#E64A19] border border-[#E4E1DA] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#121316]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Community CTA Card */}
            <div className="p-6 rounded-2xl bg-[#121316] text-[#F8F7F4] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Community Open
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">Free to Join</span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  Join the Imran Skills WhatsApp Network
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                  Direct announcements, practical skill tutorials, and real-time support from Imran and fellow athletes.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
                    'Hello Imran, I would like to join the Imran Skills Wheelchair Community.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join On WhatsApp</span>
                </a>

                <span className="text-xs text-zinc-400 text-center sm:text-left">
                  No spam. Only skill guidance & community updates.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
