import "./App.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { ThemeProvider } from "./contexts/theme";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Preloader from "./components/Preloader/Preloader";
import FloatingBtn from "./components/Buttons/FloatingBtn";
import AboutPage from "./pages/AboutPage";
import Blogs from "./pages/Blogs";
import { Bloggest } from "bloggest";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  const scrollToTop = () => {
    scroll.scrollTo(0, 0);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Cursor />
      <FloatingBtn onClick={scrollToTop} />
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
