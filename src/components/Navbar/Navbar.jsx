import React, { useState } from "react";
import "./Navbar.css";

import { navItems } from "../../constants/NavItems";
import ColoredBtn from "../Buttons/ColoredBtn";
import useTheme from "../../contexts/theme";

import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RiMoonFill, RiSunFill } from "@remixicon/react";

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    toggleMenu();
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.15,
        duration: 0.3,
        ease: [0.22, 0, 0.34, 0],
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div id="navbar" className={`navbar-${themeMode}`}>
      <div className="left">
        <button className="menu-btn" onClick={toggleMenu}>
          <p>menu</p>
        </button>
      </div>
      <div className="right">
        <motion.ul className="navbar-list">
          {navItems.map((i, ind) => (
            <li>
              <NavLink
                key={ind}
                className="nav-link"
                activeclass="active"
                to={i.href}
                onClick={scrollToTop}
              >
                {i.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
        <button onClick={handleTheme} className="theme-btn">
          {themeMode === "dark" ? <RiMoonFill /> : <RiSunFill />}
        </button>
        <ColoredBtn href={"blogs"} text={"Blogs"} icon={"arrow_outward"} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mobile-nav"
          >
            <button className="menu-btn close-btn" onClick={toggleMenu}>
              <p>close</p>
            </button>
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="mobile-nav-list"
            >
              {navItems.map((i, ind) => (
                <li className="mob-nav-li">
                  <motion.div variants={linkVars}>
                    <NavLink
                      onClick={scrollToTop}
                      key={ind}
                      className="nav-link"
                      activeclass="active"
                      to={i.href}
                    >
                      {i.name}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
