import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Users, MessageCircle, HeartHandshake, Compass, Calendar, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE_METADATA } from '@/data/siteData';

export const metadata: Metadata = {
  title: "The Imran Skills Community | Wheelchair Peer Support & Camps",
  description: "Join the Imran Skills Wheelchair Community. Peer-to-peer mentoring, accessible travel knowledge, outdoor training camps, and WhatsApp group updates.",
};

export default function CommunityPage() {
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
              COMMUNITY NETWORK
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold uppercase tracking-wider">
              <span>PEER SUPPORT & SOLIDARITY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121316] uppercase leading-tight">
              You Are Not Alone. <br />
              <span className="text-[#E64A19]">The Imran Skills Community.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A4E57] max-w-3xl leading-relaxed">
              Disability isolation is broken when wheelchair users unite. Share route hacks, celebrate curb victories, find travel companions, and train together.
            </p>
          </div>

          {/* Community Real Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] bg-zinc-900">
            <Image
              src="/images/imran/imran-hyrox-team.jpg"
              alt="Mohammad Imran and adaptive athletes celebrating at HYROX Delhi"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                CAMARADERIE & SPORTS
              </span>
              <h3 className="text-xl font-bold mt-1">
                Representing Adaptive Athletics Together
              </h3>
            </div>
          </div>

          {/* Community Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBE9E7] text-[#E64A19] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#121316]">
                Peer Mentorship & New Injury Support
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Connect with individuals who have already navigated the early psychological and physical hurdles of wheelchair life. Real answers to intimate questions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBE9E7] text-[#E64A19] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#121316]">
                Verified Travel Intelligence
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Members report real conditions of train stations, accessible hotel rooms, airport aisle chairs, and accessible cabs across major Indian cities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBE9E7] text-[#E64A19] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#121316]">
                Outdoor Meetups & Skill Camps
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Participate in in-person group curb-climbing sessions, park meetups, and adaptive fitness workshops conducted by Imran.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBE9E7] text-[#E64A19] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#121316]">
                Family & Caregiver Integration
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Helping parents and spouses unlearn over-protective tendencies, fostering independence while preventing caregiver musculoskeletal injury.
              </p>
            </div>
          </div>

          {/* Join WhatsApp Network Callout */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#121316] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                ACTIVE WHATSAPP GROUP
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
                Join The Community Today
              </h3>
              <p className="text-sm text-zinc-300 max-w-lg leading-relaxed">
                Click below to send a message on WhatsApp and get added to our peer community group. Completely free, supportive, and active.
              </p>
            </div>

            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
                'Hello Imran, I would like to join the Imran Skills Wheelchair Community.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
