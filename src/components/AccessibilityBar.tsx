'use client';

import React, { useState, useEffect } from 'react';
import { Eye, Type, Volume2, Globe } from 'lucide-react';

interface AccessibilityBarProps {
  onLanguageToggle?: () => void;
  isHindi?: boolean;
}

export default function AccessibilityBar({ onLanguageToggle, isHindi = false }: AccessibilityBarProps) {
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.setAttribute('data-contrast', 'high');
    } else {
      root.removeAttribute('data-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    const root = document.documentElement;
    if (textSize === 'normal') {
      root.removeAttribute('data-text-size');
    } else {
      root.setAttribute('data-text-size', textSize);
    }
  }, [textSize]);

  const cycleTextSize = () => {
    if (textSize === 'normal') setTextSize('large');
    else if (textSize === 'large') setTextSize('extra-large');
    else setTextSize('normal');
  };

  return (
    <div
      role="region"
      aria-label="Accessibility options"
      className="bg-[#121316] text-[#E4E1DA] text-xs py-1.5 px-4 border-b border-[#2A2D34]"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#F4511E]">
            <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" aria-hidden="true" />
            <span className="tracking-wide uppercase text-[11px] font-bold">
              {isHindi ? 'स्वतंत्र जीवन की ओर' : 'Independently Jeena Seekhiye'}
            </span>
          </span>
          <span className="hidden sm:inline text-zinc-500">•</span>
          <span className="hidden sm:inline text-zinc-400">
            Official Platform of Mohammad Imran
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Text Size Adjuster */}
          <button
            onClick={cycleTextSize}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1F2128] hover:bg-[#2B2E37] text-zinc-200 transition-colors focus:ring-2 focus:ring-[#F4511E]"
            title="Adjust text size (Normal, Large, Extra Large)"
            aria-label={`Current text size: ${textSize}. Click to change.`}
          >
            <Type className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="font-semibold text-[11px]">
              {textSize === 'normal' ? 'Text: Normal' : textSize === 'large' ? 'Text: Large' : 'Text: XL'}
            </span>
          </button>

          {/* High Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded transition-colors focus:ring-2 focus:ring-[#F4511E] ${
              highContrast
                ? 'bg-[#F4511E] text-white font-bold'
                : 'bg-[#1F2128] hover:bg-[#2B2E37] text-zinc-200'
            }`}
            title="Toggle high contrast mode"
            aria-pressed={highContrast}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[11px] font-semibold">
              {highContrast ? 'High Contrast: ON' : 'High Contrast'}
            </span>
          </button>

          {/* Language Assistant Toggle */}
          {onLanguageToggle && (
            <button
              onClick={onLanguageToggle}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1F2128] hover:bg-[#2B2E37] text-zinc-200 transition-colors focus:ring-2 focus:ring-[#F4511E]"
              title="Bilingual display: English & Hindi"
              aria-label="Switch primary language guidance"
            >
              <Globe className="w-3.5 h-3.5 text-[#F4511E]" aria-hidden="true" />
              <span className="text-[11px] font-semibold">{isHindi ? 'English' : 'हिंदी'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
