'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles, Play, Pause } from 'lucide-react';

export interface PillarSlide {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

interface PillarGalleryModalProps {
  isOpen: boolean;
  pillarTitle: string;
  pillarSubtitle: string;
  images: PillarSlide[];
  initialIndex?: number;
  onClose: () => void;
}

export default function PillarGalleryModal({
  isOpen,
  pillarTitle,
  pillarSubtitle,
  images = [],
  initialIndex = 0,
  onClose,
}: PillarGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sync initial index when modal opens
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsPlaying(true);
  }, [initialIndex, isOpen]);

  // Autoplay timer
  useEffect(() => {
    if (!isOpen || !isPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${pillarTitle} - Full View Pictures`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 z-50 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E64A19] text-white flex items-center justify-center font-bold text-sm">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {pillarTitle}
              </h3>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/20 text-white text-xs font-mono">
                {pillarSubtitle}
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Showing image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {images.length > 1 && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Auto-play ON' : 'Paused'}</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:ring-2 focus:ring-[#E64A19]"
            aria-label="Close full view"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Prev Chevron */}
      {images.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all transform hover:scale-110 focus:ring-2 focus:ring-[#E64A19] border border-white/10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Full View Image Viewport */}
      <div className="relative max-w-5xl w-full h-[70vh] sm:h-[75vh] flex flex-col items-center justify-center my-auto">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Floating Caption & Tag Card */}
        <div className="w-full mt-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 sm:p-5 text-white backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#E64A19] text-white">
                {currentImage.tag}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {pillarTitle}
              </span>
            </div>
            <p className="text-sm sm:text-base text-zinc-100 font-medium">
              {currentImage.caption}
            </p>
          </div>

          {/* Mini Thumbnail Row */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? 'border-[#E64A19] scale-105 shadow-md'
                      : 'border-zinc-700 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Next Chevron */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all transform hover:scale-110 focus:ring-2 focus:ring-[#E64A19] border border-white/10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
