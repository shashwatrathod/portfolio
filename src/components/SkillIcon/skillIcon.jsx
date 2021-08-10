import React from "react";
import ReactTooltip from "react-tooltip";
import "./skillIcon.scss";

const SkillIcon = ({ skill }) => {
  return (
    <>
      <div>
        <img
          src={skill.src}
          alt={skill.title}
          className="skills-icon"
          loading="lazy"
          data-tip
          data-for={`skill-${skill.title}-label`}
        />
        <ReactTooltip
          className="react-custom-tooltip"
          id={`skill-${skill.title}-label`}
          delayShow={200}
        >
          <span>{skill.title}</span>
        </ReactTooltip>
      </div>
    </>
  );
};

export default SkillIcon;
