import React from "react";
import "./Buttons.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";
import { RiArrowUpLine } from "@remixicon/react";

function FloatingBtn({ onClick }) {
  const { themeMode } = useTheme();
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.2, x: -10, y: -10 }}
      id="floating-btn"
      className={`btn-${themeMode}`}
    >
      <RiArrowUpLine className="icon" />
    </motion.button>
  );
}

export default FloatingBtn;
