import React from "react";
import image from "../../assets/about.png";
import "./About.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";
import ColoredBtn from "../../components/Buttons/ColoredBtn";

function About() {
  const { themeMode } = useTheme();
  return (
    <div id="about" className={`about-${themeMode}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-left"
      >
        <p className="about-text">
          Hi! I'm Sohaib Aftab, currently pursuing B.Tech. in Computer Science and Engineering at IIITDM Kurnool, Andhra Pradesh. My passion for technology started early, teaching myself Java in 8th grade and Python during my +2 in CBSE.
        </p>
        <p className="about-text">
          I develop responsive, static or dynamic websites with the powerful
          MERN stack, and cross-platform mobile apps with React Native. I have worked on Backend-heavy websites with authentication, RESTful APIs and Database management, as well as on Frontend-heavy websites like portfolios and business websites.
        </p>
        <p className="about-text">
          Since joining IIITDM, I've become a MERN developer and have worked on both frontend-heavy and backend-heavy projects, including freelance and personal work. I'm also open to internship opportunities in SDE roles.
        </p>
        <ColoredBtn href={"#"} text={"Resume"} icon={"download"} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-right"
      >
        <img className="about-img" src={image} alt="" />
      </motion.div>
    </div>
  );
}

export default About;
