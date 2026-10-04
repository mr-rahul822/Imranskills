'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_METADATA } from '@/data/siteData';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121316] text-white px-3.5 py-2 rounded-xl shadow-xl text-xs font-semibold animate-in fade-in border border-[#2E313A]">
          <span>Chat with Imran Bhai on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
          'Hello Imran, I would like to enquire about wheelchair skills training.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all focus:ring-4 focus:ring-emerald-300 relative group"
        aria-label="Chat directly with Mohammad Imran Qureshi on WhatsApp at +91 7800222101"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E64A19] border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Talk on WhatsApp</span>
      </a>
    </div>
  );
}
