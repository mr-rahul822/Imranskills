'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Zap, 
  Shuffle, 
  Navigation, 
  Dumbbell, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';
import { TRAINING_PROGRAMS, TrainingProgram } from '@/data/siteData';

interface TrainingSectionProps {
  onSelectProgram?: (programId: string) => void;
  isHindi?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Zap,
  Shuffle,
  Navigation,
  Dumbbell,
  Users
};

export default function TrainingSection({ onSelectProgram, isHindi = false }: TrainingSectionProps) {
  const [activeProgramId, setActiveProgramId] = useState<string>(TRAINING_PROGRAMS[0].id);

  const activeProgram = TRAINING_PROGRAMS.find((p) => p.id === activeProgramId) || TRAINING_PROGRAMS[0];
  const ActiveIcon = iconMap[activeProgram.iconName] || Compass;

  const handleBook = (programId: string) => {
    if (onSelectProgram) {
      onSelectProgram(programId);
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="training" className="py-20 sm:py-28 bg-white border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'ट्रेनिंग एवं कौशल' : 'CURRICULUM & MODULES'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                वास्तविक जीवन के लिए <br />
                <span className="text-[#E64A19]">प्रैक्टिकल व्हीलचेयर ट्रेनिंग।</span>
              </>
            ) : (
              <>
                Skills For Real Life. <br />
                <span className="text-[#E64A19]">Not Just Hospital Corridors.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            Six comprehensive, structured training tracks designed to build independent muscle memory, street competence, and bodily resilience for wheelchair users and their families.
          </p>
        </div>

        {/* Desktop & Mobile Track Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {TRAINING_PROGRAMS.map((prog) => {
            const Icon = iconMap[prog.iconName] || Compass;
            const isActive = prog.id === activeProgramId;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveProgramId(prog.id)}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all focus:ring-2 focus:ring-[#E64A19] ${
                  isActive
                    ? 'bg-[#121316] text-white border-[#121316] shadow-md scale-[1.02]'
                    : 'bg-[#F8F7F4] hover:bg-[#EFECE6] text-[#121316] border-[#E4E1DA]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-[#E64A19] text-white' : 'bg-white text-[#121316] border border-[#E4E1DA]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-white/20 text-zinc-200' : 'bg-[#EAE6DF] text-[#52525B]'
                    }`}
                  >
                    {prog.level}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-tight leading-snug">
                  {prog.title.replace(/^\d+\.\s*/, '')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Program Deep-Dive Display Card */}
        <div className="rounded-3xl bg-[#F8F7F4] border-2 border-[#121316] p-6 sm:p-10 shadow-lg">
          
          {/* Program Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E4E1DA]">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E64A19] text-white flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E64A19] uppercase tracking-wider">
                    {activeProgram.format} • {activeProgram.duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight uppercase">
                    {activeProgram.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#4A4E57] font-medium max-w-2xl">
                {activeProgram.tagline}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => handleBook(activeProgram.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider bg-[#E64A19] hover:bg-[#D84315] text-white rounded-xl shadow transition-all focus:ring-2 focus:ring-[#121316]"
              >
                <span>Book This Training</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Columns: What You Learn, Who It Is For, How It Helps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            
            {/* Column 1: WHAT YOU LEARN */}
            <div className="bg-white p-6 rounded-2xl border border-[#E4E1DA] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316] uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#E64A19]" />
                <span>WHAT YOU LEARN</span>
              </div>
              <ul className="space-y-3">
                {activeProgram.whatYouLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: WHO IT IS FOR */}
            <div className="bg-white p-6 rounded-2xl border border-[#E4E1DA] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316] uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#E64A19]" />
                <span>WHO IT IS FOR</span>
              </div>
              <ul className="space-y-3">
                {activeProgram.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E64A19] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: HOW IT HELPS */}
            <div className="bg-white p-6 rounded-2xl border border-[#E4E1DA] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121316] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#E64A19]" />
                <span>HOW IT HELPS</span>
              </div>
              <ul className="space-y-3">
                {activeProgram.howItHelps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E57] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span className="font-medium text-[#121316]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Quick Snapshot / Target Persona Footer */}
          <div className="mt-8 pt-6 border-t border-[#E4E1DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#52525B]">
            <div>
              <span className="font-bold text-[#121316]">Ideal Candidate: </span>
              <span>{activeProgram.idealFor}</span>
            </div>
            <button
              onClick={() => handleBook(activeProgram.id)}
              className="text-[#E64A19] font-bold inline-flex items-center gap-1 hover:underline"
            >
              <span>Enquire for {activeProgram.title.replace(/^\d+\.\s*/, '')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Clear Medical Disclaimer Notice (Mandatory Requirement) */}
        <div className="mt-8 p-4 rounded-xl bg-[#F8F7F4] border border-[#E4E1DA] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#E64A19] shrink-0 mt-0.5" />
          <p className="text-xs text-[#52525B] leading-relaxed">
            <strong className="text-[#121316]">Notice: </strong>
            Imran Skills provides practical wheelchair skills coaching, adaptive movement education, and independent lifestyle training. This is not medical treatment or clinical physiotherapy. Participants should be medically cleared for physical activity by their medical specialists.
          </p>
        </div>

      </div>
    </section>
  );
}
