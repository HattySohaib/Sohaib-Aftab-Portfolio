import React, { useState, useEffect } from "react";
import "./EventCard.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";

function EventCard({ year, achievement, brief }) {
  const { themeMode } = useTheme();
  const [dotColor, setDotColor] = useState("");

  // Array of pale dot colors (reduced to 5)
  const colors = [
    "#a086c4", // pale pink
    "#78aec0", // light blue
    "#77b977", // pale green
    "#ac69ac", // thistle (pale purple)
    "#ff6363", // light yellow
  ];

  useEffect(() => {
    // Select a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setDotColor(randomColor);
  }, []);

  return (
    <motion.div
      initial={{ y: "10vh" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`event-card event-card-${themeMode}`}
      style={themeMode == "light" ? { borderColor: dotColor } : {}}
    >
      <div className="dot" style={{ backgroundColor: dotColor }}></div>
      <p className="year">{year}</p>
      <p className="achievement">{achievement}</p>
      <p className="brief">{brief}</p>
    </motion.div>
  );
}

export default EventCard;
