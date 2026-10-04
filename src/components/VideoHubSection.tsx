'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ArrowRight, ExternalLink } from 'lucide-react';
import { YouTubeIcon } from './SocialIcons';
import { YOUTUBE_VIDEOS, SITE_METADATA } from '@/data/siteData';

interface VideoHubProps {
  onPlayVideo?: (videoUrl: string) => void;
  isHindi?: boolean;
}

export default function VideoHubSection({ onPlayVideo, isHindi = false }: VideoHubProps) {
  return (
    <section id="videos" className="py-20 sm:py-28 bg-white border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-bold uppercase tracking-widest font-mono">
              <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
              <span>{isHindi ? 'यूट्यूब वीडियो हब' : 'LEARN WITH IMRAN'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
              {isHindi ? (
                <>
                  देखकर सीखिए। <br />
                  <span className="text-[#E64A19]">मुफ्त वीडियो ट्यूटोरियल्स।</span>
                </>
              ) : (
                <>
                  Learn By Watching. <br />
                  <span className="text-[#E64A19]">Tutorials & Real Life In Action.</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#52525B]">
              Step-by-step demonstrations from curb climbs to car transfers on Imran&apos;s official YouTube channel ({SITE_METADATA.youtubeHandle}).
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={SITE_METADATA.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm"
            >
              <YouTubeIcon className="w-4 h-4 fill-current" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {YOUTUBE_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="group bg-[#F8F7F4] rounded-2xl border border-[#E4E1DA] hover:border-[#121316] overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-bold">
                    {video.duration}
                  </span>

                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#121316]/90 text-white text-[10px] font-mono font-bold uppercase">
                    {video.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-[#121316] group-hover:text-[#E64A19] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-[#52525B] line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-[#E4E1DA] hover:bg-[#121316] hover:text-white text-xs font-bold text-[#121316] transition-colors"
                >
                  <span>Watch Video</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
