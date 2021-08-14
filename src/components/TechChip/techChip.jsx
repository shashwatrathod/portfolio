import React from "react";
import "./techChip.scss";

const TechChip = (props) => {
  return (
    <>
      <div className="tech-chip">
        {props.img && (
          <img
            src={props.img}
            alt={props.title}
            className="tech-chip-img"
            loading="lazy"
          />
        )}
        <span className="tech-chip-text">{props.title}</span>
      </div>
    </>
  );
};

export default TechChip;
