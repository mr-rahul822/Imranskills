export interface TrainingProgram {
  id: string;
  title: string;
  tagline: string;
  level: 'Beginner' | 'Advanced' | 'All Levels' | 'Specialized';
  duration: string;
  format: '1:1 In-Person' | 'Online Guidance' | 'Workshop & Camp' | 'Flexible';
  whatYouLearn: string[];
  whoItIsFor: string[];
  howItHelps: string[];
  idealFor: string;
  iconName: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  timeOrScore?: string;
  bibOrId?: string;
  description: string;
  highlight?: string;
}

export interface TravelCard {
  id: string;
  title: string;
  hindiTitle?: string;
  category: 'RAILWAY' | 'METRO' | 'AIR' | 'HOTELS' | 'STREETS';
  summary: string;
  keyInsights: string[];
  practicalTips: string[];
  verifiedNote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Training' | 'Coaching' | 'Institutions' | 'Background';
}

export const SITE_METADATA = {
  name: "Mohammad Imran",
  publicName: "Mohammad Imran",
  brandName: "IMRAN SKILLS",
  tagline: "Learn To Move. Learn To Travel. Learn To Live Independently.",
  hindiTagline: "Independently Jeena Seekhiye.",
  roles: [
    "Wheelchair Lifestyle Instructor",
    "Wheelchair Skills Coach",
    "Adaptive Athlete",
    "Adaptive Fitness Trainer",
    "Disability Community Mentor"
  ],
  roots: "Jnipur / Gyanipur, Bhadaiya Block, Sultanpur district, Uttar Pradesh",
  currentBase: "Mumbai & Sultanpur, Uttar Pradesh, India",
  phone: "+91 7800222101",
  whatsapp: "+917800222101",
  whatsappDisplay: "+91 7800222101",
  email: "imranmsup@gmail.com",
  instagramUrl: "https://www.instagram.com/imranskills/",
  youtubeUrl: "https://www.youtube.com/@imranSkills",
  youtubeHandle: "@imranSkills",
  coreMission: "Independently jeena seekhiye. Transforming wheelchair mobility from an obstacle into a masterable everyday skill, fostering true autonomy, active fitness, and self-reliance without sympathy."
};

export const HYROX_ACHIEVEMENT = {
  event: "HYROX Delhi",
  category: "HYROX Adaptive Men - Seated Without Hip Function",
  finishTime: "01:40:42",
  bib: "85001",
  status: "Champion / 1st Place",
  badgeTitle: "HYROX DELHI ADAPTIVE CHAMPION",
  summary: "Official first-place champion in the Adaptive Men (Seated Without Hip Function) category at HYROX Delhi, clocking a grueling 01:40:42 through 8 functional fitness workouts and running/propulsion segments."
};

export const OTHER_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "hyrox-delhi",
    title: "HYROX Delhi Champion",
    subtitle: "Adaptive Men — Seated Without Hip Function",
    category: "Adaptive Sports",
    timeOrScore: "01:40:42",
    bibOrId: "Bib 85001",
    description: "First-place finish at HYROX Delhi, conquering 8 intense functional workouts and distance propulsion against elite competitors.",
    highlight: "1st Place Winner"
  },
  {
    id: "swimming-gold",
    title: "Gold Medalist in Swimming",
    subtitle: "State Level Para Aquatic Championship, Punjab",
    category: "Para Sports",
    description: "Secured the gold medal in competitive swimming in Punjab, demonstrating upper-body endurance, technique, and core conditioning.",
    highlight: "Gold Medal"
  },
  {
    id: "film-holiday",
    title: "Bollywood Action Stunts",
    subtitle: "Film 'Holiday' alongside Akshay Kumar",
    category: "Stunts & Media",
    description: "Performed high-skill wheelchair stunts and mobility sequences in the Bollywood feature film 'Holiday' alongside action icon Akshay Kumar.",
    highlight: "Feature Film"
  },
  {
    id: "wheelchair-art",
    title: "Wheelchair Art & Dance",
    subtitle: "Creative Expression Beyond Boundaries",
    category: "Arts & Culture",
    description: "Childhood passion for painting and visual expression channeled into wheelchair dance choreography, live demonstrations, and creative storytelling.",
    highlight: "Creative Arts"
  }
];

export const MEDIA_CLIPPINGS = [
  {
    id: "media-1",
    hindiHeadline: "पैरों ने छोड़ा साथ तो पहियों से उम्मीदों की उड़ान",
    englishTranslation: "When legs lost their support, the wheels carried the flight of hope and ambitions.",
    source: "Prominent Hindi Daily / Sultanpur & Lucknow Press",
    focus: "Imran's relentless drive to turn adversity into athletic excellence and independent living.",
  },
  {
    id: "media-2",
    hindiHeadline: "इरादों की रफ्तार के आगे हार गई बाधाएं",
    englishTranslation: "Obstacles surrendered before the unstoppable speed of determined willpower.",
    source: "Regional Media Coverage",
    focus: "National stage performance at HYROX Delhi and community mentorship for youth with mobility challenges.",
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "beginner-skills",
    title: "1. Beginner Wheelchair Skills",
    tagline: "Build foundational control, ergonomic pushing, and daily movement confidence.",
    level: "Beginner",
    duration: "4 - 8 Sessions",
    format: "1:1 In-Person",
    iconName: "Compass",
    idealFor: "New wheelchair users, recently discharged rehabilitation patients, or users struggling with arm fatigue.",
    whatYouLearn: [
      "Ergonomic hand-rim gripping and push stroke mechanics to prevent shoulder injury",
      "Controlled braking, sudden stops, and smooth direction changes",
      "Dynamic center-of-gravity balance and chair tipping prevention",
      "Effective pressure-relief techniques to safeguard skin health",
      "Spatial awareness and safe maneuvering through tight doorways and domestic corridors"
    ],
    whoItIsFor: [
      "Individuals adapting to a manual wheelchair post-injury or neurological onset",
      "Wheelchair users who experience hand blisters, wrist soreness, or shoulder fatigue",
      "Families and caregivers seeking safe handling principles without over-assisting"
    ],
    howItHelps: [
      "Eliminates dependency on family members for basic movement around the house",
      "Protects the rotator cuff and wrists from repetitive strain injuries",
      "Restores initial psychological confidence and self-efficacy"
    ]
  },
  {
    id: "advanced-skills",
    title: "2. Advanced Wheelchair Skills",
    tagline: "Master wheelies, street curbs, ramps, broken footpaths, and real-world obstacles.",
    level: "Advanced",
    duration: "6 - 10 Sessions",
    format: "1:1 In-Person",
    iconName: "Zap",
    idealFor: "Users who want to navigate Indian roads, market lanes, sidewalks, and unpaved terrain autonomously.",
    whatYouLearn: [
      "Stationary and rolling wheelies (balancing on two rear wheels)",
      "Ascending and descending curbs of varying heights safely",
      "Tackling steep ramps, speed breakers, gravel, and uneven paved roads",
      "Two-wheel pivot turns to maneuver around tight public obstructions",
      "Fall recovery and safe tipping protocols to avoid panic"
    ],
    whoItIsFor: [
      "Active wheelchair users who feel trapped by unramped shops or stepped pavements",
      "Students, working professionals, and athletes demanding full outdoor independence",
      "Users ready to overcome fear of tipping backward"
    ],
    howItHelps: [
      "Enables independent navigation of streets without waiting for a bystander to lift the chair",
      "Converts outdoor anxiety into dynamic balance control",
      "Opens up access to local markets, offices, parks, and urban transit"
    ]
  },
  {
    id: "transfer-skills",
    title: "3. Independent Transfer Skills",
    tagline: "Safe, frictionless transitions between bed, chair, toilet, and car seats.",
    level: "All Levels",
    duration: "3 - 6 Sessions",
    format: "1:1 In-Person",
    iconName: "Shuffle",
    idealFor: "Wheelchair users tired of being physically lifted by relatives or caregivers.",
    whatYouLearn: [
      "Level and unlevel transfers between bed, wheelchair, and standard chairs",
      "Independent automotive transfers (getting into the driver or passenger seat, dismantling and loading the wheelchair)",
      "Safe commode / bathroom transfers with wet surface precautions",
      "Floor-to-chair recovery techniques in the event of an accidental slip",
      "Body biomechanics and head-hips relationship to lift weight effortlessly"
    ],
    whoItIsFor: [
      "Wheelchair users wanting privacy and dignity in basic daily transfers",
      "Individuals aspiring to drive or commute independently by taxi or personal car",
      "Caregivers who suffer from back strain lifting adult family members"
    ],
    howItHelps: [
      "Restores personal privacy in bathrooms and bedrooms",
      "Unlocks spontaneous travel by car or auto-rickshaw without lifting crews",
      "Vastly reduces caregiver burnout and musculoskeletal strain"
    ]
  },
  {
    id: "travel-training",
    title: "4. Independent Travel Training",
    tagline: "Navigate Indian Railways, Metro stations, airports, and public transport with dignity.",
    level: "Specialized",
    duration: "Hands-on Field Sessions",
    format: "Flexible",
    iconName: "Navigation",
    idealFor: "Wheelchair users who want to travel across India for work, studies, or leisure.",
    whatYouLearn: [
      "Indian Railway navigation: boarding train coaches, gap crossing, and berth transfers",
      "Metro transit: elevator access, tactile guidance navigation, platform-to-train roll-in",
      "Airport and flight procedures: aisle chair boarding, battery check protocols for power chairs, manual chair baggage safety",
      "Pre-travel accessibility reconnaissance and route planning in Indian cities",
      "Communicating assertively with station staff and co-passengers"
    ],
    whoItIsFor: [
      "Solo wheelchair travelers planning intercity rail journeys or flights",
      "Professionals traveling for conferences, interviews, or work assignments",
      "Families seeking realistic protocols before taking long trips"
    ],
    howItHelps: [
      "Removes the fear of being stranded on platforms or inside planes",
      "Provides real, battle-tested practical advice tailored to Indian infrastructure",
      "Transforms travel from a dreaded ordeal into an exciting adventure"
    ]
  },
  {
    id: "adaptive-fitness",
    title: "5. Adaptive Fitness & Conditioning",
    tagline: "Seated strength, shoulder longevity, core stability, and athletic stamina.",
    level: "All Levels",
    duration: "Ongoing Coaching",
    format: "1:1 In-Person",
    iconName: "Dumbbell",
    idealFor: "Wheelchair users seeking athletic endurance, weight management, and upper-body power.",
    whatYouLearn: [
      "Targeted rotator cuff and scapular stabilizer exercises to prevent overuse injuries",
      "Seated functional conditioning using resistance bands, dumbbells, and body weight",
      "Cardiovascular stamina drills tailored for seated athletes (HYROX preparation techniques)",
      "Trunk stability and balance enhancement through active seated movements",
      "Nutritional guidance and daily hydration habits for sedentary seated routines"
    ],
    whoItIsFor: [
      "Wheelchair users looking to get fit, lose excess weight, or build athletic power",
      "Aspiring para-athletes preparing for marathons, crossfit, or HYROX competitions",
      "Anyone experiencing persistent neck, upper back, or shoulder stiffness"
    ],
    howItHelps: [
      "Builds robust upper-body horsepower so long pushes feel effortless",
      "Prevents chronic shoulder impingement that sidelines wheelchair users",
      "Elevates energy levels, posture, metabolic health, and mental sharpness"
    ]
  },
  {
    id: "workshops-camps",
    title: "6. Workshops, Camps & NGO Programs",
    tagline: "High-impact peer group camps, institutional training, and corporate workshops.",
    level: "All Levels",
    duration: "1 - 3 Day Immersions",
    format: "Workshop & Camp",
    iconName: "Users",
    idealFor: "NGOs, rehabilitation hospitals, disability advocacy groups, and sports foundations.",
    whatYouLearn: [
      "Intensive multi-day wheelchair mobility bootcamps for groups of 10-30 participants",
      "Interactive peer-led demonstrations: curbs, ramps, sports, and transfers",
      "Sensitization and skill training for physical therapists and rehab professionals",
      "Adaptive sports introductory clinics (racing, swimming, functional fitness)",
      "Community building, mentorship circles, and real-world urban navigation outings"
    ],
    whoItIsFor: [
      "Rehabilitation hospitals (AIIMS, private rehab clinics, spinal injury centers)",
      "Non-governmental organizations (NGOs) working in disability empowerment",
      "Corporates, CSR programs, and institutions fostering inclusive environments"
    ],
    howItHelps: [
      "Delivers rapid group-level transformation through peer energy and shared triumphs",
      "Equips clinical staff with practical everyday insights beyond textbook theory",
      "Creates lasting local peer networks where wheelchair users support one another"
    ]
  }
];

export const REAL_PROGRESS_STORIES = [
  {
    id: "story-1",
    name: "Arun K.",
    location: "New Delhi",
    skillLearned: "Curb Climbing & Independent Street Crossings",
    quote: "Before training with Imran Bhai, a single 4-inch sidewalk curb felt like an insurmountable wall. I used to stay home unless someone came along to lift me. Today, I do 2-wheel balance and curb jumps without hesitation.",
    verifiedDetail: "Mastered curbs in 5 sessions; now commutes to office independently."
  },
  {
    id: "story-2",
    name: "Pooja S.",
    location: "Lucknow, UP",
    skillLearned: "Car Transfers & Independent Commute",
    quote: "My biggest struggle was getting into our family car without two relatives lifting me. Imran showed me the exact head-to-hip balance technique. Now I transfer myself in under 30 seconds and load my own lightweight frame.",
    verifiedDetail: "No caregiver lifting required; travels independently for college."
  },
  {
    id: "story-3",
    name: "Vikram R.",
    location: "Mumbai, Maharashtra",
    skillLearned: "Metro Transit & Indian Railway Travel",
    quote: "Traveling in Indian trains seemed terrifying. Imran guided me through the actual realities — how to cross the platform gap, handle coolies respectfully, and position the chair inside sleeper/3A compartments. It changed everything.",
    verifiedDetail: "Completed solo train journey from Mumbai to Lucknow."
  }
];

export const TRAVEL_GUIDE_CARDS: TravelCard[] = [
  {
    id: "railway-travel",
    title: "Indian Railways Wheelchair Travel",
    hindiTitle: "भारतीय रेल में व्हीलचेयर यात्रा",
    category: "RAILWAY",
    summary: "Real-world strategies for boarding, berth transfers, and platform navigation on Indian Railways.",
    keyInsights: [
      "Always book the Divyangjan-designated quota in 3AC / SL or Executive Class near wide accessible doors.",
      "Most older express trains have a 4 to 8-inch step at coach entrances; carry a compact transfer board or request station Sahayak assistance early.",
      "Vande Bharat and Tejas Express trains offer wider sliding doors and level platform alignments in major junctions."
    ],
    practicalTips: [
      "Arrive at least 45 minutes prior to departure; locate the coach position on the platform beforehand.",
      "Keep a portable urinal bag or plan fluid intake carefully for overnight journeys if accessible toilets are obstructed.",
      "Fold your manual wheelchair and secure it between lower berth luggage spaces or near the vestibule corridor."
    ],
    verifiedNote: "Tested across North and West Indian railway routes by Imran."
  },
  {
    id: "metro-travel",
    title: "Metro Transit Systems (Delhi, Mumbai, etc.)",
    hindiTitle: "मेट्रो स्टेशन एवं ट्रेन नेविगेशन",
    category: "METRO",
    summary: "How to navigate tactile walkways, wide fare gates, lift availability, and train platform gaps.",
    keyInsights: [
      "Modern Indian metros (DMRC, Mumbai Metro, Namma Metro) are among the most accessible public transit modes in India.",
      "Every station has at least one dedicated wide AFC gate marked with the international accessibility symbol.",
      "Platform-to-train gap is typically 2-3 inches; roll front casters slightly raised (mini-wheelie) to avoid wheel entrapment."
    ],
    practicalTips: [
      "Check metro app elevator status before descending or ask station control via helpline.",
      "Use the dedicated wheelchair space in the first or last coach where grab rails and seatbelts are installed.",
      "If traveling during rush hours, station staff are required to escort and assist boarders if requested."
    ],
    verifiedNote: "Reliable daily option for urban mobility and commuting."
  },
  {
    id: "air-travel",
    title: "Airports & Domestic Flight Guidelines",
    hindiTitle: "विमान यात्रा एवं हवाई अड्डा प्रक्रिया",
    category: "AIR",
    summary: "Mastering the aisle chair, ambulift boarding, and safeguarding your personal manual wheelchair.",
    keyInsights: [
      "Select 'WCHS' (Wheelchair for Steps) or 'WCHC' (Wheelchair for Cabin / Immobile) when booking your ticket.",
      "You have the right to use your own personal wheelchair up to the aircraft boarding gate / aircraft door.",
      "Do not surrender your wheelchair at the standard check-in counter unless provided an escort and gate-delivery tag (DAA tag)."
    ],
    practicalTips: [
      "Remove quick-release wheels, side guards, and custom cushions; carry the cushion into the aircraft cabin to prevent pressure sores.",
      "Affix a prominent laminated label on your frame: 'FRAGILE MEDICAL EQUIPMENT - DO NOT LAY FLAT'.",
      "Request early boarding so cabin transfers using the narrow aisle chair can occur with privacy."
    ],
    verifiedNote: "Complies with DGCA CAR guidelines for passengers with reduced mobility."
  },
  {
    id: "accessible-stays",
    title: "Hotels, Ramps & Accessible Places",
    hindiTitle: "होटल, रैंप एवं सुगम स्थान",
    category: "HOTELS",
    summary: "How to verify accessible premises before booking and evaluate gradient slopes safely.",
    keyInsights: [
      "A venue claiming 'wheelchair accessible' often just means they have a ground floor with 2 unexpected entry steps.",
      "Always call the hotel manager and request a WhatsApp photo of the bathroom entrance door width and the shower threshold.",
      "Many ramps in India exceed standard 1:12 slope gradients; learn the controlled forward-lean push and backward descent technique."
    ],
    practicalTips: [
      "Standard bathroom doors need at least 30 inches clearance; measure your chair's overall axle width.",
      "When tackling excessively steep ramps, always lean chest toward knees to keep center of gravity over drive wheels.",
      "Carry a set of spare caster bearings and an allen wrench kit in your travel bag."
    ],
    verifiedNote: "Practical, proactive verification saves hours of frustration."
  }
];

export const YOUTUBE_VIDEOS = [
  {
    id: "video-1",
    title: "Wheelchair Curb Climbing Masterclass | Real Indian Streets",
    category: "WHEELCHAIR SKILLS",
    duration: "8:42",
    description: "Imran demonstrates the step-by-step technique to ascend and descend 4-inch to 8-inch street curbs safely without assistance.",
    youtubeUrl: "https://www.youtube.com/@imranSkills",
    thumbnail: "/images/imran/imran-hyrox-action.jpg"
  },
  {
    id: "video-2",
    title: "HYROX Delhi Experience | Adaptive Men Seated Champion",
    category: "ADAPTIVE SPORTS",
    duration: "12:15",
    description: "Inside look at the 01:40:42 finish at HYROX Delhi. Training regimen, workout stations, pacing, and mindset.",
    youtubeUrl: "https://www.youtube.com/@imranSkills",
    thumbnail: "/images/imran/imran-hyrox-champion.jpg"
  },
  {
    id: "video-3",
    title: "Independent Car Transfer & Wheelchair Loading Technique",
    category: "MOBILITY",
    duration: "6:30",
    description: "Watch how Imran transfers into a car seat in under 20 seconds, dismantles his manual wheelchair, and loads it onto the passenger side.",
    youtubeUrl: "https://www.youtube.com/@imranSkills",
    thumbnail: "/images/imran/imran-portrait.jpg"
  },
  {
    id: "video-4",
    title: "Upper-Body & Shoulder Longevity Workout for Wheelchair Users",
    category: "FITNESS",
    duration: "10:50",
    description: "Crucial exercises to build rotator cuff resilience, lat strength, and prevent shoulder impingement from daily pushing.",
    youtubeUrl: "https://www.youtube.com/@imranSkills",
    thumbnail: "/images/imran/imran-hyrox-community.jpg"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Who is Mohammad Imran (Imran Skills)?",
    answer: "Mohammad Imran is a renowned Wheelchair Lifestyle Instructor, Wheelchair Skills Coach, Adaptive Athlete, and Disability Community Mentor from Sultanpur (Uttar Pradesh) and Mumbai. He is the champion of HYROX Delhi Adaptive Men (Seated Without Hip Function, 01:40:42), a state swimming gold medalist, and an advocate for independent living through practical skills.",
    category: "Background"
  },
  {
    question: "What is wheelchair skills training, and how is it different from medical rehabilitation?",
    answer: "Medical rehabilitation focuses on clinical recovery, physiotherapy, and physical healing in hospital settings. Wheelchair skills training is practical lifestyle coaching: learning how to handle your wheelchair in the real world — balancing on two wheels, climbing sidewalk curbs, navigating steep ramps, transferring into cars and trains, and traveling independently. It is not medical treatment; it is practical empowerment for daily living.",
    category: "Training"
  },
  {
    question: "Who can join Imran's wheelchair training programs?",
    answer: "Anyone who uses a manual wheelchair! This includes individuals with spinal cord injuries (paraplegia/quadriplegia), polio, amputations, neurological conditions, newly injured persons looking to rebuild their lifestyle, active athletes wanting to enhance their speed and agility, and families wanting to understand proper transfer and mobility techniques.",
    category: "Training"
  },
  {
    question: "Does Imran provide 1-on-1 personal training sessions?",
    answer: "Yes. Imran conducts personalized 1:1 training sessions in-person (primarily in Uttar Pradesh, Delhi NCR, and Mumbai regions) as well as virtual video-guided mobility consultations for individuals across India and abroad.",
    category: "Coaching"
  },
  {
    question: "How can I book a wheelchair training session or consultation?",
    answer: "Booking is extremely simple and direct. You can fill out the quick booking form on this website or message directly on WhatsApp at +91 7800222101. Imran and his team will discuss your current mobility level, goals, and schedule a customized training plan.",
    category: "Coaching"
  },
  {
    question: "How can NGOs, rehabilitation hospitals, or institutions collaborate with Imran?",
    answer: "Imran frequently conducts multi-day wheelchair skills bootcamps, adaptive fitness workshops, and peer mentorship camps for non-profits, spinal injury rehab centers, universities, and corporate CSR initiatives. Contact via email at imranmsup@gmail.com or WhatsApp at +91 7800222101 to plan a workshop.",
    category: "Institutions"
  },
  {
    question: "What was Imran's achievement at HYROX Delhi?",
    answer: "At HYROX Delhi, Imran competed in the grueling 'HYROX Adaptive Men - Seated Without Hip Function' division, finishing first as the champion with an official time of 01:40:42 (Bib #85001), setting a benchmark for adaptive athletic excellence in India.",
    category: "Background"
  },
  {
    question: "Does Imran teach safe transfers (car, bed, toilet)?",
    answer: "Yes, transfer training is one of the most transformative skills. Imran teaches ergonomic transfer mechanics using head-hips leverage so that wheelchair users can move between bed, commode, chair, and car seats without needing to be lifted by family members.",
    category: "Training"
  }
];
