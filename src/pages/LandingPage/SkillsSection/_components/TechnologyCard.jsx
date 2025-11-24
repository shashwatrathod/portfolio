"use client";

import React from "react";
import { motion } from "framer-motion";
import "./technologyCard.scss";

const TechnologyCard = ({ skill, index, isRelated, onHover, onLeave }) => {
  if (!skill || !skill.src) {
    return null;
  }

  return (
    <motion.div
      className={`tech-card ${isRelated ? "tech-card--related" : ""}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => onHover && onHover(skill.title)}
      onMouseLeave={() => onLeave && onLeave()}
    >
      <div className="tech-card__inner">
        <div className="tech-card__icon-wrapper">
          <img
            src={skill.src}
            alt={skill.title}
            className="tech-card__icon"
            loading="lazy"
          />
        </div>
        <div className="tech-card__info">
          <h3 className="tech-card__title">{skill.title}</h3>
          <span className="tech-card__category">{skill.category}</span>
        </div>
      </div>
      <div className="tech-card__glow" aria-hidden="true"></div>
    </motion.div>
  );
};

export default TechnologyCard;

