import React from "react";
import "./workSection.scss";
import MyVerticalTimeline from "../../../components/MyVerticalTimeline/myVerticalTimeline";
import jobs from "../../../assets/data/jobs";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkSection = () => {
  return (
    <section id="experience">
      <div className="work-container">
        <div className="work-title-container">
          <div className="work-title">Work Experience</div>
        </div>
        <div className="work-timeline-container">
          <VerticalTimeline layout="1-column-left" animate={false}>
            {jobs.map((job, index) => (
              <MyVerticalTimeline key={index} job={job} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
