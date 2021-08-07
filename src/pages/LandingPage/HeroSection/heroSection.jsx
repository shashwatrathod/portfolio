import React from "react";
import "./heroSection.scss";
import { ReactComponent as TypingIllustration } from "../../../assets/svgs/typing.svg";
import PillButton from "../../../components/PillButton/pillButton";
import Slide from "react-reveal/Slide";
import socials from "../../../assets/data/socials";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const whatAmIs = [
    "Software Developer",
    "Avid Learner",
    "Student",
    "Gamer",
    "Tech Nerd",
    "Dog Lover",
  ];
  return (
    <>
      <div className="hero-container">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="main-grid">
            <div className="info-container">
              <Slide top cascade>
                <div className="name-container">
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
                <div className="buttons-container">
                  <PillButton aria-label="email">Get In Touch</PillButton>
                  <PillButton aria-label="download cv">Dowload CV</PillButton>
                </div>
              </Slide>
            </div>
            <Slide right>
              <div className="illustration-container" aria-hidden="true">
                <TypingIllustration className="illustration" />
              </div>
            </Slide>
          </div>
          <div className="socials-container">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
