import React from 'react';

const StarField = () => (
  <svg
    className="bg-svg star-field"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Cassiopeia (Top Left - 'W' Shape) */}
    <g transform="translate(20, 20) scale(0.7)">
      <circle cx="10" cy="10" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="25" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="40" cy="15" r="1.2" fill="currentColor" opacity="0.8" className="twinkle-1" />
      <circle cx="55" cy="25" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="70" cy="10" r="1.2" fill="currentColor" opacity="0.8" />
      
      <path d="M10 10 L25 25 L40 15 L55 25 L70 10" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Orion Constellation (Bottom Left) */}
    <g transform="translate(40, 200) scale(0.8)">
      {/* Belt */}
      <circle cx="40" cy="50" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="50" cy="48" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="60" cy="46" r="1.2" fill="currentColor" opacity="0.8" />
      {/* Betelgeuse (Top Left - Reddish usually, but keeping currentColor) */}
      <circle cx="30" cy="20" r="1.8" fill="currentColor" opacity="0.9" className="twinkle-1" />
      {/* Rigel (Bottom Right) */}
      <circle cx="70" cy="80" r="1.8" fill="currentColor" opacity="0.9" />
      {/* Bellatrix (Top Right) */}
      <circle cx="65" cy="25" r="1.5" fill="currentColor" opacity="0.7" />
      {/* Saiph (Bottom Left) */}
      <circle cx="35" cy="75" r="1.5" fill="currentColor" opacity="0.7" />
      
      {/* Subtle Lines */}
      <path d="M30 20 L40 50 L35 75 M40 50 L50 48 L60 46 M60 46 L65 25 M60 46 L70 80" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Taurus (Center/Top) */}
    <g transform="translate(160, 100) scale(0.7)">
      {/* Aldebaran */}
      <circle cx="20" cy="50" r="1.8" fill="currentColor" opacity="0.9" className="twinkle-2" />
      {/* V-shape stars */}
      <circle cx="35" cy="60" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="45" cy="55" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="40" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="10" cy="30" r="1.2" fill="currentColor" opacity="0.7" /> {/* Horn tip */}
      <circle cx="60" cy="20" r="1.2" fill="currentColor" opacity="0.7" /> {/* Horn tip */}

      {/* Subtle Lines */}
      <path d="M10 30 L20 50 L35 60 L45 55 L50 40 L60 20" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Pleiades (Top Right - Cluster) */}
    <g transform="translate(280, 60) scale(0.6)">
      <circle cx="10" cy="10" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="12" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="15" r="1.2" fill="currentColor" opacity="0.8" className="twinkle-3" />
      <circle cx="18" cy="8" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="25" cy="20" r="0.8" fill="currentColor" opacity="0.6" />
    </g>

    {/* Ursa Major / Big Dipper (Bottom Right) */}
    <g transform="translate(250, 280) scale(0.8)">
      <circle cx="10" cy="10" r="1.2" fill="currentColor" opacity="0.8" /> {/* Dubhe */}
      <circle cx="15" cy="40" r="1.2" fill="currentColor" opacity="0.8" /> {/* Merak */}
      <circle cx="45" cy="35" r="1.2" fill="currentColor" opacity="0.8" /> {/* Phecda */}
      <circle cx="40" cy="10" r="1.2" fill="currentColor" opacity="0.8" /> {/* Megrez */}
      <circle cx="65" cy="12" r="1.2" fill="currentColor" opacity="0.8" /> {/* Alioth */}
      <circle cx="85" cy="18" r="1.2" fill="currentColor" opacity="0.8" /> {/* Mizar */}
      <circle cx="105" cy="35" r="1.2" fill="currentColor" opacity="0.8" className="twinkle-2" /> {/* Alkaid */}
      
      <path d="M10 10 L15 40 L45 35 L40 10 L10 10 M40 10 L65 12 L85 18 L105 35" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Random Background Stars for texture */}
    <circle cx="300" cy="300" r="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="350" cy="250" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="200" cy="350" r="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="100" cy="30" r="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="380" cy="380" r="1" fill="currentColor" opacity="0.3" />
  </svg>
);

export default StarField;
