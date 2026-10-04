import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Trophy, Film, Newspaper, Medal, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { HYROX_ACHIEVEMENT, OTHER_ACHIEVEMENTS, MEDIA_CLIPPINGS } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Media, Press Coverage & Achievements | Imran Skills",
  description: "Official press coverage, newspaper headlines in Hindi, HYROX Delhi Champion details, and Bollywood stunt appearances by Mohammad Imran.",
};

export default function MediaPage() {
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
              PRESS & ATHLETIC HONORS
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold uppercase tracking-wider">
              <span>MEDIA & ACCOLADES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] uppercase leading-tight">
              From Wheelchair Skills <br />
              <span className="text-[#E64A19]">To The World Stage.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-3xl">
              Authentic press coverage, newspaper clippings, feature film credits, and athletic championship honors achieved by Mohammad Imran.
            </p>
          </div>

          {/* HYROX Delhi Champion Detail */}
          <div className="rounded-3xl bg-[#121316] text-white p-6 sm:p-10 border border-zinc-800 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase border border-amber-500/30">
              <Trophy className="w-4 h-4" />
              <span>1st Place Champion</span>
            </div>

            <h2 className="text-3xl font-black uppercase tracking-tight">
              {HYROX_ACHIEVEMENT.event} — Adaptive Men Seated
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-zinc-400 font-mono">FINISH TIME</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">
                  {HYROX_ACHIEVEMENT.finishTime}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-zinc-400 font-mono">ATHLETE BIB</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">
                  {HYROX_ACHIEVEMENT.bib}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-zinc-400 font-mono">CATEGORY</div>
                <div className="text-sm font-bold text-amber-400 mt-1">
                  Seated Without Hip Function
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {HYROX_ACHIEVEMENT.summary}
            </p>
          </div>

          {/* Newspaper Clippings & Headlines */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E64A19] uppercase tracking-wider">
              <Newspaper className="w-4 h-4" />
              <span>VERIFIED PRINT NEWSPAPER HEADLINES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MEDIA_CLIPPINGS.map((clip) => (
                <div
                  key={clip.id}
                  className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-4 shadow-sm"
                >
                  <div className="text-xs font-mono text-[#717682] uppercase">
                    {clip.source}
                  </div>

                  <blockquote className="text-2xl font-black text-[#121316] tracking-tight leading-snug">
                    &ldquo;{clip.hindiHeadline}&rdquo;
                  </blockquote>

                  <p className="text-sm text-[#52525B] italic leading-relaxed">
                    English: &ldquo;{clip.englishTranslation}&rdquo;
                  </p>

                  <p className="text-xs text-[#717682] pt-2 border-t border-[#E4E1DA]">
                    {clip.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Honors: Swimming Gold & Bollywood Film Stunts */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#121316] uppercase tracking-tight">
              Other Athletic & Creative Honors
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OTHER_ACHIEVEMENTS.filter((a) => a.id !== 'hyrox-delhi').map((feat) => (
                <div
                  key={feat.id}
                  className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-3"
                >
                  <div className="text-xs font-mono font-bold text-[#E64A19] uppercase">
                    {feat.category}
                  </div>
                  <h4 className="text-lg font-bold text-[#121316]">
                    {feat.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#52525B]">
                    {feat.subtitle}
                  </p>
                  <p className="text-xs text-[#717682] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
