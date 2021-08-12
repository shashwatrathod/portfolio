import React from "react";
import HeroSection from "./HeroSection/heroSection";
import ProjectsSection from "./ProjectsSection/projectsSetion";
import SkillsSection from "./SkillsSection/skillsSection";
import WorkSection from "./WorkSection/workSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
    </>
  );
};

export default LandingPage;
