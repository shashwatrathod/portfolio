import React from "react";
import TechChip from "../TechChip/techChip";
import "./projectCard.scss";

const ProjectCard = ({
  thumbnailSrc,
  title,
  technologies,
  links,
  description,
}) => {
  return (
    <>
      <div className="project">
        <img src={thumbnailSrc} alt={title} className="project-thumbnail" />
        <div className="project-info-container">
          <div className="project-info-header">
            <div className="project-title">{title}</div>
            <div className="project-tech-chips-container">
              {technologies.map((tech, index) => (
                <TechChip
                  key={index}
                  img={tech?.icon || undefined}
                  title={tech.title}
                />
              ))}
            </div>
            <div className="project-links-container">
              {links.map((linkObj, index) => (
                <a
                  href={linkObj.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {linkObj.icon}
                </a>
              ))}
            </div>
          </div>
          <hr />

          <div className="project-description">{description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
