import React, { useState, useEffect } from "react";
import "./Preloader.css";
import { motion } from "framer-motion";
import useTheme from "../../contexts/theme";

function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { themeMode } = useTheme();
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      },
    },
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  const words = [
    "Hello", // English
    "你好", // Chinese (Mandarin)
    "नमस्ते", // Hindi
    "مرحبا", // Arabic
    "প্রণাম", // Bengali
    "Bonjour", // French
    "Hola", // Spanish
    "Hallo", // German
    "Ciao", // Italian
    "Olá", // Portuguese
  ];
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  });

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className={`preloader preloader-${themeMode}`}
      variants={slideUp}
      initial="initial"
      exit="exit"
      id="preloader"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="hello"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}

export default Preloader;
