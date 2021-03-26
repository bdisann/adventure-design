import React from "react";
import { Link } from "react-router-dom";
import "./Button.styles.css";

const Button = ({ children, type, buttonSize, buttonStyle, onClick }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <>
      <Link className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    </>
  );
};

//constant for button style and size

const STYLES = ["btn-primary", "btn-outline"];
const SIZES = ["btn-medium", "btn-large"];

export default Button;
