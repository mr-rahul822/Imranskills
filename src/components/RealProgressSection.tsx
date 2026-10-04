'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { REAL_PROGRESS_STORIES } from '@/data/siteData';

interface RealProgressProps {
  onOpenBooking?: () => void;
  isHindi?: boolean;
}

export default function RealProgressSection({ onOpenBooking, isHindi = false }: RealProgressProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F7F4] border-b border-[#E4E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE6DF] text-[#121316] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'वास्तविक बदलाव' : 'REAL OUTCOMES'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                वास्तविक लोग। वास्तविक कौशल। <br />
                <span className="text-[#E64A19]">अधिक आत्मनिर्भरता।</span>
              </>
            ) : (
              <>
                Real People. Real Skills. <br />
                <span className="text-[#E64A19]">More Independence.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            The true metric of success is not social media views or medal counts. It is a trainee crossing a bustling street alone, transferring into a cab without hesitation, and stepping out the front door with absolute confidence.
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REAL_PROGRESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-[#E4E1DA] hover:border-[#121316] p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#EAE6DF] text-[#121316] flex items-center justify-center font-bold text-sm">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#121316]">
                        {story.name}
                      </h4>
                      <p className="text-xs text-[#717682] font-mono">
                        {story.location}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#E64A19]/30 shrink-0" />
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold">
                  Skill: {story.skillLearned}
                </div>

                <blockquote className="text-sm sm:text-base text-[#4A4E57] italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E4E1DA] flex items-center gap-2 text-xs text-[#52525B]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">{story.verifiedDetail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note on Testimonials & Continuous Intake */}
        <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#121316]">
              Every Journey Starts With Day One
            </h4>
            <p className="text-xs sm:text-sm text-[#52525B]">
              Whether you acquired a disability last month or have used a wheelchair for decades, your mobility can expand.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenBooking) {
                onOpenBooking();
              } else {
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121316] hover:bg-[#E64A19] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
          >
            <span>Start Your Training</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
