'use client';

import React, { useState } from 'react';
import { Compass, Dumbbell, Navigation, Users, Shield, HeartHandshake } from 'lucide-react';
import PillarCard from './PillarCard';
import PillarGalleryModal, { PillarSlide } from './PillarGalleryModal';

interface TrustBannerProps {
  isHindi?: boolean;
}

export default function TrustBanner({ isHindi = false }: TrustBannerProps) {
  const [activeGallery, setActiveGallery] = useState<{
    title: string;
    subtitle: string;
    images: PillarSlide[];
    initialIndex?: number;
  } | null>(null);

  const pillars = [
    {
      id: 'wheelchair-skills',
      icon: Compass,
      title: isHindi ? 'व्हीलचेयर स्किल्स' : 'Wheelchair Skills',
      subtitle: isHindi ? 'बैलेंस, कर्ब्स एवं स्वतंत्र आवागमन' : 'Balance, curbs, wheelies & street obstacles',
      description: 'Master practical outdoor maneuvering: tackling steep ramps, uneven footpaths, and curbs without asking for help.',
      images: [
        {
          src: '/images/imran/imran-skills-wheelie-rehab.jpg',
          alt: 'Mohammad Imran demonstrating two-wheel balance and wheelie techniques to wheelchair users in a Mumbai rehabilitation center',
          caption: 'Live Rehabilitation Masterclass: Demonstrating two-wheel balance (wheelies) and obstacle clearance before trainees and families.',
          tag: 'Wheelie Balance'
        },
        {
          src: '/images/imran/newspaper-amar-ujala.jpg',
          alt: 'Amar Ujala newspaper article showing Imran in one-wheel stunt holding a wheel and basketball',
          caption: 'Amar Ujala Feature: "हौसलों से दे दी दिव्यांगता को शिकस्त" — Stunts, swimming gold in Punjab, and mobility mastery.',
          tag: 'One-Wheel Stunt'
        },
        {
          src: '/images/imran/imran-hyrox-action.jpg',
          alt: 'Mohammad Imran pushing at high speed in his wheelchair on track',
          caption: 'Street & Track Agility: Ergonomic hand-rim push mechanics and dynamic obstacle navigation.',
          tag: 'Street Agility'
        },
        {
          src: '/images/imran/imran-gravel-obstacle-skill.jpg',
          alt: 'Mohammad Imran navigating rough gravel and obstacles with balance control',
          caption: 'Rough Terrain Mobility: Conquering unpaved paths, gravel stones, and outdoor road obstacles.',
          tag: 'Gravel Obstacles'
        }
      ]
    },
    {
      id: 'adaptive-fitness',
      icon: Dumbbell,
      title: isHindi ? 'अडैप्टिव फिटनेस' : 'Adaptive Fitness',
      subtitle: isHindi ? 'कंधों की सुरक्षा और ताकत' : 'Shoulder longevity, core & athletic power',
      description: 'Strengthen the rotator cuff, build push endurance, and condition the upper body for lifelong joint health.',
      images: [
        {
          src: '/images/imran/imran-hyrox-champion.jpg',
          alt: 'Mohammad Imran smiling at HYROX Delhi, showing Bib 85001 after winning Adaptive Men Seated',
          caption: 'HYROX Delhi Champion: Conquering 8 intense functional fitness stations in 01:40:42 in Adaptive Men Seated.',
          tag: 'HYROX Champion'
        },
        {
          src: '/images/imran/imran-hyrox-action.jpg',
          alt: 'Mohammad Imran in race pace showing upper-body endurance',
          caption: 'Functional Conditioning: Upper body power and rotator cuff protection for everyday stamina.',
          tag: 'Seated Stamina'
        }
      ]
    },
    {
      id: 'independent-travel',
      icon: Navigation,
      title: isHindi ? 'सुगम यात्रा' : 'Independent Travel',
      subtitle: isHindi ? 'ट्रेन, मेट्रो एवं हवाई यात्रा' : 'Indian Railways, Metro & Air transit mastery',
      description: 'Battle-tested protocols to board Indian trains, navigate airport aisle chairs, and commute solo with confidence.',
      images: [
        {
          src: '/images/imran/imran-travel-railway.jpg',
          alt: 'Mohammad Imran and fellow wheelchair traveler inside an Indian Railways train compartment by the window',
          caption: 'Indian Railways Travel: Coach boarding, window berth access, and long-distance train travel by wheelchair.',
          tag: 'Indian Railways'
        },
        {
          src: '/images/imran/imran-travel-airport.jpg',
          alt: 'Mohammad Imran at airport arrival terminal with luggage and baggage carousel in background',
          caption: 'Airport & Flight Transit: Navigating domestic airport terminals, luggage handling, and flight aisle-chair boarding.',
          tag: 'Airport & Flights'
        },
        {
          src: '/images/imran/imran-portrait.jpg',
          alt: 'Mohammad Imran in manual wheelchair prepared for travel',
          caption: 'Solo Commuter Confidence: Independent car transfers, taxi boarding, and public transit navigation.',
          tag: 'Solo Commute'
        }
      ]
    },
    {
      id: 'community-mentorship',
      icon: Users,
      title: isHindi ? 'कम्युनिटी व मेंटरशिप' : 'Community Mentorship',
      subtitle: isHindi ? 'साथ मिलकर आगे बढ़ना' : 'Peer learning, camps & family guidance',
      description: 'A thriving network where wheelchair users, families, and caregivers learn from shared lived experience.',
      images: [
        {
          src: '/images/imran/imran-ottobock-athletes-unity.jpg',
          alt: 'Adaptive athletes holding hands in solidarity at Ottobock arena',
          caption: 'Solidarity & Brotherhood: Holding hands in unity, elevating each other to live independently.',
          tag: 'Solidarity & Unity'
        },
        {
          src: '/images/imran/imran-skills-wheelie-rehab.jpg',
          alt: 'Imran mentoring a room full of wheelchair users and families',
          caption: 'Mentorship in Action: Inspiring newly injured patients and families to embrace independence.',
          tag: 'Hospital Clinic'
        },
        {
          src: '/images/imran/imran-community-friends-travel.jpg',
          alt: 'Group of wheelchair friends and athletes sitting together on the floor smiling',
          caption: 'Friendship & Mutual Growth: Learning, traveling, and sharing life together beyond limitations.',
          tag: 'Community Circle'
        },
        {
          src: '/images/imran/imran-hyrox-community.jpg',
          alt: 'Imran celebrating with fellow adaptive athlete and coach holding Hitensity banners',
          caption: 'Adaptive Brotherhood: Shared triumphs and mutual encouragement on and off the field.',
          tag: 'Peer Support'
        },
        {
          src: '/images/imran/imran-hyrox-team.jpg',
          alt: 'Imran and team holding HYROX Delhi flag and Hitensity banners',
          caption: 'Team Solidarity: Elevating adaptive athletes on national sporting platforms.',
          tag: 'Team Spirit'
        }
      ]
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E4E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Philosophy Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'हमारा दृष्टिकोण' : 'CORE PHILOSOPHY'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#121316] tracking-tight uppercase leading-snug">
            {isHindi ? (
              <>
                व्हीलचेयर सिर्फ चलने का साधन नहीं, <br />
                <span className="text-[#E64A19]">आत्मविश्वास और आज़ादी</span> का नाम है।
              </>
            ) : (
              <>
                Wheelchair skills are not just about movement. <br />
                <span className="text-[#E64A19]">They are about confidence, freedom & independence.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            We do not ask for sympathy. We train for competence. Every curb climbed and every transfer mastered is a declaration of personal autonomy.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <PillarCard
              key={pillar.id}
              index={idx}
              title={pillar.title}
              subtitle={pillar.subtitle}
              description={pillar.description}
              icon={pillar.icon}
              images={pillar.images}
              onOpenLightbox={(slide, slideIndex) =>
                setActiveGallery({
                  title: pillar.title,
                  subtitle: pillar.subtitle,
                  images: pillar.images,
                  initialIndex: slideIndex,
                })
              }
              isHindi={isHindi}
            />
          ))}
        </div>

        {/* Bottom Dignity & Anti-Pity Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121316] text-[#F8F7F4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-white/10 text-[#E64A19] shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                Dignity-First & Person-Centered Approach
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                Our coaching never treats wheelchair users as passive patients. You are an active decision-maker in charge of your own mobility.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#training"
              className="px-5 py-2.5 rounded-xl bg-[#E64A19] hover:bg-[#D84315] text-white font-bold text-xs sm:text-sm uppercase tracking-wide transition-colors"
            >
              Explore Training Tracks
            </a>
          </div>
        </div>

      </div>

      {/* Full View Slideshow Modal on Click */}
      {activeGallery && (
        <PillarGalleryModal
          isOpen={true}
          pillarTitle={activeGallery.title}
          pillarSubtitle={activeGallery.subtitle}
          images={activeGallery.images}
          initialIndex={activeGallery.initialIndex ?? 0}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
