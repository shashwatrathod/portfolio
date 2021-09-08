import React from "react";
import "./heroSection.scss";
import { ReactComponent as TypingIllustration } from "../../../assets/svgs/typing.svg";
import PillButton from "../../../components/PillButton/pillButton";
import Slide from "react-reveal/Slide";
import socials from "../../../assets/data/socials";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const whatAmIs = [
    "Software Developer",
    "Avid Learner",
    "Problem Solver",
    "Student",
    "Gamer",
    "Tech Nerd",
  ];
  return (
    <>
      <section id="home">
        <div className="hero-container">
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="hero-container-2">
            <div className="hero-main-grid">
              <div className="hero-info-container">
                <Slide top cascade>
                  <div className="hero-name-container">
                    <div className="filler-text">Hey there! I'm</div>
                    <h1 className="name">Shashwat Rathod</h1>
                  </div>
                  <div className="adjective-container">
                    <Typewriter
                      options={{
                        strings: whatAmIs,
                        autoStart: true,
                        delay: 50,
                        deleteSpeed: 30,
                        pauseFor: 1000,
                        loop: true,
                      }}
                    />
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="hero-buttons-container">
                    <ScrollLink
                      to="skills"
                      smooth={true}
                      exact={true}
                      spy={true}
                      offset={-80}
                    >
                      <PillButton aria-label="scroll">Take A Tour</PillButton>
                    </ScrollLink>

                    <ScrollLink
                      to="contact"
                      smooth={true}
                      exact={true}
                      spy={true}
                      offset={-80}
                    >
                      <PillButton aria-label="contact">Get in Touch</PillButton>
                    </ScrollLink>
                  </div>
                </Slide>
              </div>
              <Slide right>
                <div className="hero-illustration-container" aria-hidden="true">
                  <TypingIllustration className="illustration" />
                </div>
              </Slide>
            </div>
            <div className="socials-container">
              <Slide left>
                {socials.map((social, index) => (
                  <a
                    key={social.title}
                    href={social.link}
                    className="social-button"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.title}
                    aria-labelledby={social.key}
                  >
                    {social.icon}
                    <div className="username" id={social.key}>
                      {social.username}
                    </div>
                  </a>
                ))}
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
