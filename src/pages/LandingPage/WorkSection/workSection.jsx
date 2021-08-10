import React from "react";
import "./workSection.scss";
import MyVerticalTimeline from "../../../components/MyVerticalTimeline/myVerticalTimeline";
import jobs from "../../../assets/data/jobs";

const WorkSection = () => {
  return (
    <section id="experience">
      <div className="work-container">
        <div className="work-title-container">
          <div className="work-title">Work Experience</div>
        </div>
        <div className="work-timeline-container">
          {jobs.map((job, index) => (
            <MyVerticalTimeline key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
