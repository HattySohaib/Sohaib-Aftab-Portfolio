import "./App.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Preloader from "./components/Preloader/Preloader";
import SideNav from "./components/SideNav/SideNav";
import AboutPage from "./pages/AboutPage";
import Blogs from "./pages/Blogs";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
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
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Cursor />
      {isHomePage && <SideNav />}
      <Navbar />
      <Routes>
        <Route index path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blogs/*" element={<Blogs />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
