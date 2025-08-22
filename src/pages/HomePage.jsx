import React from "react";
import Hero from "../sections/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import About from "../sections/About/About";
import Fortefolio from "../sections/Fortefolio/Fortefolio";
import Skills from "../sections/Skills/Skills";
import Work from "../sections/Work/Work";
import WorkTimeline from "../sections/WorkTimeline/WorkTimeline";
import { IradaBlogsCarousel } from "irada-widgets";

import backdrop from "../assets/backdrop.svg";
import backdropmobile from "../assets/backdropmobile.svg";

import "./pages.css";
import useTheme from "../contexts/theme";
import Footer from "../components/Footer/Footer";

function HomePage() {
  const { themeMode } = useTheme();
  return (
    <div id="home" className={`home-${themeMode}`}>
      <img className="backdrop pc" src={backdrop} alt="backdrop" />
      <img className="backdrop mob" src={backdropmobile} alt="backdrop" />
      <Hero />
      {/* <Carousel /> */}
      <div className="carousel-irada">
        <IradaBlogsCarousel
          apiKey="7ba93d45d89d6ccc6e0d0801412bae29f42121cfb4c884d9a4d1667619867ec6"
          theme={themeMode}
          apiEndpoint="https://bloggestapi.sohaibaftab.me"
        />
      </div>
      <About />
      <WorkTimeline />
      <Fortefolio />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default HomePage;
