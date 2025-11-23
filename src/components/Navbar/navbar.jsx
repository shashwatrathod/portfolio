import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link as ScrollLink } from "react-scroll";
import NavItem from "./NavItem/navItem";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  const checkScroll = () => {
    if (window.scrollY >= 80) {
      setHasScrolledPast(true);
    } else {
      setHasScrolledPast(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <nav className={clsx({ "nav-scrolled": hasScrolledPast })}>
          <div className="nav-title">
            <ScrollLink
              to="home"
              smooth={true}
              exact={true}
              spy={true}
              offset={-80}
              className="nav-scroll-link"
            >
              <span className="prompt-prefix">~$</span> ./rathod.sh <span className="blinking-cursor"></span>
            </ScrollLink>
          </div>
          <ul
            className={clsx("nav-menu", {
              "nav-menu--expanded": menuOpen,
            })}
          >
            <NavItem itemName="Skills" itemLink="skills" />
            <NavItem itemName="Experience" itemLink="experience" />
            <NavItem itemName="Projects" itemLink="projects" />
            {/* <NavItem itemName="About" itemLink="about" /> */}
            <NavItem itemName="Contact Me" itemLink="contact" />
          </ul>

          <div
            className={clsx("hamburger", {
              "hamburger-open": menuOpen,
            })}
            onClick={toggleHamburger}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
