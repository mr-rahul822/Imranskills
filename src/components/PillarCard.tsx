'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { PillarSlide } from './PillarGalleryModal';

export interface PillarCardProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  images: PillarSlide[];
  onOpenLightbox?: (image: PillarSlide, slideIndex: number) => void;
  isHindi?: boolean;
}

export default function PillarCard({
  index,
  title,
  subtitle,
  description,
  icon: Icon,
  images = [],
  onOpenLightbox,
  isHindi = false,
}: PillarCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInMobileView, setIsInMobileView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const hasImages = images && images.length > 0;
  const isActive = (isHovered || isInMobileView) && hasImages;

  // Mobile In-View Detection via IntersectionObserver
  useEffect(() => {
    if (!cardRef.current || !hasImages) return;

    const isMobileDevice = window.innerWidth < 1024;
    if (!isMobileDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsInMobileView(true);
        } else {
          setIsInMobileView(false);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-5% 0px -5% 0px',
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasImages]);

  // Slideshow auto-advance timer when hovered / in-view
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isActive && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 2800);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isActive, images.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const activeImage = hasImages ? images[currentSlide] : null;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl bg-[#F8F7F4] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-none hover:shadow-xl ${
        isActive
          ? 'border-[#121316] bg-white ring-1 ring-[#121316]/10 scale-[1.01]'
          : 'border-[#E4E1DA] hover:border-[#121316] hover:bg-white'
      }`}
    >
      {/* Top Slide Progress Bars when Slideshow is Active */}
      {hasImages && images.length > 1 && (
        <div className="absolute top-0 inset-x-0 z-20 flex gap-1 p-1 bg-black/10 backdrop-blur-xs">
          {images.map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-full overflow-hidden bg-white/40"
            >
              <div
                className={`h-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'bg-[#E64A19] w-full'
                    : i < currentSlide
                    ? 'bg-zinc-400 w-full'
                    : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="p-6 space-y-4">
        {/* Header Icon + Image Count Badge */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E1DA] flex items-center justify-center text-[#E64A19] group-hover:bg-[#E64A19] group-hover:text-white transition-colors shadow-xs">
            <Icon className="w-6 h-6" />
          </div>

          {hasImages && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E4E1DA] text-[11px] font-mono font-bold text-[#121316] shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#E64A19]" />
              <span>
                {currentSlide + 1}/{images.length}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              )}
            </div>
          )}
        </div>

        {/* Title and Subtitle */}
        <div>
          <h3 className="text-lg font-bold text-[#121316] tracking-tight group-hover:text-[#E64A19] transition-colors">
            {title}
          </h3>
          <p className="text-xs font-semibold text-[#E64A19] mt-0.5 font-mono">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-[#52525B] leading-relaxed">
          {description}
        </p>

        {/* Image Slideshow - COMPLETELY UNOBSTRUCTED, NO TEXT OVERLAY */}
        {hasImages && activeImage && (
          <div className="pt-2">
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(activeImage, currentSlide)}
              className="relative rounded-xl overflow-hidden bg-zinc-900 border border-[#E4E1DA] group-hover:border-[#121316] aspect-[16/10] transition-all duration-300 cursor-pointer shadow-xs group-hover:shadow-md"
              title="Click to view full-size photo"
            >
              {/* The Picture itself - Full View, No Gradient Overlays Blocking Subject */}
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
              />

              {/* Navigation Chevrons on Image (Discreet & Non-Intrusive) */}
              {images.length > 1 && (
                <div className="absolute inset-y-0 inset-x-1.5 flex items-center justify-between z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all transform hover:scale-110 shadow"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all transform hover:scale-110 shadow"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Clean, Discreet Bottom Status Line (Outside the picture) */}
            <div className="mt-2 flex items-center justify-between text-[11px] text-[#717682]">
              <span className="font-mono text-[#52525B]">
                {activeImage.tag || `Photo ${currentSlide + 1}`}
              </span>

              {images.length > 1 && (
                <div className="flex items-center gap-1">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentSlide ? 'bg-[#E64A19] w-3.5' : 'bg-[#D5D0C6] w-1.5'
                      }`}
                      aria-label={`Go to photo ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer / Pillar Number */}
      <div className="px-6 py-4 border-t border-[#E4E1DA]/70 bg-white/40 flex items-center justify-between text-xs text-[#717682] font-mono">
        <span>Pillar 0{index + 1}</span>
        <button
          type="button"
          onClick={() => {
            if (hasImages && onOpenLightbox && activeImage) {
              onOpenLightbox(activeImage, currentSlide);
            }
          }}
          className="text-[#121316] font-bold group-hover:text-[#E64A19] group-hover:translate-x-1 transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>{hasImages ? 'View Full Photos' : 'Learn More'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
