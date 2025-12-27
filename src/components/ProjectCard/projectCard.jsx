import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiSmartphone } from "react-icons/fi";
import "./projectCard.scss";

const getLinkLabel = (label) => {
  if (label.toLowerCase().includes("github")) return "GitHub";
  if (label.toLowerCase().includes("play store")) return "Play Store";
  return "Live Demo";
};

const getLinkIcon = (label) => {
  if (label.toLowerCase().includes("github")) return <FiGithub />;
  if (label.toLowerCase().includes("play store")) return <FiSmartphone />;
  return <FiExternalLink />;
};

const ProjectCard = ({
  thumbnailSrc,
  title,
  technologies,
  links,
  description,
  mousePosition,
}) => {
  const cardRef = useRef(null);
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x =
      mousePosition.x -
      (rect.left -
        document.getElementById("projects").getBoundingClientRect().left);
    const y =
      mousePosition.y -
      (rect.top -
        document.getElementById("projects").getBoundingClientRect().top);

    setLocalCoords({ x, y });

    // Calculate opacity based on distance to cursor (optional, for smoother fade)
    // For now, we'll just set opacity to 1 when hovering the section,
    // but we can refine this to be distance-based if needed.
    setOpacity(1);
  }, [mousePosition]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      className="project-card"
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      {/* Spotlight Border Effect */}
      <div
        className="project-card-spotlight"
        style={{
          background: `radial-gradient(
            800px circle at ${localCoords.x}px ${localCoords.y}px,
            rgba(125, 211, 252, 0.15),
            transparent 40%
          )`,
          opacity: opacity,
        }}
      />

      <div className="project-card-inner">
        <div className="project-card-image-container">
          <img
            src={thumbnailSrc}
            alt={title}
            className="project-card-image"
            loading="lazy"
          />
          <div className="project-card-overlay" />
        </div>

        <div className="project-card-content">
          <div className="project-card-header">
            <h3 className="project-card-title">{title}</h3>
          </div>

          <p className="project-card-description">{description}</p>

          <div className="project-card-footer">
            <div className="project-card-tech">
              {technologies.map((tech, index) => (
                <span key={index} className="project-card-tech-item">
                  {tech.title}
                </span>
              ))}
            </div>

            <div className="project-card-links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                  aria-label={`Visit ${link.label}`}
                >
                  {getLinkIcon(link.label)}
                  <span className="project-card-link-text">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
