import React from "react";
import "./Fortefolio.css";
import image from "../../assets/fortefolio.png";

import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";

function Fortefolio() {
  const { themeMode } = useTheme();
  return (
    <div id="fortefolio" className={`fortefolio-${themeMode}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fortfolio-left"
      >
        <p className="fortefolio-header">As a student,</p>
        <p className="fortefolio-text">
          I have touched upon many tech stacks. Those that have stuck with me
          have become part of what I like to call my “forte-folio”. <br />
          <br /> I try to grow as technology does. So, I am always looking for
          ways to improve my skills and stacks. If you have any suggestions,
          ideas or feedback that you’d like to share with me, feel free to drop
          a message or get in touch.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fortefolio-right"
      >
        <img className="fortefolio-img" src={image} alt="" />
      </motion.div>
    </div>
  );
}

export default Fortefolio;
