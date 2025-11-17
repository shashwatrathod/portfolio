"use client";

import React, { useRef } from "react";
import "./heroCard.scss";
import PillButton from "../../components/PillButton/pillButton";
import { Link as ScrollLink } from "react-scroll";
import socials from "../../assets/data/socials";

// SVG Background Elements
const CoffeeCupSVG = () => (
  <svg
    className="bg-svg coffee-cup"
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 30 L20 80 Q20 90 30 90 L60 90 Q70 90 70 80 L70 30 L75 25 L75 20 Q75 15 70 15 L25 15 Q20 15 20 20 L20 25 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M70 30 L80 30 Q85 30 85 35 L85 50 Q85 55 80 55 L70 55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M30 50 L50 50"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const GuitarSVG = () => (
  <svg
    className="bg-svg guitar"
    viewBox="0 0 120 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 20 Q50 30 45 50 L45 150 Q45 170 55 180 L65 180 Q75 170 75 150 L75 50 Q75 30 65 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="55" cy="80" r="3" fill="currentColor" />
    <circle cx="65" cy="80" r="3" fill="currentColor" />
    <circle cx="55" cy="100" r="3" fill="currentColor" />
    <circle cx="65" cy="100" r="3" fill="currentColor" />
    <path
      d="M60 20 L60 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M50 160 L70 160"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GameControllerSVG = () => (
  <svg
    className="bg-svg game-controller"
    viewBox="0 0 120 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="30"
      width="80"
      height="40"
      rx="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="40" cy="50" r="4" fill="currentColor" />
    <circle cx="60" cy="50" r="4" fill="currentColor" />
    <circle cx="80" cy="50" r="4" fill="currentColor" />
    <path
      d="M30 40 L30 60 M50 40 L50 60"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M90 45 L100 45"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CodeBracketsSVG = () => (
  <svg
    className="bg-svg code-brackets"
    viewBox="0 0 60 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 10 L5 20 L15 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M45 10 L55 20 L45 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarConstellationSVG = () => (
  <svg
    className="bg-svg star-constellation"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="40" r="1.5" fill="currentColor" />
    <circle cx="80" cy="25" r="1" fill="currentColor" />
    <circle cx="120" cy="60" r="1.5" fill="currentColor" />
    <circle cx="50" cy="100" r="1" fill="currentColor" />
    <circle cx="150" cy="80" r="1.5" fill="currentColor" />
    <circle cx="170" cy="130" r="1" fill="currentColor" />
    <circle cx="100" cy="150" r="1.5" fill="currentColor" />
    <circle cx="40" cy="160" r="1" fill="currentColor" />
    <circle cx="180" cy="180" r="1.5" fill="currentColor" />
    <path
      d="M30 40 L80 25 L120 60"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.3"
    />
    <path
      d="M120 60 L150 80 L170 130"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.3"
    />
    <path
      d="M50 100 L100 150 L40 160"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.3"
    />
  </svg>
);

const MusicNoteSVG = () => (
  <svg
    className="bg-svg music-note"
    viewBox="0 0 60 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 60 Q20 50 28 50 L28 15 L40 10 L40 45 Q40 55 32 55 Q25 55 22.5 57.5 Q20 60 20 60 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="24"
      cy="57"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const TelescopeSVG = () => (
  <svg
    className="bg-svg telescope"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 80 L35 65 L70 30 L75 25 L80 30 L75 35 L40 70 L25 85 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="77.5"
      cy="27.5"
      r="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M20 80 L25 75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 80 L15 85"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const PlanetSVG = () => (
  <svg
    className="bg-svg planet"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="40"
      cy="40"
      r="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="40"
      cy="40"
      rx="28"
      ry="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.6"
    />
    <circle cx="35" cy="35" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="44" cy="42" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

const HeroCard = () => {
  const statsCardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!statsCardRef.current) return;

    const rect = statsCardRef.current.getBoundingClientRect();
    // Clamp values between 20% and 80% to prevent image from going off-screen
    const x = Math.max(
      20,
      Math.min(80, ((e.clientX - rect.left) / rect.width) * 100)
    );
    const y = Math.max(
      20,
      Math.min(80, ((e.clientY - rect.top) / rect.height) * 100)
    );

    statsCardRef.current.style.setProperty("--mouse-x", `${x}%`);
    statsCardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section id="home" aria-label="Intro">
      <div className="container-max">
        <div
          className="hero-bento-grid"
          role="region"
          aria-labelledby="hero-heading"
        >
          {/* Main Branding Card */}
          <div className="hero-main-card">
            {/* <div className="hero-bg-elements hero-bg-main" aria-hidden="true">
              <CoffeeCupSVG />
              <GuitarSVG />
              <CodeBracketsSVG />
              <StarConstellationSVG />
            </div> */}
            <div className="main-card-content">
              <p className="hero-kicker">Full-Stack Software Engineer</p>
              <h1 id="hero-heading" className="hero-title">
                Shashwat Rathod
              </h1>
              <p className="hero-key-phrases">
                Scalable Systems • Clean Code • Elegant Solutions
              </p>
              <h2 className="hero-value-prop">
                I build systems that grow with you
              </h2>
              <p className="hero-tech-desc">
                From microservices to cloud-native deployments, I build backends
                that are reliable, performant, and ready to scale.
              </p>
              <ScrollLink
                to="projects"
                smooth={true}
                exact={true}
                spy={true}
                offset={-80}
                className="hero-link"
              >
                See cloud projects →
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
              <TelescopeSVG />
              <PlanetSVG />
              <MusicNoteSVG />
            </div>
            <div className="info-card-content">
              <p className="hero-description">
                I thrive at the intersection of backend architecture and
                frontend craft—building distributed systems that handle
                real-world scale.
              </p>
              <p className="hero-interests">
                When I'm not debugging or refactoring for clarity, you'll find
                me stargazing, strumming my guitar, or strategizing in
                competitive games.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div
            className="hero-stats-card"
            ref={statsCardRef}
            onMouseMove={handleMouseMove}
          >
            <div className="hero-bg-elements hero-bg-stats" aria-hidden="true">
              <GameControllerSVG />
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-label">Experience</div>
                <div className="stat-value">2+ years</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Coffee consumed</div>
                <div className="stat-value">∞ cups</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Currently</div>
                <div className="stat-value">New York, NY</div>
              </div>
            </div>
          </div>

          {/* Content Section - Spotify & Currently */}
          <div className="hero-content-section">
            {/* <div
              className="hero-bg-elements hero-bg-content"
              aria-hidden="true"
            >
              <MusicNoteSVG />
              <CodeBracketsSVG />
            </div> */}

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
