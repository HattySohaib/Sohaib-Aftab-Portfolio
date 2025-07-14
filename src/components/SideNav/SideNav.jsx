import React, { useState, useRef, useEffect } from "react";
import "./SideNav.css";
import useTheme from "../../contexts/theme";
import { Link } from "react-scroll";
import {
  RiHomeLine,
  RiUser3Line,
  RiBriefcase2Line,
  RiCodeSSlashLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiAddLine,
  RiMenu4Line,
  RiContactsBook2Line,
} from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

function SideNav() {
  const { themeMode } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [contentHeight, setContentHeight] = useState(200); // Pre-define a reasonable height to avoid slow first open
  const contentRef = useRef(null);

  // Measure the content height when component mounts and when it changes
  useEffect(() => {
    // Force a layout calculation once on component mount
    const timer = setTimeout(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Update height when collapsed state changes
  useEffect(() => {
    if (contentRef.current && !isCollapsed) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navSections = [
    { name: "home", icon: <RiHomeLine />, offset: -100 },
    { name: "about", icon: <RiUser3Line />, offset: -100 },
    { name: "skills", icon: <RiCodeSSlashLine />, offset: -100 },
    { name: "work", icon: <RiBriefcase2Line />, offset: -100 },
    { name: "contact", icon: <RiContactsBook2Line />, offset: -140 },
  ];

  const socialLinks = [
    { icon: <RiGithubFill />, url: "https://github.com/hattySohaib" },
    {
      icon: <RiLinkedinBoxFill />,
      url: "https://www.linkedin.com/in/sohaibaftab/",
    },
    {
      icon: <RiInstagramFill />,
      url: "https://www.instagram.com/sohaibaftab.29/",
    },
    { icon: <RiTwitterXFill />, url: "https://twitter.com/HattySohaib" },
  ];

  // Variants for the container animation - faster initial response
  const containerVariants = {
    collapsed: {
      height: "3rem",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3,
      },
    },
    expanded: {
      height: contentHeight ? contentHeight + 80 : "auto",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };

  // Variants for the content animation - faster fade in
  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
      },
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`side-nav side-nav-${themeMode}`}
      initial="collapsed"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={containerVariants}
    >
      {/* Content is now first, toggle button moved to the end */}
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.div
            className="nav-content"
            ref={contentRef}
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div className="section-nav">
              {navSections.map((section, index) => (
                <Link
                  key={index}
                  to={section.name}
                  spy={true}
                  smooth={true}
                  offset={section.offset}
                  duration={400}
                  style={{
                    width: "100%",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  <motion.div
                    className="nav-icon"
                    whileHover={{ scale: 1.2, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {section.icon}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="social-nav">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{
                    width: "100%",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  <div className="nav-icon">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button moved to the bottom */}
      <div className="toggle-btn" onClick={toggleCollapse}>
        <motion.div
          className="nav-icon"
          animate={{ rotate: isCollapsed ? 0 : 225 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {isCollapsed ? <RiMenu4Line /> : <RiAddLine />}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SideNav;
