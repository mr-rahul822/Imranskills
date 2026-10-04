'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_LIST, FAQItem } from '@/data/siteData';

interface FAQSectionProps {
  isHindi?: boolean;
}

export default function FAQSection({ isHindi = false }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-bold uppercase tracking-widest font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isHindi ? 'अक्सर पूछे जाने वाले सवाल' : 'QUESTIONS & ANSWERS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                स्पष्ट उत्तर। <br />
                <span className="text-[#E64A19]">पारदर्शी एवं प्रामाणिक जानकारी।</span>
              </>
            ) : (
              <>
                Frequently Asked Questions. <br />
                <span className="text-[#E64A19]">Clear, Transparent Answers.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#52525B]">
            Everything you need to know about wheelchair skills coaching, session logistics, and institutional collaboration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E4E1DA] bg-[#F8F7F4] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:ring-2 focus:ring-[#E64A19] transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#E64A19]">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#121316] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E4E1DA] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#121316] text-white border-[#121316]' : 'text-[#121316]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A4E57] leading-relaxed border-t border-[#E4E1DA]/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#717682]">
          Have a unique question not listed here?{' '}
          <a href="#booking" className="text-[#E64A19] font-bold hover:underline">
            Reach out directly on WhatsApp or Email
          </a>
        </div>

      </div>
    </section>
  );
}
