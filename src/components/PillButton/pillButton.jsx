import React from "react";
import "./pillButton.scss";

const PillButton = (props) => {
  const createRipples = (e) => {
    const button = e.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    const rect = button.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.x - radius}px`;
    circle.style.top = `${e.clientY - rect.y - radius}px`;

    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <>
      <button
        className="pillBtn"
        onClick={(e) => {
          createRipples(e);
        }}
      >
        {props.children || props.title}
      </button>
    </>
  );
};

export default PillButton;
