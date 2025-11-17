import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TechChip from "../TechChip/techChip";
import "./myVerticalTimeline.scss";

const MyVerticalTimeline = ({ job }) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "var(--surface-color)",
          borderRadius: "20px",
          paddingBlock: "20px",
        }}
        contentArrowStyle={{
          borderRight: "10px solid var(--surface-color)",
          color: "var(--surface-color)",
        }}
        date={job.date}
        iconStyle={{
          ...job.iconStyle,
        }}
        icon={job.icon}
      >
        <h1 className="vertical-timeline-element-title">{job.jobTitle}</h1>
        <h2 className="vertical-timeline-element-subtitle">
          {job.jobSubtitle}
        </h2>
        <p>
          <span>{job.description}</span>
          <div className="vertical-timeline-tech-container">
            {job.technologies.map((tech, index) => (
              <TechChip title={tech} key={index} />
            ))}
          </div>
        </p>
      </VerticalTimelineElement>
    </>
  );
};

export default MyVerticalTimeline;
