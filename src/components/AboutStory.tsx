'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Palette, Eye, HeartPulse, Trophy, Award, Film, Users } from 'lucide-react';
import { SITE_METADATA } from '@/data/siteData';

interface AboutStoryProps {
  isHindi?: boolean;
}

export default function AboutStory({ isHindi = false }: AboutStoryProps) {
  const timelineSteps = [
    {
      year: "Childhood",
      title: "Passion for Art & Colors",
      icon: Palette,
      text: "From early years in Uttar Pradesh, Imran held a deep love for painting and visual art — a creative perspective that later shaped his philosophy of rhythm, balance, and aesthetic control."
    },
    {
      year: "Age 17",
      title: "The First Challenge: Loss of Vision",
      icon: Eye,
      text: "At approximately 17 years of age, Imran suffered a sudden, severe loss of eyesight. Through extensive medical intervention and patience, his vision was successfully restored, instilling early resilience."
    },
    {
      year: "Circa 2009",
      title: "Spinal Diagnosis in Mumbai",
      icon: HeartPulse,
      text: "Around 2009, one of his legs suddenly became numb. Specialist examinations in Mumbai revealed a serious neurological and spinal condition. Doctors informed him that walking would become extremely difficult."
    },
    {
      year: "Rehabilitation",
      title: "Choosing Skill Over Sympathy",
      icon: Trophy,
      text: "Undergoing intensive rehabilitation in Mumbai, Imran refused to view the wheelchair as a symbol of confinement. Instead, he treated it as high-performance equipment to be mastered through daily biomechanical practice."
    },
    {
      year: "Sports & Film",
      title: "Swimming Gold, Film 'Holiday' & HYROX",
      icon: Film,
      text: "Imran won a gold medal in swimming in Punjab, choreographed wheelchair dance, and performed wheelchair stunt sequences alongside Akshay Kumar in the Bollywood feature film 'Holiday'. At HYROX Delhi, he claimed 1st place in Adaptive Men Seated."
    },
    {
      year: "Today",
      title: "The Mission: Independently Jeena Seekhiye",
      icon: Users,
      text: "Now based between Uttar Pradesh and Mumbai, Imran mentors wheelchair users across India — proving through hands-on coaching that independent living is a learnable skill, not an impossible dream."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F7F4] border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE6DF] text-[#121316] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'इमरान कुरैशी का सफर' : 'THE STORY BEHIND THE SKILLS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                पैरों ने छोड़ा साथ, तो पहियों को <br />
                <span className="text-[#E64A19]">हौसलों का पंख बना लिया।</span>
              </>
            ) : (
              <>
                Turning Adversity Into Mastery. <br />
                <span className="text-[#E64A19]">From Grassroots To The National Stage.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#4A4E57] leading-relaxed">
            Mohammad Imran did not emerge from a luxury sports academy. His expertise as a specialized wheelchair trainer and adaptive athlete was forged through neurological adversity, relentless self-training on Mumbai pavements, and the refusal to live a life governed by pity. Today, he coaches wheelchair users across India to achieve complete real-world autonomy.
          </p>
        </div>

        {/* Dual Column Narrative: Photography & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Authentic Action Photo & Roots Anchor */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-zinc-900 aspect-[3/4]">
              <Image
                src="/images/imran/imran-hyrox-action.jpg"
                alt="Mohammad Imran propelling his wheelchair with athletic intensity at HYROX Delhi"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                  ATHLETIC DISCIPLINE
                </span>
                <p className="text-sm font-semibold mt-1 text-zinc-200">
                  &ldquo;A wheelchair user must be an athlete of everyday life. The street is our arena.&rdquo;
                </p>
                <div className="mt-2 text-xs text-zinc-400 font-mono">
                  — Mohammad Imran
                </div>
              </div>
            </div>

            {/* Geographic Location Card */}
            <div className="p-5 rounded-xl bg-white border border-[#E4E1DA] space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#717682] font-mono">
                LOCATION & BASE
              </div>
              <h4 className="text-base font-bold text-[#121316]">
                Lucknow, Uttar Pradesh
              </h4>
              <p className="text-xs text-[#52525B]">
                Uttar Pradesh, India • Mentoring individuals across India.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-6">
              {timelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative pl-8 sm:pl-10 group"
                  >
                    {/* Vertical timeline rule */}
                    {idx !== timelineSteps.length - 1 && (
                      <div className="absolute left-[15px] sm:left-[19px] top-8 bottom-0 w-[2px] bg-[#E4E1DA] group-hover:bg-[#E64A19] transition-colors" />
                    )}

                    {/* Timeline Node Dot */}
                    <div className="absolute left-0 top-1 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white border-2 border-[#121316] group-hover:border-[#E64A19] group-hover:bg-[#E64A19] group-hover:text-white flex items-center justify-center text-[#121316] transition-colors shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E4E1DA] hover:border-[#121316] transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#E64A19] uppercase">
                          {step.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#121316] tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#4A4E57] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Story Callout */}
            <div className="p-6 rounded-2xl bg-[#EAE6DF] border border-[#D5D0C6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#121316]">
                  Want to learn directly from Imran&apos;s experience?
                </h4>
                <p className="text-xs sm:text-sm text-[#52525B] mt-0.5">
                  1-on-1 sessions, virtual consultations, and community workshops.
                </p>
              </div>

              <a
                href="#training"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#121316] text-white hover:bg-[#E64A19] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>View Training</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
