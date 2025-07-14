import React from "react";
import Hero from "../sections/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import About from "../sections/About/About";
import Fortefolio from "../sections/Fortefolio/Fortefolio";
import Skills from "../sections/Skills/Skills";
import Work from "../sections/Work/Work";
import WorkTimeline from "../sections/WorkTimeline/WorkTimeline";

import backdrop from "../assets/backdrop.svg";
import backdropmobile from "../assets/backdropmobile.svg";

import "./pages.css";
import useTheme from "../contexts/theme";

function HomePage() {
  const { themeMode } = useTheme();
  return (
    <div id="home" className={`home-${themeMode}`}>
      <img className="backdrop pc" src={backdrop} alt="backdrop" />
      <img className="backdrop mob" src={backdropmobile} alt="backdrop" />
      <Hero />
      <Carousel />
      <About />
      <WorkTimeline />
      <Fortefolio />
      <Skills />
      <Work />
    </div>
  );
}

export default HomePage;
