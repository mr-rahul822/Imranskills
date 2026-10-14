import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Compass, Zap, Shuffle, Navigation, Dumbbell, Users, CheckCircle2, ShieldAlert } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { TRAINING_PROGRAMS } from '@/data/siteData';

export const metadata: Metadata = {
  title: "Wheelchair Skills Training & Coaching Programs | Mohammad Imran",
  description: "Comprehensive 1-on-1 wheelchair skills training in India: curb climbing, two-wheel balance (wheelies), independent car & bed transfers, and adaptive fitness coached by Mohammad Imran.",
  keywords: [
    "wheelchair skills training",
    "wheelchair trainer India",
    "wheelchair instructor",
    "wheelchair coach",
    "wheelchair curb climbing",
    "wheelchair transfer training",
    "wheelchair mobility classes",
    "adaptive fitness coaching",
    "wheelchair training Lucknow",
    "wheelchair coach Mumbai",
    "Mohammad Imran training"
  ],
  alternates: {
    canonical: "https://imranskills.com/training",
  },
  openGraph: {
    title: "Wheelchair Skills Training & Coaching Programs | Mohammad Imran",
    description: "6 practical modules: Street Maneuvering, Curb Climbing, Transfer Mechanics, Transit Navigation, Adaptive Fitness & Institutional Workshops.",
    url: "https://imranskills.com/training",
    siteName: "Imran Skills",
    images: [
      {
        url: "https://imranskills.com/images/imran/imran-gravel-obstacle-skill.jpg",
        width: 1200,
        height: 630,
        alt: "Wheelchair Skills Training by Mohammad Imran",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Zap,
  Shuffle,
  Navigation,
  Dumbbell,
  Users
};

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F4] text-[#121316]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
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
              TRAINING CURRICULUM
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold uppercase tracking-wider">
              <span>SPECIALIZED MODULES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] uppercase leading-tight">
              Wheelchair Skills Training <br />
              <span className="text-[#E64A19]">&amp; Coaching Programs.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              Structured 1-on-1 wheelchair mobility curricula coached by Mohammad Imran. Built from lived experience, clinical biomechanics, and battle-tested on real Indian roads, curb drops, and public transit.
            </p>
          </div>

          {/* All 6 Programs Full Breakdown */}
          <div className="space-y-12">
            {TRAINING_PROGRAMS.map((program) => {
              const Icon = iconMap[program.iconName] || Compass;
              return (
                <div
                  key={program.id}
                  id={program.id}
                  className="rounded-3xl bg-white border-2 border-[#121316] p-6 sm:p-10 shadow-md space-y-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E4E1DA]">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#E64A19] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E64A19] uppercase">
                          <span>{program.format}</span>
                          <span>•</span>
                          <span>{program.duration}</span>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded bg-[#EAE6DF] text-[#121316]">
                            {program.level}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight uppercase mt-1">
                          {program.title}
                        </h2>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Link
                        href={`/#booking`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E64A19] hover:bg-[#D84315] text-white font-bold text-xs uppercase tracking-wider shadow transition-all"
                      >
                        <span>Enquire for this Track</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-base text-[#4A4E57] font-medium leading-relaxed">
                    {program.tagline}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* WHAT YOU LEARN */}
                    <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
                        WHAT YOU LEARN
                      </h3>
                      <ul className="space-y-2.5">
                        {program.whatYouLearn.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#52525B]">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* WHO IT IS FOR */}
                    <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
                        WHO IT IS FOR
                      </h3>
                      <ul className="space-y-2.5">
                        {program.whoItIsFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#52525B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E64A19] shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* HOW IT HELPS */}
                    <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E4E1DA] space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
                        HOW IT HELPS
                      </h3>
                      <ul className="space-y-2.5">
                        {program.howItHelps.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#52525B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                            <span className="font-semibold text-[#121316]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-xs text-[#717682] pt-2">
                    <span className="font-bold text-[#121316]">Candidate Profile: </span>
                    <span>{program.idealFor}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Medical Notice */}
          <div className="p-5 rounded-2xl bg-white border border-[#E4E1DA] flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#E64A19] shrink-0 mt-0.5" />
            <p className="text-xs text-[#52525B] leading-relaxed">
              <strong>Medical Disclaimer: </strong>
              Imran Skills is a coaching and skill-development program for active wheelchair living. It does not replace medical consultation, clinical rehabilitation, or occupational therapy prescribed by qualified physicians.
            </p>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
