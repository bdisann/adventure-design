import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.component";
import "./Navbar.styles.css";

const Navbar = () => {
  const [barMobile, setBarMobile] = useState(false);
  const [signUpButton, setSignUpButton] = useState(true);

  const menuIconMobileHandleClick = () => setBarMobile(!barMobile);
  const navLinkMobileHandleClick = () => setBarMobile(false);
  const windowShowSignUpButton = () => {
    window.innerWidth <= 960 ? setSignUpButton(false) : setSignUpButton(true);
  };

  useEffect(() => {
    windowShowSignUpButton();
  });

  window.addEventListener("resize", windowShowSignUpButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={menuIconMobileHandleClick}
        >
          ADVNTR <i className="fab fa-typo3"></i>
        </Link>

        <div className="menu-icon" onClick={() => menuIconMobileHandleClick()}>
          <i className={barMobile ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={barMobile ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => navLinkMobileHandleClick()}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={() => navLinkMobileHandleClick()}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={() => navLinkMobileHandleClick()}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={() => navLinkMobileHandleClick()}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {signUpButton && (
          <Button
            buttonStyle="btn-outline"
            buttonSize="btn-medium"
            type="submit"
            onClick={() => {}}
          >
            SIGN UP
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
