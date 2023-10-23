import React from 'react';
import { FaPlay } from "react-icons/fa6";
import "../../src/App.css";
import girl from "./../../public/Images/girl.png";


const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="text-div">
          <h1>
            Get where you're <br /> going faster with
          </h1>
          <div className="color-div">
            <p> Grapeslab</p>
          </div>
          <p className="small-text">
            Expand your skills in development, testing, analysis, and designing.
          </p>
          <div className="button-div">
            <button className="middle-button">Start Now</button>
            <button className="play-button">
              <FaPlay />
            </button>
            <button>Watch Videos</button>
          </div>

          <div className="number-div">
            <div>
              <h3>20M</h3> <p>Views</p>
            </div>
            <div>
              <h3>50K</h3> <p>Students</p>
            </div>
            <div>
              <h3>4k</h3> <p>Certificates</p>
            </div>
          </div>
        </div>

        <div className="image-div">
          <img src="../../public/Images/my-bg.png" alt="hero-bg" srcset="" />

          <img
            className="girl-image image-size"
            src="../../public/Images/girl.png"
            alt=" girl-image"
            srcset=""
          />

          <img
            className="image-size extra-bg"
            src="../../public/Images/exp-bg.png"
            alt=" exp-bg"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;