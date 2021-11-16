import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "./default";
import darkTheme from "./dark";
import { GlobalStyles } from "./styles";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: "default" | "dark";
}

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <StyledThemeProvider theme={themes[theme]}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
