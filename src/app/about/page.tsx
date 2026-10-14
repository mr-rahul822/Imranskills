import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Trophy, Heart, Shield, Palette, Eye, HeartPulse, Film, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE_METADATA, OTHER_ACHIEVEMENTS } from '@/data/siteData';

export const metadata: Metadata = {
  title: "About Mohammad Imran | Wheelchair Trainer, Skills Coach & Athlete",
  description: "Learn about Mohammad Imran: HYROX Delhi Champion, Premier Wheelchair Trainer, and Adaptive Skills Coach empowering wheelchair users to live independently across India.",
  keywords: [
    "About Mohammad Imran",
    "wheelchair trainer",
    "wheelchair trainer India",
    "wheelchair instructor",
    "wheelchair coach",
    "Mohammad Imran bio",
    "wheelchair power man of India",
    "adaptive athlete biography"
  ],
  alternates: {
    canonical: "https://imranskills.com/about",
  },
  openGraph: {
    title: "About Mohammad Imran | Wheelchair Trainer & Skills Coach",
    description: "The story, athletic achievements, and wheelchair skills training mission of Mohammad Imran.",
    url: "https://imranskills.com/about",
    siteName: "Imran Skills",
    images: [
      {
        url: "https://imranskills.com/images/imran/imran-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammad Imran - Wheelchair Trainer and Athlete",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7F4] text-[#121316]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Breadcrumb & Top Navigation */}
          <div className="flex items-center justify-between border-b border-[#E4E1DA] pb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#52525B] hover:text-[#121316] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E64A19]">
              BIOGRAPHICAL PROFILE
            </span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold uppercase tracking-wider">
              <span>MOHAMMAD IMRAN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121316] uppercase leading-tight">
              &ldquo;Independently Jeena Seekhiye.&rdquo; <br />
              <span className="text-[#E64A19]">The Story Behind The Skills.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A4E57] max-w-3xl leading-relaxed">
              Wheelchair Lifestyle Instructor, Adaptive Athlete, and Disability Community Mentor with roots in Lucknow, Uttar Pradesh.
            </p>
          </div>

          {/* Featured Real Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-zinc-900">
              <Image
                src="/images/imran/imran-hyrox-champion.jpg"
                alt="Mohammad Imran smiling at HYROX Delhi"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-3">
                <span className="text-xs font-mono font-bold text-[#E64A19] uppercase">
                  THE TURNING POINT
                </span>
                <h3 className="text-2xl font-bold text-[#121316]">
                  A Neurological Challenge in 2009
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  Around 2009, one of Imran&apos;s legs became numb. Thorough medical examinations in Mumbai led to a serious neurological and spinal diagnosis. Doctors stated walking would be exceedingly difficult.
                </p>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  Instead of despair, Imran immersed himself in rehabilitation in Mumbai, developing meticulous wheelchair handling and physical conditioning. Over time, mobility transformed into his defining art.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#121316] text-white space-y-2">
                <div className="text-xs font-mono uppercase text-amber-400 font-bold">
                  CORE VALUES
                </div>
                <h4 className="text-lg font-bold">
                  Independence • Competence • Dignity
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Avoid words like suffering or helpless. Wheelchair users are active citizens with agency, capable of travel, athletic performance, and self-reliance.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Chapters */}
          <div className="space-y-12 pt-8 border-t border-[#E4E1DA]">

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAE6DF] text-[#121316] flex items-center justify-center">
                  <Palette className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
                  1. Childhood, Art & The First Trial
                </h2>
              </div>
              <p className="text-base text-[#4A4E57] leading-relaxed">
                From his early years in Sultanpur, Uttar Pradesh, Imran harbored a deep passion for visual arts, drawing, and painting. This creative sensitivity taught him the importance of patience, geometry, and bodily balance.
              </p>
              <p className="text-base text-[#4A4E57] leading-relaxed">
                At around age 17, his life took an unexpected turn when he lost vision in both eyes. Through rigorous medical treatment and inner fortitude, his eyesight was restored — teaching him early that physical setbacks do not dictate the final outcome.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAE6DF] text-[#121316] flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
                  2. Competitive Para Sports & Bollywood Stunts
                </h2>
              </div>
              <p className="text-base text-[#4A4E57] leading-relaxed">
                Mastery of the wheelchair opened doors to elite athletic arenas. Imran secured a Gold Medal in swimming at the state aquatic championships in Punjab, proving his upper-body conditioning.
              </p>
              <p className="text-base text-[#4A4E57] leading-relaxed">
                His unique balance control and fearlessness led to performing high-difficulty wheelchair stunt sequences alongside Bollywood action icon Akshay Kumar in the film <em>Holiday</em>, as well as captivating audiences in wheelchair dance and visual art performances.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAE6DF] text-[#121316] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
                  3. HYROX Delhi Adaptive Champion
                </h2>
              </div>
              <p className="text-base text-[#4A4E57] leading-relaxed">
                At HYROX Delhi, Imran competed in the grueling <strong>HYROX Adaptive Men - Seated Without Hip Function</strong> category. Bearing Athlete Bib #85001, he completed the grueling fitness race in <strong>01:40:42</strong>, finishing in 1st place as champion.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAE6DF] text-[#121316] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#121316]">
                  4. The Coaching Mission
                </h2>
              </div>
              <p className="text-base text-[#4A4E57] leading-relaxed">
                Today, Imran dedicates his energy to training other wheelchair users. He teaches beginner ergonomics, curb jumping, automotive transfers, and independent travel across Indian Railways and Metro networks.
              </p>
            </section>

          </div>

          {/* Bottom Action Card */}
          <div className="p-8 rounded-3xl bg-white border-2 border-[#121316] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#121316]">
                Ready to learn from Imran?
              </h3>
              <p className="text-sm text-[#52525B]">
                Book a 1:1 session or enquire about upcoming camps.
              </p>
            </div>

            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E64A19] hover:bg-[#D84315] text-white font-bold text-sm uppercase tracking-wider shadow"
            >
              <span>Book Training</span>
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
