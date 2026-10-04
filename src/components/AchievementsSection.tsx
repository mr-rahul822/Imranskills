'use client';

import React from 'react';
import Image from 'next/image';
import { Trophy, Medal, Film, Newspaper, Clock, Hash, CheckCircle, ArrowUpRight } from 'lucide-react';
import { HYROX_ACHIEVEMENT, OTHER_ACHIEVEMENTS, MEDIA_CLIPPINGS } from '@/data/siteData';

interface AchievementsSectionProps {
  isHindi?: boolean;
}

export default function AchievementsSection({ isHindi = false }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#121316] text-[#F8F7F4] scroll-mt-20 relative overflow-hidden">
      
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none select-none font-black text-[280px] font-mono leading-none text-white">
        85001
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E64A19] text-white text-xs font-bold uppercase tracking-widest font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>{isHindi ? 'उपलब्धियां एवं सम्मान' : 'TRACK RECORD & MEDIA'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                पहियों पर हौसला, <br />
                <span className="text-[#FF5722]">विश्व स्तर पर पहचान।</span>
              </>
            ) : (
              <>
                From Wheelchair Skills <br />
                <span className="text-[#FF5722]">To The National Arena.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Achievements earned through sweat, rigorous physical conditioning, and relentless practice — proving what is possible when preparation meets opportunity.
          </p>
        </div>

        {/* Highlight 1: The HYROX Delhi Champion Feature Card */}
        <div className="rounded-3xl bg-[#1A1C22] border-2 border-[#2A2D36] p-6 sm:p-10 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: HYROX Stats & Verification */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                <span>Verified First-Place Finish</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  HYROX DELHI ADAPTIVE CHAMPION
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 font-medium">
                  {HYROX_ACHIEVEMENT.category}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#23262F] border border-[#2E323D]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>FINISH TIME</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {HYROX_ACHIEVEMENT.finishTime}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#23262F] border border-[#2E323D]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-1">
                    <Hash className="w-3.5 h-3.5 text-amber-400" />
                    <span>ATHLETE BIB</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {HYROX_ACHIEVEMENT.bib}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-[#23262F] border border-[#2E323D]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>RANKING</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    1st Place
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {HYROX_ACHIEVEMENT.summary}
              </p>

            </div>

            {/* Right Column: Real HYROX Delhi Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-zinc-700 aspect-[4/5] bg-black">
                <Image
                  src="/images/imran/imran-hyrox-champion.jpg"
                  alt="Mohammad Imran smiling proudly in front of the HYROX wall with Bib 85001"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-zinc-300">
                  HYROX Delhi • Adaptive Men Champion
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Grid of Other Real Feats: Swimming Gold, Bollywood Stunts, Art */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {OTHER_ACHIEVEMENTS.filter((a) => a.id !== 'hyrox-delhi').map((feat) => {
            const getIcon = () => {
              if (feat.id === 'swimming-gold') return Medal;
              if (feat.id === 'film-holiday') return Film;
              return Trophy;
            };
            const Icon = getIcon();

            return (
              <div
                key={feat.id}
                className="p-6 rounded-2xl bg-[#1A1C22] border border-[#2A2D36] hover:border-zinc-500 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FF5722] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-bold">
                    {feat.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#FF5722] mt-0.5">
                    {feat.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Newspaper Clipping Visual Banner */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-[#2A2D36] bg-[#1A1C22] p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-zinc-700 bg-black">
            <Image
              src="/images/imran/newspaper-amar-ujala.jpg"
              alt="Amar Ujala newspaper article: हौसलों से दे दी दिव्यांगता को शिकस्त featuring Mohammad Imran"
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-500 cursor-pointer"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              AMAR UJALA SPECIAL FEATURE
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              &ldquo;हौसलों से दे दी दिव्यांगता को शिकस्त&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Featured on World Disability Day: Chronicling Imran&apos;s journey from Sultanpur, state swimming gold in Punjab, stunts with Akshay Kumar in &apos;Holiday&apos;, and his mentorship as the &ldquo;Wheelchair Power Man of India&rdquo;.
            </p>
          </div>
        </div>

        {/* Media & Newspaper Headlines Editorial Section */}
        <div id="media" className="pt-6 border-t border-[#2A2D36] scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-6">
            <Newspaper className="w-4 h-4" />
            <span>PRINT & REGIONAL MEDIA COVERAGE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEDIA_CLIPPINGS.map((clip) => (
              <div
                key={clip.id}
                className="p-6 rounded-2xl bg-[#1A1C22] border border-[#2A2D36] space-y-3 relative group"
              >
                <div className="text-xs font-mono text-zinc-400 uppercase">
                  {clip.source}
                </div>

                <blockquote className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  &ldquo;{clip.hindiHeadline}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-zinc-300 italic">
                  Translation: &ldquo;{clip.englishTranslation}&rdquo;
                </p>

                <p className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
                  {clip.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
