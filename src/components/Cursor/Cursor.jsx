import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";
import useTheme from "../../contexts/theme";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const { themeMode } = useTheme();
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className={`cursor cursor-${themeMode}`}
    ></motion.div>
  );
}

export default Cursor;
