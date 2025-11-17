"use client";

import React, { useState } from "react";

const TechnologyCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className="tech-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Technology: ${skill.title}`}
      style={{
        "--tech-color": skill.color || "#3B9E7E",
      }}
    >
      <div className={`tech-card ${isHovered ? "hovered" : ""}`}>
        <div className="tech-card-inner">
          <div className="tech-icon-container">
            <img src={skill.src} alt={skill.title} className="tech-icon" />
          </div>
          <span className="tech-name">{skill.title}</span>
        </div>

        {/* Glow effect on hover */}
        <div className="tech-card-glow" aria-hidden="true"></div>
      </div>
    </div>
  );
};

export default TechnologyCard;
