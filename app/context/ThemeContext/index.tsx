import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "../../theme/ThemeProvider";

interface IThemeContext {
  theme: string;
  changeTheme: () => void;
}

const ThemeContext = createContext({
  theme: "default",
  changeTheme: () => {},
} as IThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<"default" | "dark">("default");

  const changeTheme = () => {
    if (theme === "default") {
      setTheme("dark");
      return;
    }
    setTheme("default");
  };

  const value = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
