import React from "react";
import classNames from "classnames";

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ margin: "0.5rem", marginLeft: "1rem" }}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
