import React from "react";
import "./experienceCard.scss";
import { motion } from "framer-motion";

const ExperienceCard = ({ job, index }) => {
  if (!job || !job.iconStyle) {
    return null;
  }

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`experience-card-wrapper ${
        isLeft ? "aligned-left" : "aligned-right"
      }`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Node (Dot) */}
      <div className="timeline-node">
        <div className="node-inner" style={job.iconStyle}>
          {job.icon}
        </div>
      </div>

      {/* Date (Desktop: Left side, Mobile: Inside card) */}
      <div className="experience-date desktop-only">{job.date}</div>

      {/* Main Card */}
      <div className={`experience-card ${isLeft ? "aligned-left" : ""}`}>
        <div className="card-content">
          <div className="card-header">
            <h3 className="job-title">{job.jobTitle}</h3>
            <h4 className="company-name">{job.jobSubtitle}</h4>
            <div className="job-meta">
              <span>{job.location}</span>
              <span className="meta-dot">•</span>
              <span>{job.type}</span>
            </div>
          </div>

          <div className="card-body">
            <ul className="job-description-list">
              {job.description.map((point, i) => (
                <li key={i}>
                  {point.split(/(\*\*.*?\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="highlight-text">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-footer">
            <div className="tech-stack">
              {job.technologies.map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
