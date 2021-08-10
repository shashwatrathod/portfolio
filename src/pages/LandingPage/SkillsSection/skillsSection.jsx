import React from "react";
import skills from "../../../assets/data/skills";
import SkillIcon from "../../../components/SkillIcon/skillIcon";
import "./skillsSection.scss";
import Typewriter from "typewriter-effect";
import Slide from "react-reveal/Slide";

const SkillsSection = () => {
  const subtitleTexts = ["good at", "a little good at"];
  return (
    <>
      <section id="skills">
        <div className="skills-container">
          <div className="skills-main-grid">
            <div className="skills-title-container">
              <Slide up>
                <div className="skills-title">Technologies</div>

                <div className="skills-subtitle">
                  <span>I'm </span>
                  <Typewriter
                    options={{
                      strings: subtitleTexts,
                      autoStart: true,
                      delay: 50,
                      deleteSpeed: 10,
                      pauseFor: 700,
                      loop: true,
                    }}
                  />
                </div>
              </Slide>
            </div>

            <div className="skills-content-container">
              <Slide up>
                {skills.map((skill, index) => (
                  <SkillIcon skill={skill} key={index} />
                ))}
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
