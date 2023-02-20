import React from "react";
import s from "./Button.module.css";

function Button({ variant, hover, disableShadow, disabled }) {
  return (
    <button
      className={`${variant ? s[variant] : ""} ${hover ? s.hover : ""} ${
        disableShadow ? s.disableShadow : ""
      } ${disabled ? s.disabled : ""}`}
    >
      Default
    </button>
  );
}

export default Button;
