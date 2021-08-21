import clsx from "clsx";
import React, { useEffect } from "react";
import "./snackbar.scss";

const Snackbar = ({ showSnackbar, setShowSnackbar, type, message }) => {
  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    }
  }, [showSnackbar, setShowSnackbar]);
  return (
    <>
      <div
        className={clsx("snackbar", {
          "snackbar-success": type === "success",
          "snackbar-error": type === "error",
          "snackbar-show": showSnackbar,
        })}
      >
        {message}
      </div>
    </>
  );
};

export default Snackbar;
