import React from "react";
import s from "./Button.module.css";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

function Button({
  children,
  variant,
  hover,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
}) {
  return (
    <button
      className={`${variant ? s[variant] : ""} ${hover ? s.hover : ""} ${
        disableShadow ? s.disableShadow : ""
      } ${disabled ? s.disabled : ""} ${startIcon ? s.startIcon : ""} ${
        endIcon ? s.endIcon : ""
      } ${size ? s[size] : ""} ${color ? s[color] : ""}`}
    >
      {(startIcon && <LocalGroceryStoreOutlinedIcon fontSize="small" />) ||
        (endIcon && <LocalGroceryStoreOutlinedIcon fontSize="small" />)}{" "}
      {children ? children : "Default"}
    </button>
  );
}

export default Button;
