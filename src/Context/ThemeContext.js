import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
