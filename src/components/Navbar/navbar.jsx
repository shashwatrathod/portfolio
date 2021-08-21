import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link as ScrollLink } from "react-scroll";

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
        <nav className={clsx({ ["nav-scrolled"]: hasScrolledPast })}>
          <div className="nav-container">
            <div className="nav-title">
              <ScrollLink
                to="home"
                smooth={true}
                exact={true}
                spy={true}
                offset={-80}
              >
                ShashwatRathod
              </ScrollLink>
            </div>
            <ul
              className={clsx("nav-menu", {
                ["nav-menu--expanded"]: menuOpen,
              })}
            >
              <li>
                <ScrollLink to="home" smooth={true} exact={true} spy={true}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  exact={true}
                  spy={true}
                  offset={-80}
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="experience"
                  smooth={true}
                  exact={true}
                  spy={true}
                  offset={-80}
                >
                  Experience
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  exact={true}
                  spy={true}
                  offset={-80}
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  exact={true}
                  spy={true}
                  offset={-80}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  exact={true}
                  spy={true}
                  offset={-80}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>

            <div
              className={clsx("hamburger", {
                ["hamburger-open"]: menuOpen,
              })}
              onClick={toggleHamburger}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
