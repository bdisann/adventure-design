import React from "react";
import Button from "../Button/Button.component";

import Video2 from "../../assets/videos/video-2.mp4";

import "../../App.css";
import "./HeroSection.styles.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={Video2} autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          GET STARTED
        </Button>
        <Button className="btns" buttonSize="btn-large">
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
