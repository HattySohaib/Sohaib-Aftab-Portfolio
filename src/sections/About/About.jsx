import React from "react";
import image from "../../assets/about.png";
import "./About.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";
import ColoredBtn from "../../components/Buttons/ColoredBtn";
import LazyImage from "../../components/LazyImage/LazyImage";

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
          I develop responsive, static or dynamic websites with the powerful
          MERN stack, and cross-platform mobile apps with React Native.
        </p>
        <p className="about-text">
          I have worked on Backend-heavy websites with authentication, RESTful
          APIs and Database management, as well as on Frontend-heavy websites
          like portfolios and business websites.
        </p>
        <p className="about-text">
          l am also open to internship opportunities in SDE roles.
        </p>
        <ColoredBtn href={"#"} text={"Resume"} icon={"download"} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-right"
      >
        <LazyImage
          src={image}
          alt="About me"
          className="about-img"
          loading="lazy"
          placeholder={
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#f0f0f0",
              }}
            ></div>
          }
        />
      </motion.div>
    </div>
  );
}

export default About;
