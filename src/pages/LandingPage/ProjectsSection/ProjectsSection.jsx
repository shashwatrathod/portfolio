import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./projectsSection.scss";
import ProjectCard from "../../../components/ProjectCard/projectCard";
import projects from "../../../assets/data/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="projects" className="projects-section" onMouseMove={handleMouseMove}>
      <div className="projects-bg-glow" />
      
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">Selected Works</h2>
          <p className="projects-subtitle">A collection of things I've built</p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              mousePosition={mousePosition}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
