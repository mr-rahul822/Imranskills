'use client';

import React, { useState } from 'react';
import AccessibilityBar from '@/components/AccessibilityBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import AboutStory from '@/components/AboutStory';
import TrainingSection from '@/components/TrainingSection';
import AchievementsSection from '@/components/AchievementsSection';
import RealProgressSection from '@/components/RealProgressSection';
import CommunitySection from '@/components/CommunitySection';
import TravelGuideSection from '@/components/TravelGuideSection';
import VideoHubSection from '@/components/VideoHubSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function HomePage() {
  const [isHindi, setIsHindi] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (programId?: string) => {
    if (programId) {
      setSelectedProgramId(programId);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Accessibility & Language Bar */}
      <AccessibilityBar
        isHindi={isHindi}
        onLanguageToggle={handleToggleLanguage}
      />

      {/* Main Sticky Header */}
      <Navbar
        isHindi={isHindi}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* 1. Hero Section */}
        <Hero
          isHindi={isHindi}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 2. Core Philosophy & Trust Anchors */}
        <TrustBanner
          isHindi={isHindi}
        />

        {/* 3. Imran's Journey & Origins */}
        <AboutStory
          isHindi={isHindi}
        />

        {/* 4. Six Comprehensive Training Tracks */}
        <TrainingSection
          isHindi={isHindi}
          onSelectProgram={(progId) => handleOpenBooking(progId)}
        />

        {/* 5. Major Athletic Achievements & Media */}
        <AchievementsSection
          isHindi={isHindi}
        />

        {/* 6. Real Trainees & Real Progress */}
        <RealProgressSection
          isHindi={isHindi}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. The Imran Skills Community */}
        <CommunitySection
          isHindi={isHindi}
        />

        {/* 8. Accessible Travel in India Guide */}
        <TravelGuideSection
          isHindi={isHindi}
        />

        {/* 9. YouTube Video Tutorials Hub */}
        <VideoHubSection
          isHindi={isHindi}
        />

        {/* 10. Photo Gallery with Accessible Lightbox */}
        <GallerySection
          isHindi={isHindi}
        />

        {/* 11. WhatsApp Booking & Enquiry System */}
        <BookingSection
          isHindi={isHindi}
          initialProgramId={selectedProgramId}
        />

        {/* 12. Search & GEO Optimized FAQ */}
        <FAQSection
          isHindi={isHindi}
        />
      </main>

      {/* Site Footer */}
      <Footer
        isHindi={isHindi}
      />

      {/* Sticky Floating WhatsApp CTA */}
      <WhatsAppFloat />
    </div>
  );
}
