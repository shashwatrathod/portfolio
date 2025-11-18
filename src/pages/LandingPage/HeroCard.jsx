"use client";

import React, { useRef } from "react";
import "./heroCard.scss";
import PillButton from "../../components/PillButton/pillButton";
import { Link as ScrollLink } from "react-scroll";
import socials from "../../assets/data/socials";
import StarField from "./components/StarField/StarField";
import {
  GameControllerSVG,
  GuitarStringsSVG,
  ProgrammerDeskSVG,
} from "./components/HeroIcons";
import useParallax from "../../hooks/useParallax";

const HeroCard = () => {
  const statsCardRef = useRef(null);
  const mainCardRef = useRef(null);

  // Parallax for Main Card (Pixel offset)
  const handleMainCardMouseMove = useParallax(mainCardRef, {
    sensitivity: 20,
    variableX: "--parallax-x",
    variableY: "--parallax-y",
  });

  // Custom handler for Stats Card (Percentage based for mask/gradient)
  const handleStatsMouseMove = useParallax(statsCardRef, {
    method: "position",
    variableX: "--mouse-x",
    variableY: "--mouse-y",
    clamp: { min: 20, max: 80 },
  });

  return (
    <section id="home" aria-label="Intro">
      <div className="container-max">
        <div
          className="hero-bento-grid"
          role="region"
          aria-labelledby="hero-heading"
        >
          {/* Main Branding Card */}
          <div 
            className="hero-main-card" 
            ref={mainCardRef}
            onMouseMove={handleMainCardMouseMove}
          >
            <div className="hero-bg-elements hero-bg-main" aria-hidden="true">
              <StarField />
              {/* <CoffeeCupSVG /> */}
              {/* <GuitarSVG /> */}
              {/* <CodeBracketsSVG /> */}
            </div>
            <div className="main-card-content">
              <p className="hero-kicker">Full-Stack Software Engineer</p>
              <h1 id="hero-heading" className="hero-title">
                Shashwat Rathod
              </h1>
              <p className="hero-key-phrases">
                Scalable Backends • Intuitive Frontends • Complex Problems
              </p>
              <h2 className="hero-value-prop">
                Building systems that scale, interfaces that shine
              </h2>
              <p className="hero-tech-desc">
                I bridge the gap between complex backend architecture and
                intuitive user experiences. Whether it's building high-throughput
                microservices or crafting pixel-perfect UIs, I build software
                that works as good as it looks.
              </p>
              <ScrollLink
                to="projects"
                smooth={true}
                exact={true}
                spy={true}
                offset={-80}
                className="hero-link"
              >
                View my work →
              </ScrollLink>
              <div
                className="hero-socials main-card-socials"
                role="navigation"
                aria-label="Social links"
              >
                {socials.map((social) => (
                  <a
                    key={social.title}
                    href={social.link}
                    className="hero-social-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.title}
                    tabIndex={0}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="hero-info-card">
            <div className="hero-bg-elements hero-bg-info" aria-hidden="true">
              <GuitarStringsSVG />
              {/* <TelescopeSVG />
              <PlanetSVG />
              <MusicNoteSVG /> */}
            </div>
            <div className="info-card-content">
              <p className="hero-description">
                I'm a problem solver who loves diving deep into technologies to
                find solutions that work. A fast learner who thrives on
                challenges, I'm always exploring new languages and tools to build
                better software.
              </p>
              <p className="hero-interests">
                When I'm not hunting down race conditions or struggling to center
                a div, you'll find me stargazing, strumming my guitar, or
                strategizing in competitive games.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div
            className="hero-stats-card"
            ref={statsCardRef}
            onMouseMove={handleStatsMouseMove}
          >
            <div className="hero-bg-elements hero-bg-stats" aria-hidden="true">
              <GameControllerSVG />
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-label">Users Impacted</div>
                <div className="stat-value">2M+</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Coffee consumed</div>
                <div className="stat-value">∞ cups</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Location</div>
                <div className="stat-value">New York, NY</div>
              </div>
            </div>
          </div>

          {/* Content Section - Spotify & Currently */}
          <div className="hero-content-section">
            <div
              className="hero-bg-elements hero-bg-content"
              aria-hidden="true"
            >
              <ProgrammerDeskSVG />
            </div>

            {/* Spotify Player */}
            <div className="spotify-container">
              <h3 className="section-label">Currently Vibing To</h3>
              <div className="spotify-player">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/3fzXditMcfFfUp5MZ6utO1?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"
                ></iframe>
              </div>
            </div>

            {/* Currently Section */}
            <div className="currently-container">
              <h3 className="section-label">Currently</h3>
              <div className="currently-grid">
                <div className="currently-item">
                  <div className="currently-icon">💻</div>
                  <div className="currently-content">
                    <div className="currently-title">Building</div>
                    <div className="currently-desc">Scalable microservices</div>
                  </div>
                </div>
                <div className="currently-item">
                  <div className="currently-icon">📚</div>
                  <div className="currently-content">
                    <div className="currently-title">Learning</div>
                    <div className="currently-desc">Distributed systems</div>
                  </div>
                </div>
                <div className="currently-item">
                  <div className="currently-icon">🎮</div>
                  <div className="currently-content">
                    <div className="currently-title">Playing</div>
                    <div className="currently-desc">Competitive games</div>
                  </div>
                </div>
                <div className="currently-item">
                  <div className="currently-icon">🌌</div>
                  <div className="currently-content">
                    <div className="currently-title">Exploring</div>
                    <div className="currently-desc">Space & astronomy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
