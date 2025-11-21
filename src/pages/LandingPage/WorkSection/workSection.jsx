import React from "react";
import "./workSection.scss";
import jobs from "../../../assets/data/jobs";
import ExperienceCard from "./components/ExperienceCard";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <section id="experience" className="work-section">
      <div className="container-max">
        <div className="work-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="work-title">Experience</h2>
            <p className="work-subtitle">
              My professional journey and the value I've delivered.
            </p>
          </motion.div>
        </div>

        <div className="work-timeline">
          {/* Vertical Line */}
          <div className="timeline-line" aria-hidden="true"></div>

          <div className="timeline-items">
            {jobs.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
