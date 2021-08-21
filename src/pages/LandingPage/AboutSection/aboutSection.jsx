import React from "react";
import "./aboutSection.scss";
import Slide from "react-reveal/Slide";

const AboutSection = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-main-grid">
            <Slide up>
              <div className="about-title-container">
                <span>About Me</span>
              </div>
            </Slide>

            <div className="about-content-container">
              <Slide up>
                {`Shashwat Rathod, ${new Date().getFullYear() - 2000}`}
              </Slide>

              <Slide up>
                Boston, USA
                <p>
                  I am a <strong>software development</strong> enthusiast who is
                  currently pursuing MS in <strong>Computer Science</strong>{" "}
                  from Northeastern University in Boston, USA. I have been
                  passionate about tech ever since I got my first smartphone
                  back in 2015 which I rooted (and consequently, bricked :/).
                </p>
                <p>
                  I have learnt and applied concepts from various CS domains
                  like <strong>AI</strong>, <strong>Android</strong>,{" "}
                  <strong>Software Development</strong> and even{" "}
                  <strong>Embedded Systems</strong> into small and big projects
                  I undertook over the years individually as well as in a team.
                  I find my predilection towards Software Dev rather special
                  though. I am always in search of making meaningful
                  contributions in any organisation alongside more like-minded
                  people.
                </p>
                <p>
                  When I'm not coding, I spend my time playing CS:GO and
                  watching documentries about the universe and aviation.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
