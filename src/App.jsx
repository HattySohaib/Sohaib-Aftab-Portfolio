import "./App.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Cursor from "./components/Cursor/Cursor";
import Preloader from "./components/Preloader/Preloader";
import SideNav from "./components/SideNav/SideNav";
import AboutPage from "./pages/AboutPage";
import { IradaBlogsPage } from "irada-widgets";
import useTheme from "./contexts/theme";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  const { themeMode } = useTheme();

  useEffect(() => {
    // Optimize preloader duration and avoid forced reflow
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
    }, 1500); // Reduced from 2000ms

    return () => clearTimeout(timer);
  }, []);

  // Check if current route is homepage
  useEffect(() => {
    const checkIfHomePage = () => {
      const path = window.location.pathname;
      setIsHomePage(path === "/" || path === "");
    };

    checkIfHomePage();
    window.addEventListener("popstate", checkIfHomePage);

    return () => {
      window.removeEventListener("popstate", checkIfHomePage);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Cursor />
      {isHomePage && <SideNav />}
      <Navbar />
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="blogs/*"
          element={
            <IradaBlogsPage
              theme={themeMode}
              apiKey={
                "7ba93d45d89d6ccc6e0d0801412bae29f42121cfb4c884d9a4d1667619867ec6"
              }
              heading={"I write too!"}
              subheading="Explore my thoughts, ideas and learnings"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
