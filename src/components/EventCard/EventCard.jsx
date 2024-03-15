import React from "react";
import "./EventCard.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";

function EventCard({ year, achievement, brief }) {
  const { themeMode } = useTheme();
  return (
    <motion.div
      initial={{ y: "10vh" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`event-card event-card-${themeMode}`}
    >
      <div className="dot"></div>
      <p className="year">{year}</p>
      <p className="achievement">{achievement}</p>
      <p className="brief">{brief}</p>
    </motion.div>
  );
}

export default EventCard;
