'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Share2,
  Check,
  MessageCircle,
  Calendar,
  Clock,
  Heart,
  ShieldCheck,
  Sparkles,
  Trophy,
  Home,
  Flame,
  Compass,
  CheckCircle2,
  Volume2,
  VolumeX,
  Languages,
  BookOpen
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function StoryPage() {
  const [copied, setCopied] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      'मेरी कहानी — Wheelchair से Independence तक | Mohammad Imran (Wheelchair Lifestyle Instructor & Adaptive Athlete):\nhttps://imranskills.com/story'
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const hindiStoryText = `
        मेरी कहानी — व्हीलचेयर से इंडिपेंडेंस तक।
        मोहम्मद इमरान।
        मेरा नाम मोहम्मद इमरान है। मैं एक व्हीलचेयर लाइफस्टाइल इंस्ट्रक्टर, अडैप्टिव एथलीट और कंटेंट क्रिएटर हूँ।
        पिछले 16 सालों से मैं खुद व्हीलचेयर पर जिंदगी जी रहा हूँ, और इसी सफर में मैंने सीखा कि स्पाइनल कॉर्ड इंजरी के बाद सबसे बड़ी चुनौती सिर्फ शरीर नहीं होती—बल्कि यह समझना होता है कि अब जिंदगी को कैसे जीना है।
        जिंदगी सिर्फ चलने का नाम नहीं है। अपनी जिंदगी को खुद मैनेज करना भी इंडिपेंडेंस है।
        व्हीलचेयर जिंदगी का अंत नहीं है। कई लोगों के लिए यह एक नई जिंदगी की शुरुआत है।
        एबिलिटी इन एक्शन।
      `;
      const utterance = new SpeechSynthesisUtterance(hindiStoryText);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCFB] text-[#121316] selection:bg-[#FF5722] selection:text-white">
      {/* Scroll Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-[#E64A19] to-[#FF8A00] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <main className="flex-1 pb-24">

        {/* Top Breadcrumb & Action Utility Bar */}
        <section className="bg-[#F4F1EA] border-b border-[#E4E1DA] py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#52525B] hover:text-[#121316] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-white border border-[#D5D0C6] hover:border-[#121316] text-[#121316] transition-colors"
                title="Toggle Hindi / English translation"
              >
                <Languages className="w-3.5 h-3.5 text-[#E64A19]" />
                <span>{isEnglish ? 'हिंदी में पढ़ें' : 'Read in English'}</span>
              </button>

              {/* Text-to-speech button */}
              <button
                onClick={toggleSpeech}
                className={`p-2 rounded-lg border text-xs font-mono transition-colors ${isSpeaking
                    ? 'bg-[#E64A19] text-white border-[#E64A19]'
                    : 'bg-white text-[#52525B] hover:text-[#121316] border-[#D5D0C6]'
                  }`}
                title={isSpeaking ? 'Stop narration' : 'Listen to story summary'}
                aria-label="Toggle audio narration"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* WhatsApp Share */}
              <button
                onClick={handleShareWhatsApp}
                className="p-2 rounded-lg bg-white hover:bg-emerald-50 text-emerald-600 border border-[#D5D0C6] hover:border-emerald-300 transition-colors"
                title="Share story on WhatsApp"
                aria-label="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-white hover:bg-zinc-100 text-[#52525B] border border-[#D5D0C6] transition-colors"
                title="Copy story link"
                aria-label="Copy link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </section>

        {/* Hero Headline & Title Section */}
        <header className="pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-[#E8E5DD] bg-gradient-to-b from-[#F9F7F2] to-[#FDFCFB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">

            {/* Tag / Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBE9E7] text-[#E64A19] text-xs font-mono font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current" />
                स्वयं की ज़ुबानी • Authentic First-Person Narrative
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#71717A]">
                <Clock className="w-3.5 h-3.5" />
                4 min read • 16 Years of Lived Experience
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#121316] tracking-tight leading-[1.15]">
              {isEnglish ? (
                <>
                  My Journey — <br />
                  <span className="text-[#E64A19]">From Wheelchair to Independence</span>
                </>
              ) : (
                <>
                  मेरी कहानी — <br />
                  <span className="text-[#E64A19]">Wheelchair से Independence तक</span>
                </>
              )}
            </h1>

            {/* Author Byline Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#E4E1DA] shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E64A19] shrink-0">
                  <Image
                    src="/images/imran/imran-portrait.jpg"
                    alt="Mohammad Imran"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#121316] tracking-tight">
                    Mohammad Imran
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525B] font-medium">
                    Wheelchair Lifestyle Instructor | Adaptive Athlete | Content Creator
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#E64A19] font-bold sm:border-l sm:border-zinc-200 sm:pl-4">
                <Trophy className="w-4 h-4 shrink-0" />
                <span>HYROX Champion • 16 Yrs on Wheelchair</span>
              </div>
            </div>

          </div>
        </header>

        {/* Narrative Article Content Container */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 space-y-14 sm:space-y-16">

          {/* Chapter 1: मेरी शुरुआत */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center text-xs font-mono font-bold">
                01
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'My Beginning' : 'मेरी शुरुआत'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-4 font-normal">
              <p>
                {isEnglish ? (
                  <>
                    My name is <strong>Mohammad Imran</strong>. I am a Wheelchair Lifestyle Instructor, Adaptive Athlete, and Content Creator.
                  </>
                ) : (
                  <>
                    मेरा नाम <strong>Mohammad Imran</strong> है। मैं एक Wheelchair Lifestyle Instructor, Adaptive Athlete और Content Creator हूँ।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    For the past <strong>16 years</strong>, I have been living my life on a wheelchair. Throughout this journey, I learned that after a Spinal Cord Injury, the biggest hurdle is not merely the physical body—it is understanding and mastering <em>how to truly live life again</em>.
                  </>
                ) : (
                  <>
                    पिछले <strong>16 सालों से मैं खुद wheelchair पर जिंदगी जी रहा हूँ</strong>, और इसी सफर में मैंने सीखा कि Spinal Cord Injury के बाद सबसे बड़ी चुनौती सिर्फ शरीर नहीं होती—बल्कि यह समझना होता है कि अब जिंदगी को कैसे जीना है।
                  </>
                )}
              </p>
            </div>
          </section>

          {/* Chapter 2: जो मैंने देखा */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center text-xs font-mono font-bold">
                02
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'What I Witnessed' : 'जो मैंने देखा'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-4">
              <p>
                {isEnglish ? (
                  <>
                    Over these years, I met countless individuals who spent months and years in therapy centers, spending hard-earned money and time, yet remaining completely dependent on others for everyday basic activities.
                  </>
                ) : (
                  <>
                    इन सालों में मैं ऐसे बहुत से लोगों से मिला हूँ जो महीनों और सालों तक therapy centres में रहे, पैसा और समय खर्च करते रहे, लेकिन फिर भी रोजमर्रा के कामों के लिए दूसरों पर dependent रहे।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    Some struggled with pressure sores; some wrestled with urine or bowel management; others lived in constant dread of chair transfers, feeling their entire existence was now permanently confined to four bed edges.
                  </>
                ) : (
                  <>
                    किसी को pressure sore की परेशानी थी, किसी को urine या bowel management की, किसी को transfer का डर था और किसी को लगता था कि अब उसकी जिंदगी बस bed तक ही सीमित है।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    I have witnessed families where an aging mother dreams only of seeing her son walk again, while the son spends years exhausting his youth trying to take a single step for his mother.
                  </>
                ) : (
                  <>
                    मैंने ऐसे परिवार भी देखे हैं जहाँ माँ अपने बेटे को फिर से चलते देखना चाहती है और बेटा अपनी माँ के लिए चलने की कोशिश में सालों लगा देता है।
                  </>
                )}
              </p>

              {/* Core Philosophy Callout Box */}
              <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#FFF5F2] border-l-4 border-[#E64A19] space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E64A19] block">
                  जीवन का मूल मंत्र • Core Philosophy
                </span>
                <p className="text-lg sm:text-2xl font-bold text-[#121316] leading-snug">
                  {isEnglish ? (
                    <>
                      &ldquo;I am not against trying to walk. But life has taught me one profound truth: Life is not defined solely by walking. Managing your own life with full dignity is true independence.&rdquo;
                    </>
                  ) : (
                    <>
                      &ldquo;मैं walking की कोशिश के खिलाफ नहीं हूँ, लेकिन मैंने अपनी जिंदगी से एक बात सीखी है—
                      जिंदगी सिर्फ चलने का नाम नहीं है। अपनी जिंदगी को खुद manage करना भी independence है।&rdquo;
                    </>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Visual Divider: Masterclass Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/9] bg-zinc-900 my-8">
            <Image
              src="/images/imran/imran-skills-wheelie-rehab.jpg"
              alt="Mohammad Imran demonstrating two-wheel balance and transfer skills"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
              <span className="font-mono uppercase text-amber-400 font-bold block text-[10px]">
                REHABILITATION WORKSHOPS • MUMBAI
              </span>
              Mohammad Imran conducting hands-on wheelchair balance & transfer masterclass.
            </div>
          </div>

          {/* Chapter 3: मेरी Training */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center text-xs font-mono font-bold">
                03
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'My Training Approach' : 'मेरी Training'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-4">
              <p>
                {isEnglish ? (
                  <>
                    This belief is the foundation of my training method.
                  </>
                ) : (
                  <>
                    इसी सोच के साथ मेरी training शुरू होती है।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    When I visit a patient&apos;s home, I don&apos;t just ask them to do exercises. I examine their entire environment—their wheelchair setup, ramps, bed height, washroom accessibility, and daily home routine—to figure out how life can be made frictionless.
                  </>
                ) : (
                  <>
                    मैं patient के घर जाकर सिर्फ exercise नहीं करवाता। मैं देखता हूँ कि उसके लिए wheelchair, ramp, bed, washroom और daily routine को कैसे आसान बनाया जा सकता है।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    Then we start with small, deliberate steps: first wheelchair propulsion, then bed transfers, then commode transfers, followed by dressing, personal grooming, and independent toilet management—gradually advancing into active two-wheel balance, street ramps, and independent car transfers.
                  </>
                ) : (
                  <>
                    फिर छोटे-छोटे steps से शुरुआत होती है—पहले wheelchair चलाना, फिर bed transfer, फिर commode transfer, फिर कपड़े, personal care और toilet management, और धीरे-धीरे wheelchair skills, ramps और car transfer।
                  </>
                )}
              </p>

              {/* Quote Card */}
              <div className="p-6 rounded-2xl bg-zinc-900 text-white space-y-2 my-6">
                <p className="text-base sm:text-xl font-medium text-zinc-100 italic leading-snug">
                  {isEnglish ? (
                    <>
                      &ldquo;When a patient successfully transfers to their bed on their own for the very first time, they haven&apos;t just reached a mattress—their self-belief takes an unstoppable leap forward.&rdquo;
                    </>
                  ) : (
                    <>
                      &ldquo;जब कोई patient पहली बार खुद bed पर जाता है, तो वह सिर्फ bed तक नहीं पहुंचता—
                      उसका confidence भी एक कदम आगे बढ़ता है।&rdquo;
                    </>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 4: 10, 20 और 30 साल bed पर रहे लोग */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center text-xs font-mono font-bold">
                04
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'Those Confined to Bed for 10, 20 & 30 Years' : '10, 20 और 30 साल bed पर रहे लोग'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-4">
              <p>
                {isEnglish ? (
                  <>
                    I have trained individuals who had been confined to their beds for <strong>10, 20, and even 30 years</strong>.
                  </>
                ) : (
                  <>
                    मैंने ऐसे लोगों को भी train किया है जो <strong>10, 20 और यहां तक कि 30 साल तक bed पर रहे थे</strong>।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    Following practical skills coaching, some began attending family weddings and celebrations; others stepped back into active society; some learned to drive their own modified cars, and today, one of them is running their own thriving enterprise.
                  </>
                ) : (
                  <>
                    Training के बाद किसी ने family functions में जाना शुरू किया, किसी ने society में वापस निकलना शुरू किया, किसी ने अपनी modified car चलानी शुरू की और आज उनमें से एक अपना business भी चला रहा है।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    Seeing them live their lives today fills my heart with immense joy. At times, I feel deeply blessed and think—perhaps God created me with a unique purpose, so that I could be of real service to someone.
                  </>
                ) : (
                  <>
                    उन्हें आज अपनी जिंदगी जीते हुए देखकर मुझे बहुत खुशी होती है।
                    कभी-कभी खुद से भी मोहब्बत हो जाती है और लगता है—
                    शायद ईश्वर ने मुझे किसी खास काम के लिए बनाया है, ताकि मैं किसी के काम आ सकूँ।
                  </>
                )}
              </p>
            </div>
          </section>

          {/* Chapter 5: मैं भी wheelchair पर हूँ */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center text-xs font-mono font-bold">
                05
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'I Am On A Wheelchair Myself' : 'मैं भी wheelchair पर हूँ'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-4">
              <p>
                {isEnglish ? (
                  <>
                    The most powerful element of my coaching is perhaps that <strong>I am on a wheelchair myself</strong>.
                  </>
                ) : (
                  <>
                    मेरी training का सबसे खास हिस्सा शायद यह है कि <strong>मैं भी wheelchair पर हूँ</strong>।
                  </>
                )}
              </p>

              <p>
                {isEnglish ? (
                  <>
                    I do not merely explain concepts verbally; I demonstrate them physically from my own chair. A patient instantly feels:
                  </>
                ) : (
                  <>
                    मैं patient को सिर्फ समझाता नहीं, करके दिखाता हूँ। उसे लगता है—
                  </>
                )}
              </p>

              <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 italic font-semibold text-emerald-900 bg-emerald-50/60 rounded-r-xl">
                {isEnglish ? (
                  <>&ldquo;He is not just lecturing me—he truly understands my lived reality.&rdquo;</>
                ) : (
                  <>&ldquo;ये मुझे सिर्फ बता नहीं रहा, ये मेरी जिंदगी को समझता है।&rdquo;</>
                )}
              </blockquote>

              <p>
                {isEnglish ? (
                  <>
                    Today, people reach me via social media, referrals from leading spinal surgeons, and word-of-mouth recommendations from previously trained patients.
                  </>
                ) : (
                  <>
                    आज लोग मुझ तक social media, spinal surgeons के references और मेरे पुराने patients के references से पहुंचते हैं।
                  </>
                )}
              </p>
            </div>
          </section>

          {/* Chapter 6: मेरा सपना */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center text-xs font-mono font-bold">
                06
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'My Ultimate Dream' : 'मेरा सपना'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-4">
              <p>
                {isEnglish ? (
                  <>
                    My vision extends far beyond regular sessions.
                  </>
                ) : (
                  <>
                    मेरा काम सिर्फ training देना नहीं है।
                  </>
                )}
              </p>

              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121316] to-[#1E222A] text-white space-y-3">
                <span className="text-amber-400 font-mono text-xs uppercase font-bold tracking-wider">
                  THE VISION • जीवन का लक्ष्य
                </span>
                <p className="text-lg sm:text-xl font-bold leading-relaxed">
                  {isEnglish ? (
                    <>
                      My dream is that one day I will build our own dedicated <strong>Wheelchair Lifestyle Center</strong>—a sanctuary where wheelchair users receive not clinical therapy alone, but comprehensive, hands-on practical training to conquer everyday life.
                    </>
                  ) : (
                    <>
                      मेरा सपना है कि एक दिन मैं अपना <strong>Wheelchair Lifestyle Center</strong> बनाऊँ—एक ऐसी जगह जहाँ wheelchair users को सिर्फ therapy नहीं, बल्कि पूरी जिंदगी जीने की practical training मिले।
                    </>
                  )}
                </p>
              </div>

              <p>
                {isEnglish ? (
                  <>
                    I do not know exactly when or how this dream will materialize. But until that day comes, I will continue traveling to individuals, entering their homes to coach them, and putting my 16 years of hard-won experience to work for their independence.
                  </>
                ) : (
                  <>
                    मुझे नहीं पता यह सपना कब और कैसे पूरा होगा। लेकिन तब तक मैं लोगों तक जाता रहूँगा, उनके घरों में training देता रहूँगा और अपने 16 साल के experience को उनके काम लाता रहूँगा।
                  </>
                )}
              </p>
            </div>
          </section>

          {/* Chapter 7: मेरी कहानी अभी जारी है */}
          <section className="space-y-6 pt-6 border-t border-[#E8E5DD]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#E64A19] text-white flex items-center justify-center text-xs font-mono font-bold">
                07
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight">
                {isEnglish ? 'My Story Continues' : 'मेरी कहानी अभी जारी है'}
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#27272A] leading-relaxed sm:leading-loose space-y-5">
              <p>
                {isEnglish ? (
                  <>Because I have experienced this truth firsthand:</>
                ) : (
                  <>क्योंकि मैंने खुद महसूस किया है—</>
                )}
              </p>

              <div className="p-8 rounded-3xl bg-[#F4F1EA] border-2 border-[#121316] text-center space-y-4">
                <p className="text-2xl sm:text-3xl font-black text-[#121316] leading-snug">
                  {isEnglish ? (
                    <>&ldquo;A wheelchair is NOT the end of life. For many, it is the beginning of a whole new life.&rdquo;</>
                  ) : (
                    <>&ldquo;Wheelchair जिंदगी का अंत नहीं है। कई लोगों के लिए यह एक नई जिंदगी की शुरुआत है।&rdquo;</>
                  )}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E64A19] text-white text-base font-black tracking-widest uppercase">
                  <span>Ability in Action. ♿🔥</span>
                </div>

                <div className="pt-4 border-t border-zinc-300 text-sm sm:text-base font-bold text-[#121316]">
                  — Mohammad Imran <br />
                  <span className="text-xs sm:text-sm font-medium text-[#52525B]">
                    Wheelchair Lifestyle Instructor | Adaptive Athlete | Content Creator
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Action & Booking Bar */}
          <div className="pt-10 border-t border-[#E8E5DD] flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#E4E1DA] shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#121316]">
                {isEnglish ? 'Need practical wheelchair coaching?' : 'क्या आप या आपका परिवार ट्रेनिंग चाहता है?'}
              </h3>
              <p className="text-sm text-[#52525B]">
                Connect directly with Mohammad Imran for home-based coaching or video sessions.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/917800222101?text=Namaste%20Imran%20ji,%20I%20read%20your%20story%20and%20would%20like%20to%20know%20more%20about%20your%20wheelchair%20skills%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Imran</span>
              </a>

              <Link
                href="/#booking"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121316] hover:bg-[#27272A] text-white font-bold text-sm tracking-wide transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Training</span>
              </Link>
            </div>
          </div>

        </article>

      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
