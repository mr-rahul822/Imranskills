'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_METADATA } from '@/data/siteData';

interface NavbarProps {
  onOpenBooking?: () => void;
  isHindi?: boolean;
}

export default function Navbar({ onOpenBooking, isHindi = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: isHindi ? 'परिचय' : 'About', href: '#about' },
    { name: isHindi ? 'ट्रेनिंग प्रोग्राम्स' : 'Training & Skills', href: '#training' },
    { name: isHindi ? 'उपलब्धियां' : 'Achievements', href: '#achievements' },
    { name: isHindi ? 'कम्युनिटी' : 'Community', href: '#community' },
    { name: isHindi ? 'सुगम यात्रा' : 'Accessible Travel', href: '#travel' },
    { name: isHindi ? 'वीडियोज' : 'Videos', href: '#videos' },
    { name: isHindi ? 'मीडिया' : 'Media', href: '#media' },
    { name: isHindi ? 'गैलरी' : 'Gallery', href: '#gallery' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md shadow-sm border-b border-[#E4E1DA]'
          : 'bg-[#F8F7F4] border-b border-[#E4E1DA]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="group flex flex-col focus:ring-2 focus:ring-[#E64A19] rounded-md p-1 -ml-1"
            aria-label="Imran Skills homepage"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#121316] uppercase font-mono group-hover:text-[#E64A19] transition-colors">
                IMRAN<span className="text-[#E64A19]">.</span>SKILLS
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#121316] text-[#F8F7F4] rounded">
                Official
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#52525B] font-medium tracking-wide">
              Mohammad Imran Qureshi • Adaptive Athlete & Coach
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-[#3F3F46] hover:text-[#121316] hover:bg-[#EFECE6] rounded-md transition-colors focus:ring-2 focus:ring-[#E64A19]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Booking CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
                'Hello Imran, I would like to enquire about wheelchair skills training.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#121316] bg-[#EAE6DF] hover:bg-[#E2DDD4] rounded-lg transition-colors border border-[#D5D0C6] focus:ring-2 focus:ring-[#E64A19]"
              aria-label="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                if (onOpenBooking) {
                  onOpenBooking();
                } else {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase bg-[#E64A19] hover:bg-[#D84315] text-white rounded-lg shadow-sm hover:shadow transition-all focus:ring-2 focus:ring-[#121316]"
            >
              <span>{isHindi ? 'ट्रेनिंग बुक करें' : 'Book Training'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="Direct WhatsApp Message"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-[#121316] bg-[#EFECE6] hover:bg-[#E4E1DA] focus:ring-2 focus:ring-[#E64A19]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-b border-[#E4E1DA] bg-[#F8F7F4] px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-[#121316] hover:bg-[#EFECE6] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E4E1DA] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenBooking) {
                  onOpenBooking();
                } else {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wider bg-[#E64A19] hover:bg-[#D84315] text-white rounded-lg shadow"
            >
              <span>{isHindi ? 'ट्रेनिंग बुक करें' : 'Book A Training Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
                'Hello Imran, I would like to enquire about wheelchair skills training.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#121316] bg-[#EAE6DF] hover:bg-[#E2DDD4] rounded-lg border border-[#D5D0C6]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Talk on WhatsApp ({SITE_METADATA.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
