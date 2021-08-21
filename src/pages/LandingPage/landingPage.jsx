import React from "react";
import AboutSection from "./AboutSection/aboutSection";
import ContactSection from "./ContactSection/contactSection";
import HeroSection from "./HeroSection/heroSection";
import ProjectsSection from "./ProjectsSection/projectsSetion";
import SkillsSection from "./SkillsSection/skillsSection";
import WorkSection from "./WorkSection/workSection";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
