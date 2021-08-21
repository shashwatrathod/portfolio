import clsx from "clsx";
import React, { useEffect, useState } from "react";
import PillButton from "../PillButton/pillButton";
import "./navbar.scss";

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
            <div className="nav-title">ShashwatRathod</div>
            <ul
              className={clsx("nav-menu", {
                ["nav-menu--expanded"]: menuOpen,
              })}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
