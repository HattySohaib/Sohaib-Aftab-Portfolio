import React from "react";
import "./Hero.css";
import dp from "../../assets/dp.png";
import TransparentBtn from "../../components/Buttons/TransparentBtn";
import { Link } from "react-scroll";
import useTheme from "../../contexts/theme";

function Hero() {
  const { themeMode } = useTheme();

  return (
    <div id="hero" className={`hero-${themeMode}`}>
      <div className="name-container">
        <div className="floating-name">
          <span>SOHAIB AFTAB</span>
        </div>
      </div>
      <div className="hero-top">
        <div className="hero-left">
          <h1 className="header">
            Developer
            <br />& Programmer.
          </h1>
          <h2 className="sub-header">Aspiring Engineer. Ambitious Coder.</h2>
          <div className="hero-buttons">
            <Link
              className="link"
              to="work"
              smooth={true}
              offset={-140}
              duration={400}
            >
              <TransparentBtn text={"View Work"} icon={"arrow_outward"} />
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={dp} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
