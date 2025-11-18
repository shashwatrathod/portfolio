import React from 'react';

export const CoffeeCupSVG = () => (
  <svg
    className="bg-svg coffee-cup"
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 30 L20 80 Q20 90 30 90 L60 90 Q70 90 70 80 L70 30 L75 25 L75 20 Q75 15 70 15 L25 15 Q20 15 20 20 L20 25 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M70 30 L80 30 Q85 30 85 35 L85 50 Q85 55 80 55 L70 55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M30 50 L50 50"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const GuitarSVG = () => (
  <svg
    className="bg-svg guitar"
    viewBox="0 0 120 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 20 Q50 30 45 50 L45 150 Q45 170 55 180 L65 180 Q75 170 75 150 L75 50 Q75 30 65 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="55" cy="80" r="3" fill="currentColor" />
    <circle cx="65" cy="80" r="3" fill="currentColor" />
    <circle cx="55" cy="100" r="3" fill="currentColor" />
    <circle cx="65" cy="100" r="3" fill="currentColor" />
    <path
      d="M60 20 L60 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M50 160 L70 160"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const GameControllerSVG = () => (
  <svg
    className="bg-svg game-controller"
    viewBox="0 0 120 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="30"
      width="80"
      height="40"
      rx="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="40" cy="50" r="4" fill="currentColor" />
    <circle cx="60" cy="50" r="4" fill="currentColor" />
    <circle cx="80" cy="50" r="4" fill="currentColor" />
    <path
      d="M30 40 L30 60 M50 40 L50 60"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M90 45 L100 45"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CodeBracketsSVG = () => (
  <svg
    className="bg-svg code-brackets"
    viewBox="0 0 60 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 10 L5 20 L15 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M45 10 L55 20 L45 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MusicNoteSVG = () => (
  <svg
    className="bg-svg music-note"
    viewBox="0 0 60 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 60 Q20 50 28 50 L28 15 L40 10 L40 45 Q40 55 32 55 Q25 55 22.5 57.5 Q20 60 20 60 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="24"
      cy="57"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const TelescopeSVG = () => (
  <svg
    className="bg-svg telescope"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 80 L35 65 L70 30 L75 25 L80 30 L75 35 L40 70 L25 85 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="77.5"
      cy="27.5"
      r="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M20 80 L25 75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 80 L15 85"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PlanetSVG = () => (
  <svg
    className="bg-svg planet"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="40"
      cy="40"
      r="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="40"
      cy="40"
      rx="28"
      ry="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.6"
    />
    <circle cx="44" cy="42" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

export const GuitarStringsSVG = () => (
  <svg
    className="bg-svg guitar-strings"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Guitar Body Silhouette */}
    <path
      d="M-50 40 C-20 40, 20 60, 40 90 C50 105, 50 135, 40 150 C20 180, -20 200, -50 200 M-50 -40 C-20 -40, 20 -60, 40 -90 C50 -105, 50 -135, 40 -150 C20 -180, -20 -200, -50 -200"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.5"
      transform="translate(50, 100)"
    />
    
    {/* Sound Hole */}
    <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    {/* Strings */}
    <g transform="translate(0, 100)">
      <line x1="-50" y1="-25" x2="250" y2="-25" stroke="currentColor" strokeWidth="1.5" opacity="0.27" />
      <line x1="-50" y1="-15" x2="250" y2="-15" stroke="currentColor" strokeWidth="1.3" opacity="0.25" />
      <line x1="-50" y1="-5" x2="250" y2="-5" stroke="currentColor" strokeWidth="1.1" opacity="0.23" />
      <line x1="-50" y1="5" x2="250" y2="5" stroke="currentColor" strokeWidth="0.9" opacity="0.21" />
      <line x1="-50" y1="15" x2="250" y2="15" stroke="currentColor" strokeWidth="0.7" opacity="0.19" />
      <line x1="-50" y1="25" x2="250" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.17" />
    </g>
  </svg>
);


