import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./default";
import { GlobalStyles } from "./styles";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
