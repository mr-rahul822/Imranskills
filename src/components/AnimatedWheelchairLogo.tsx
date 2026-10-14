'use client';

import React from 'react';

interface AnimatedWheelchairLogoProps {
  className?: string;
  size?: number;
  isDark?: boolean;
}

export default function AnimatedWheelchairLogo({
  className = '',
  size = 38,
  isDark = false
}: AnimatedWheelchairLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="wheelchair-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7043" />
            <stop offset="100%" stopColor="#E64A19" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#E64A19" floodOpacity="0.35" />
          </filter>
        </defs>

        <style>{`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes forwardGlide {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-1px) rotate(-1.5deg); }
          }
          @keyframes spokeGlow {
            0%, 100% { opacity: 0.85; }
            50% { opacity: 1; stroke: #FF7043; }
          }
          .spin-wheel {
            transform-origin: 45px 62px;
            animation: spinSlow 10s linear infinite;
          }
          .group:hover .spin-wheel {
            animation: spinSlow 2s linear infinite;
          }
          .spin-caster {
            transform-origin: 75px 75px;
            animation: spinSlow 4s linear infinite;
          }
          .group:hover .spin-caster {
            animation: spinSlow 1s linear infinite;
          }
          .athlete-frame {
            transform-origin: 45px 62px;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .group:hover .athlete-frame {
            transform: rotate(-3deg) translateX(-1px);
          }
        `}</style>

        {/* Dynamic Forward Momentum Motion Trails (Subtle) */}
        <path
          d="M 12 60 Q 20 62 28 62"
          stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(230,74,25,0.2)"}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-opacity duration-300 opacity-40 group-hover:opacity-100"
        />
        <path
          d="M 16 68 Q 24 70 30 70"
          stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(230,74,25,0.18)"}
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-opacity duration-300 opacity-30 group-hover:opacity-100"
        />

        {/* Main Drive Wheel (Outer Rim + Pushrim) */}
        <g className="spin-wheel">
          {/* Outer Tire */}
          <circle
            cx="45"
            cy="62"
            r="24"
            stroke={isDark ? "#E4E4E7" : "#18181B"}
            strokeWidth="3.5"
            fill="none"
          />

          {/* Inner Pushrim (High Performance Orange Accent) */}
          <circle
            cx="45"
            cy="62"
            r="19"
            stroke="url(#wheelchair-accent)"
            strokeWidth="2"
            strokeDasharray="18 6 12 4"
            fill="none"
          />

          {/* Wheel Spokes (Dynamic Aerodynamic Angles) */}
          <line x1="45" y1="38" x2="45" y2="86" stroke={isDark ? "rgba(255,255,255,0.3)" : "rgba(24,24,27,0.3)"} strokeWidth="1.5" />
          <line x1="21" y1="62" x2="69" y2="62" stroke={isDark ? "rgba(255,255,255,0.3)" : "rgba(24,24,27,0.3)"} strokeWidth="1.5" />
          <line x1="28" y1="45" x2="62" y2="79" stroke={isDark ? "rgba(255,255,255,0.3)" : "rgba(24,24,27,0.3)"} strokeWidth="1.5" />
          <line x1="28" y1="79" x2="62" y2="45" stroke={isDark ? "rgba(255,255,255,0.3)" : "rgba(24,24,27,0.3)"} strokeWidth="1.5" />

          {/* Axle Center Hub with Orange Core */}
          <circle cx="45" cy="62" r="4.5" fill={isDark ? "#27272A" : "#FFFFFF"} stroke={isDark ? "#FFFFFF" : "#18181B"} strokeWidth="2" />
          <circle cx="45" cy="62" r="2" fill="#E64A19" />
        </g>

        {/* Front Caster Wheel & Fork */}
        <g>
          {/* Caster Fork */}
          <path
            d="M 68 62 L 75 75"
            stroke={isDark ? "#A1A1AA" : "#52525B"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Front Caster Wheel (Spinning) */}
          <g className="spin-caster">
            <circle
              cx="75"
              cy="75"
              r="7"
              stroke={isDark ? "#E4E4E7" : "#18181B"}
              strokeWidth="2.5"
              fill={isDark ? "#18181B" : "#FFFFFF"}
            />
            <circle cx="75" cy="75" r="2.5" fill="#E64A19" />
            <line x1="75" y1="68" x2="75" y2="82" stroke={isDark ? "#A1A1AA" : "#71717A"} strokeWidth="1" />
            <line x1="68" y1="75" x2="82" y2="75" stroke={isDark ? "#A1A1AA" : "#71717A"} strokeWidth="1" />
          </g>
        </g>

        {/* Active Athlete Silhouette & Sports Chair Geometry */}
        <g className="athlete-frame">
          {/* Rigid Frame Tubular Chassis */}
          <path
            d="M 45 62 L 56 62 L 68 62 L 72 68"
            stroke={isDark ? "#E4E4E7" : "#18181B"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Footplate Guard */}
          <path
            d="M 72 68 L 78 68"
            stroke="url(#wheelchair-accent)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Ergonomic Backrest & Camber Arch */}
          <path
            d="M 37 40 L 46 54 L 58 54"
            stroke={isDark ? "#E4E4E7" : "#18181B"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Athlete Torso (Forward Driving Angle of Power) */}
          <path
            d="M 46 54 L 56 36 L 68 45"
            stroke="url(#wheelchair-accent)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Athlete Pushing Arm Driving the Pushrim */}
          <path
            d="M 56 36 L 62 48 L 52 54"
            stroke={isDark ? "#F4F4F5" : "#18181B"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Athlete Head / Helmet (Forward Focus) */}
          <circle
            cx="60"
            cy="24"
            r="6"
            fill="url(#wheelchair-accent)"
            filter="url(#logo-glow)"
          />
        </g>
      </svg>
    </div>
  );
}
