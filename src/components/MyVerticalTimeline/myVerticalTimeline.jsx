import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./myVerticalTimeline.scss";

const MyVerticalTimeline = ({ job }) => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#f4f4f4",
            borderRadius: "20px",
            paddingBlock: "20px",
          }}
          contentArrowStyle={{
            borderRight: "10px solid  #f4f4f4",
            color: "#f4f4f4",
            // top: "50%",
            // transform: "translateY(-50%)",
          }}
          date={job.date}
          iconStyle={{
            ...job.iconStyle,
            // top: "50%",
            // transform: "translatey(-50%)",
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
                <div className="vertical-timeline-tech" key={index}>
                  {tech}
                </div>
              ))}
            </div>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default MyVerticalTimeline;
