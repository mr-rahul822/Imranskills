'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, Filter, FolderPlus, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES, ImageItem } from '@/data/images';
import LightboxModal from './LightboxModal';

interface GallerySectionProps {
  isHindi?: boolean;
}

export default function GallerySection({ isHindi = false }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['ALL', 'HYROX', 'TRAINING', 'COMMUNITY', 'TRAVEL', 'ADAPTIVE FITNESS', 'MEDIA', 'LIFESTYLE'];

  const filteredImages =
    selectedCategory === 'ALL'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F8F7F4] border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE6DF] text-[#121316] text-xs font-bold uppercase tracking-widest font-mono">
              <Camera className="w-3.5 h-3.5 text-[#E64A19]" />
              <span>{isHindi ? 'तस्वीरें एवं क्षण' : 'VISUAL CHRONICLES'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
              {isHindi ? (
                <>
                  सच्ची तस्वीरें। <br />
                  <span className="text-[#E64A19]">वास्तविक जीवन की झलक।</span>
                </>
              ) : (
                <>
                  Real Moments. <br />
                  <span className="text-[#E64A19]">Life Beyond Limitations.</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#52525B]">
              Authentic photographs of training sessions, HYROX Delhi, community celebrations, and daily mobility. Zero stock imagery.
            </p>
          </div>

          {/* User Guide for Dropping More Images */}
          <div className="shrink-0 p-3.5 rounded-xl bg-white border border-[#E4E1DA] flex items-center gap-3 text-xs text-[#52525B]">
            <FolderPlus className="w-5 h-5 text-[#E64A19] shrink-0" />
            <span>
              Drop additional photos in <code className="font-mono font-bold text-[#121316]">public/images/imran/</code> anytime.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all whitespace-nowrap focus:ring-2 focus:ring-[#E64A19] ${
                selectedCategory === cat
                  ? 'bg-[#121316] text-white shadow-sm'
                  : 'bg-white text-[#52525B] hover:text-[#121316] border border-[#E4E1DA] hover:border-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption & Category tag */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-1.5 line-clamp-1">
                  {img.title}
                </h4>
                {img.caption && (
                  <p className="text-xs text-zinc-300 line-clamp-2 mt-0.5">
                    {img.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
