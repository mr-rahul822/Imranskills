'use client';

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Copy, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { SITE_METADATA, TRAINING_PROGRAMS } from '@/data/siteData';

interface BookingSectionProps {
  initialProgramId?: string;
  isHindi?: boolean;
}

export default function BookingSection({ initialProgramId, isHindi = false }: BookingSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    phone: '',
    experience: '1-3 years',
    skillFocus: 'Curbs & Street Obstacles',
    trainingMode: '1:1 In-Person',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProgramId) {
      const prog = TRAINING_PROGRAMS.find((p) => p.id === initialProgramId);
      if (prog) {
        setFormData((prev) => ({
          ...prev,
          skillFocus: prog.title.replace(/^\d+\.\s*/, '')
        }));
      }
    }
  }, [initialProgramId]);

  const generateWhatsAppMessage = () => {
    return `Hello Imran Bhai,
I would like to enquire about wheelchair skills training.

*My Details:*
• *Name:* ${formData.name || 'Not provided'}
• *Age:* ${formData.age || 'Not provided'}
• *City / State:* ${formData.city || 'Not provided'}
• *WhatsApp:* ${formData.phone || 'Not provided'}
• *Wheelchair Experience:* ${formData.experience}
• *Skill Focus:* ${formData.skillFocus}
• *Preferred Mode:* ${formData.trainingMode}
• *Preferred Date/Timing:* ${formData.preferredDate || 'Flexible'}

*Message / Goals:*
${formData.message || 'Looking forward to building independence.'}

Thank you!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#F8F7F4] border-b border-[#E4E1DA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-bold uppercase tracking-widest font-mono">
            <span>{isHindi ? 'सीधा संपर्क एवं बुकिंग' : 'DIRECT ENQUIRY & BOOKING'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121316] tracking-tight uppercase leading-tight">
            {isHindi ? (
              <>
                अपनी आत्मनिर्भरता की शुरुआत करें। <br />
                <span className="text-[#E64A19]">Book A 1:1 Session.</span>
              </>
            ) : (
              <>
                Ready To Become More Independent? <br />
                <span className="text-[#E64A19]">Book A Session With Imran.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
            No complicated account registrations. Fill out this brief form, and connect directly with Imran on WhatsApp or email to schedule your training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Trust Points */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121316] text-[#F8F7F4] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    PREFER DIRECT CHAT?
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Talk Directly On WhatsApp
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                You can directly message Imran for quick questions about upcoming sessions, travel consultations, or institutional workshops.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
                    'Hello Imran, I would like to enquire about wheelchair skills training.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp ({SITE_METADATA.whatsappDisplay})</span>
                </a>

                <a
                  href={`mailto:${SITE_METADATA.email}?subject=Wheelchair%20Training%20Enquiry`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: {SITE_METADATA.email}</span>
                </a>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4E1DA] space-y-4">
              <h4 className="text-sm font-mono font-bold text-[#121316] uppercase tracking-wider">
                WHAT HAPPENS AFTER YOU SUBMIT?
              </h4>
              <ol className="space-y-3 text-xs sm:text-sm text-[#4A4E57]">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAE6DF] text-[#121316] font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>A pre-filled WhatsApp message opens with your specific training goals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAE6DF] text-[#121316] font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>Imran or his coordinator reviews your current level and equipment setup.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAE6DF] text-[#121316] font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>You agree on dates, training location (in-person or video), and syllabus.</span>
                </li>
              </ol>
            </div>

          </div>

          {/* Right Column: The Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#121316] p-6 sm:p-10 shadow-lg">
            
            {submitted ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#121316] tracking-tight uppercase">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-[#52525B] max-w-md mx-auto">
                    Your enquiry has been formatted for WhatsApp. If WhatsApp did not open automatically, click the button below or copy the message.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E4E1DA] text-left text-xs font-mono text-[#3F3F46] max-h-48 overflow-y-auto whitespace-pre-wrap">
                  {generateWhatsAppMessage()}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    onClick={copyToClipboard}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#D5D0C6] hover:bg-[#F3F0EA] text-[#121316] font-bold text-xs uppercase tracking-wider"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#717682] underline hover:text-[#121316]"
                >
                  Edit Enquiry Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] focus:border-[#E64A19] transition-all"
                    />
                  </div>

                  {/* Age */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      Age *
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 28"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] focus:border-[#E64A19] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lucknow, UP / Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] focus:border-[#E64A19] transition-all"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] focus:border-[#E64A19] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Experience */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      Wheelchair Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] transition-all"
                    >
                      <option value="New user (< 1 year)">New user (&lt; 1 year)</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3+ years">3+ years</option>
                      <option value="Family / Caregiver">Family / Caregiver</option>
                      <option value="NGO / Rehabilitation Center">NGO / Rehabilitation Center</option>
                    </select>
                  </div>

                  {/* Training Mode */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      Preferred Training Mode
                    </label>
                    <select
                      value={formData.trainingMode}
                      onChange={(e) => setFormData({ ...formData, trainingMode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] transition-all"
                    >
                      <option value="1:1 In-Person">1:1 In-Person Training</option>
                      <option value="Online Video Guidance">Online Video Guidance</option>
                      <option value="Community Skill Camp">Community Skill Camp</option>
                      <option value="NGO / Institutional Workshop">NGO / Institutional Workshop</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Skill Focus */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      Primary Skill Needed
                    </label>
                    <select
                      value={formData.skillFocus}
                      onChange={(e) => setFormData({ ...formData, skillFocus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] transition-all"
                    >
                      <option value="Beginner Handling & Balance">Beginner Handling & Balance</option>
                      <option value="Curbs & Street Obstacles">Curbs & Street Obstacles</option>
                      <option value="Independent Car/Bed Transfers">Independent Car/Bed Transfers</option>
                      <option value="Independent Travel (Train/Metro/Air)">Independent Travel (Train/Metro/Air)</option>
                      <option value="Adaptive Fitness & Stamina">Adaptive Fitness & Stamina</option>
                      <option value="Institutional Workshop / Camp">Institutional Workshop / Camp</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                      Preferred Date / Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next month / Weekends"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] transition-all"
                    />
                  </div>
                </div>

                {/* Specific Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                    Specific Obstacle or Goal You Want To Overcome
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. I am afraid of curbs, or I want to learn car transfers so I can go to office alone..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D0C6] bg-[#F8F7F4] text-[#121316] text-sm focus:bg-white focus:ring-2 focus:ring-[#E64A19] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#E64A19] hover:bg-[#D84315] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all focus:ring-2 focus:ring-[#121316]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-[#717682]">
                  🔒 Your contact information is never shared. Direct communication only.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
