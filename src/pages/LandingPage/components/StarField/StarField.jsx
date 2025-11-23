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

    {/* Ursa Minor / Little Dipper (Top Center-Right) */}
    <g transform="translate(200, 40) scale(0.6)">
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.9" className="twinkle-1" /> {/* Polaris */}
      <circle cx="25" cy="15" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="20" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="55" cy="25" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="65" cy="35" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="80" cy="30" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="70" cy="20" r="1.2" fill="currentColor" opacity="0.8" />
      
      <path d="M10 10 L25 15 L40 20 L55 25 L65 35 L80 30 L70 20 L55 25" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Cygnus / The Swan (Top Left-Center) */}
    <g transform="translate(100, 50) scale(0.7)">
      <circle cx="40" cy="10" r="1.5" fill="currentColor" opacity="0.9" className="twinkle-3" /> {/* Deneb */}
      <circle cx="40" cy="30" r="1.2" fill="currentColor" opacity="0.8" /> {/* Sadr */}
      <circle cx="40" cy="55" r="1.2" fill="currentColor" opacity="0.8" /> {/* Albireo */}
      <circle cx="15" cy="25" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="65" cy="35" r="1.2" fill="currentColor" opacity="0.8" />
      
      <path d="M40 10 L40 55 M15 25 L65 35" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Leo / The Lion (Right Middle) */}
    <g transform="translate(320, 150) scale(0.6)">
      <circle cx="40" cy="10" r="1.5" fill="currentColor" opacity="0.9" className="twinkle-2" /> {/* Regulus-ish position relative to shape */}
      <circle cx="25" cy="15" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="30" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="45" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="40" cy="40" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="60" cy="35" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="75" cy="40" r="1.2" fill="currentColor" opacity="0.8" />
      
      <path d="M40 10 L25 15 L15 30 L20 45 L40 40 L40 10 M40 40 L60 35 L75 40" 
            stroke="currentColor" strokeWidth="0.5" opacity="0.08" fill="none" />
    </g>

    {/* Random Background Stars for texture */}
    <circle cx="300" cy="300" r="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="350" cy="250" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="200" cy="350" r="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="100" cy="30" r="0.8" fill="currentColor" opacity="0.2" />
    <circle cx="380" cy="380" r="1" fill="currentColor" opacity="0.3" />
    
    {/* Additional Random Stars */}
    <circle cx="50" cy="150" r="0.6" fill="currentColor" opacity="0.15" />
    <circle cx="120" cy="280" r="0.9" fill="currentColor" opacity="0.25" />
    <circle cx="280" cy="180" r="0.5" fill="currentColor" opacity="0.2" />
    <circle cx="360" cy="80" r="0.7" fill="currentColor" opacity="0.15" />
    <circle cx="20" cy="320" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="180" cy="120" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="240" cy="220" r="0.9" fill="currentColor" opacity="0.25" />
    <circle cx="90" cy="360" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="330" cy="40" r="0.7" fill="currentColor" opacity="0.2" />
    <circle cx="150" cy="10" r="0.6" fill="currentColor" opacity="0.15" />
    <circle cx="10" cy="180" r="0.8" fill="currentColor" opacity="0.25" />
    <circle cx="390" cy="200" r="0.5" fill="currentColor" opacity="0.2" />
    <circle cx="220" cy="380" r="0.7" fill="currentColor" opacity="0.15" />
    <circle cx="60" cy="90" r="0.9" fill="currentColor" opacity="0.3" />
    <circle cx="310" cy="340" r="0.6" fill="currentColor" opacity="0.2" />
    {/* Even More Random Stars */}
    <circle cx="10" cy="50" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="80" cy="90" r="0.7" fill="currentColor" opacity="0.2" className="twinkle-3" />
    <circle cx="150" cy="200" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="220" cy="300" r="0.6" fill="currentColor" opacity="0.25" />
    <circle cx="300" cy="100" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="380" cy="250" r="0.8" fill="currentColor" opacity="0.3" className="twinkle-1" />
    <circle cx="50" cy="350" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="120" cy="40" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="250" cy="150" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="330" cy="320" r="0.7" fill="currentColor" opacity="0.25" />
    <circle cx="20" cy="220" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="90" cy="10" r="0.6" fill="currentColor" opacity="0.2" className="twinkle-2" />
    <circle cx="180" cy="380" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="270" cy="60" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="360" cy="180" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="40" cy="120" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="130" cy="280" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="210" cy="40" r="0.7" fill="currentColor" opacity="0.25" />
    <circle cx="290" cy="220" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="370" cy="360" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="60" cy="300" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="160" cy="80" r="0.8" fill="currentColor" opacity="0.3" className="twinkle-3" />
    <circle cx="240" cy="260" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="320" cy="140" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="10" cy="380" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="100" cy="200" r="0.7" fill="currentColor" opacity="0.25" />
    <circle cx="190" cy="30" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="280" cy="340" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="350" cy="50" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="30" cy="160" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="110" cy="320" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="200" cy="100" r="0.6" fill="currentColor" opacity="0.2" className="twinkle-1" />
    <circle cx="260" cy="300" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="340" cy="20" r="0.7" fill="currentColor" opacity="0.25" />
    <circle cx="70" cy="240" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="140" cy="60" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="230" cy="360" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="310" cy="180" r="0.8" fill="currentColor" opacity="0.3" />
    <circle cx="390" cy="300" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="50" cy="80" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="170" cy="240" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="250" cy="40" r="0.7" fill="currentColor" opacity="0.25" />
    <circle cx="330" cy="260" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="20" cy="140" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="120" cy="360" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="210" cy="180" r="0.8" fill="currentColor" opacity="0.3" className="twinkle-2" />
    <circle cx="290" cy="380" r="0.4" fill="currentColor" opacity="0.1" />
    <circle cx="370" cy="100" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="80" cy="280" r="0.5" fill="currentColor" opacity="0.15" />
    <circle cx="150" cy="120" r="0.7" fill="currentColor" opacity="0.25" />
  </svg>
);

export default StarField;
