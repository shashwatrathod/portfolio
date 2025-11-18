"use client";

import React, { useState, useRef, useEffect } from "react";
import skills from "../../../assets/data/skills";
import TechnologyCard from "./TechnologyCard";
import "./skillsSection.scss";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [connections, setConnections] = useState([]);
  const containerRef = useRef(null);
  const cardRefs = useRef({});

  // Group skills by category for better visual organization
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryOrder = [
    "Language",
    "Frontend",
    "Backend",
    "Database",
    "Game Engine",
  ];

  // Calculate connections between related skills
  useEffect(() => {
    if (!hoveredSkill || !containerRef.current) {
      setConnections([]);
      return;
    }

    const hoveredCard = cardRefs.current[hoveredSkill];
    if (!hoveredCard) return;

    const hoveredRect = hoveredCard.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const hoveredSkillData = skills.find((s) => s.title === hoveredSkill);
    if (!hoveredSkillData) return;

    const newConnections = hoveredSkillData.related
      .map((relatedTitle) => {
        const relatedCard = cardRefs.current[relatedTitle];
        if (!relatedCard) return null;

        const relatedRect = relatedCard.getBoundingClientRect();

        return {
          from: {
            x: hoveredRect.left + hoveredRect.width / 2 - containerRect.left,
            y: hoveredRect.top + hoveredRect.height / 2 - containerRect.top,
          },
          to: {
            x: relatedRect.left + relatedRect.width / 2 - containerRect.left,
            y: relatedRect.top + relatedRect.height / 2 - containerRect.top,
          },
          title: relatedTitle,
        };
      })
      .filter(Boolean);

    setConnections(newConnections);
  }, [hoveredSkill]);

  const handleCardHover = (skillTitle) => {
    setHoveredSkill(skillTitle);
  };

  const handleCardLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container-max">
        <div className="skills-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="skills-title">Tech Stack</h2>
            <p className="skills-subtitle">
              Technologies I work with to build scalable solutions
            </p>
          </motion.div>
        </div>

        <div className="skills-content" ref={containerRef}>
          {/* SVG for drawing connection lines */}
          <svg className="skills-connections" aria-hidden="true">
            {connections.map((connection, index) => {
              // Calculate control point for quadratic curve (offset from midpoint)
              const midX = (connection.from.x + connection.to.x) / 2;
              const midY = (connection.from.y + connection.to.y) / 2;
              const offsetX = (connection.to.y - connection.from.y) * 0.15;
              const offsetY = (connection.from.x - connection.to.x) * 0.15;
              const controlX = midX + offsetX;
              const controlY = midY + offsetY;

              const pathData = `M ${connection.from.x} ${connection.from.y} Q ${controlX} ${controlY} ${connection.to.x} ${connection.to.y}`;

              return (
                <g key={`${connection.from.x}-${connection.to.x}-${index}`}>
                  {/* Outer glow layer for silky effect */}
                  <motion.path
                    d={pathData}
                    stroke="rgba(226, 232, 240, 0.15)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                  {/* Main thread */}
                  <motion.path
                    d={pathData}
                    stroke="rgba(226, 232, 240, 0.6)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Render skills grouped by category */}
          <div className="skills-grid">
            {categoryOrder.map((category) => {
              const categorySkills = groupedSkills[category] || [];
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="skills-category">
                  <h3 className="category-label">{category}</h3>
                  <div className="category-grid">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.title}
                        ref={(el) => (cardRefs.current[skill.title] = el)}
                      >
                        <TechnologyCard
                          skill={skill}
                          index={index}
                          isRelated={
                            hoveredSkill &&
                            hoveredSkill !== skill.title &&
                            skills
                              .find((s) => s.title === hoveredSkill)
                              ?.related.includes(skill.title)
                          }
                          onHover={handleCardHover}
                          onLeave={handleCardLeave}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
