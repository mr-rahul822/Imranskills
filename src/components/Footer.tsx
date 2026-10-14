'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Trophy, 
  ArrowUp, 
  Heart, 
  ShieldCheck,
  ExternalLink 
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './SocialIcons';
import { SITE_METADATA } from '@/data/siteData';
import AnimatedWheelchairLogo from './AnimatedWheelchairLogo';

interface FooterProps {
  isHindi?: boolean;
}

export default function Footer({ isHindi = false }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121316] text-[#F8F7F4] pt-16 pb-12 border-t border-[#2A2D34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2A2D34]">
          
          {/* Brand Identity & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <AnimatedWheelchairLogo size={46} isDark />
              <div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight uppercase font-mono text-white leading-none">
                  IMRAN<span className="text-[#FF5722]">.</span>SKILLS
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  Mohammad Imran • Wheelchair Lifestyle Instructor
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-300 max-w-sm leading-relaxed">
              Empowering wheelchair users across India with real-world mobility skills, independent transfers, adaptive fitness, and dignity. No pity — only mastery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_METADATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1E2026] hover:bg-[#FF5722] text-white flex items-center justify-center transition-colors border border-[#2E313A]"
                aria-label="Follow Imran Skills on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href={SITE_METADATA.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1E2026] hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-[#2E313A]"
                aria-label="Subscribe to Imran Skills YouTube channel"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${SITE_METADATA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1E2026] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors border border-[#2E313A]"
                aria-label="Chat with Imran on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="w-10 h-10 rounded-xl bg-[#1E2026] hover:bg-amber-600 text-white flex items-center justify-center transition-colors border border-[#2E313A]"
                aria-label="Email Mohammad Imran"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>HYROX Delhi Champion • 01:40:42 • Bib #85001</span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF5722] font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  About Imran&apos;s Journey
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white hover:underline transition-colors">
                  Training & Skills Tracks
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white hover:underline transition-colors">
                  Achievements & Media
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white hover:underline transition-colors">
                  The Imran Skills Community
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-white hover:underline transition-colors">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white hover:underline transition-colors">
                  Real Photo Chronicles
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white hover:underline transition-colors">
                  Book A Training Session
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Roots Information (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF5722] font-bold">
              LOCATION & CONTACT
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Location: </span>
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Operational Bases: </span>
                  <span>Uttar Pradesh & Mumbai (Maharashtra), India</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5722] shrink-0" />
                <a href={`tel:${SITE_METADATA.phone}`} className="hover:text-white font-mono">
                  {SITE_METADATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-white font-mono">
                  {SITE_METADATA.email}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#2A2D34] text-xs text-zinc-400">
              <p className="font-mono text-zinc-300 font-semibold">
                Available for:
              </p>
              <p className="mt-1">
                1:1 Coaching • NGO Camps • Rehabilitation Demonstrations • Motivational Keynotes
              </p>
            </div>
          </div>

        </div>

        {/* Managed & Created By Astriq Technologies */}
        <div className="pt-8 pb-6 border-b border-[#2A2D34] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a
              href="https://astriqtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Astriq Technologies (opens in new tab)"
              className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#171920] to-[#1E222A] hover:from-[#1E212A] hover:to-[#262B35] border border-[#2E313A] hover:border-[#FF5722]/60 hover:shadow-xl hover:shadow-[#FF5722]/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-9 h-9 shrink-0 flex items-center justify-center p-1 rounded-xl bg-black/40 border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="/images/astriq-symbol.png"
                  alt="Astriq Technologies Logo"
                  width={34}
                  height={34}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-zinc-300">
                  {isHindi ? 'निर्मित एवं प्रबंधित' : 'Created & Managed by'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF8A00] transition-colors tracking-wide flex items-center gap-1.5 font-sans">
                  Astriq Technologies
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FF5722]/20 text-[#FF8A00] font-mono font-bold tracking-wider">
                    TECH
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#FF8A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </span>
              </div>
            </a>

            <p className="text-xs text-zinc-400 max-w-xs leading-relaxed hidden md:block">
              {isHindi
                ? 'वेबसाइट डिज़ाइन, विकास एवं तकनीकी प्रबंधन'
                : 'Digital partner for web architecture, performance & management'}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>WCAG 2.1 AA Compliant</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-zinc-400">Ultra-fast Next.js Performance</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Mohammad Imran (Imran Skills).</span>
            <span>•</span>
            <span className="text-zinc-300 font-medium">
              {isHindi ? 'इंडिपेंडेंटली जीना सीखिए।' : 'Independently Jeena Seekhiye.'}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E2026] hover:bg-[#2E313A] text-white transition-colors border border-[#2E313A]"
            aria-label="Scroll back to top of page"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider">{isHindi ? 'ऊपर जाएं' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
