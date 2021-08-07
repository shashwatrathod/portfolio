import React from "react";
import "./pillButton.scss";

const PillButton = (props) => {
  return (
    <>
      <button className="pillBtn">{props.children || props.title}</button>
    </>
  );
};

export default PillButton;
