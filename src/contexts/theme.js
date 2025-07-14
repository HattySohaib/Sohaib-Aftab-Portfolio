import { createContext, useContext, useEffect, useState } from "react";

// Function to get the initial theme preference
const getInitialTheme = () => {
  // Check if theme exists in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }

  // Otherwise check system preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

// Create the context with default values
const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Create the provider component
const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getInitialTheme);

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  // Persist theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  // Prepare the context value
  const contextValue = {
    themeMode,
    darkTheme,
    lightTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming the theme context
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme as default };
