import React from "react";
import "./workSection.scss";
import MyVerticalTimeline from "../../../components/MyVerticalTimeline/myVerticalTimeline";
import jobs from "../../../assets/data/jobs";

const WorkSection = () => {
  return (
    <section id="experience">
      <div className="work-container">
        <div className="work-title-container">
          <span className="work-title">Experience</span>
        </div>
        <div className="work-timeline-container">
          {jobs.map((job, index) => (
            <MyVerticalTimeline key={index} job={job} />
          ))}
          {/* <MyVerticalTimeline /> */}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
