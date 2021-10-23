export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

const breakpointWidths = {
  xs: 360,
  sm: 600,
  md: 1024,
  lg: 1400,
  xl: 1920,
};

export default {
  color: {
    white: "#FFFFFF",
    gray: "#C8CDD1",
    black: "#000000",
    fontWhite: "#EAEFF4",
    darkGray: "#808489",
    lightGray: "#e3e7eb",
  },
  background: {
    blue: "#339FFF",
  },
  breakpoints: {
    xs: `${breakpointWidths.xs}px`,
    sm: `${breakpointWidths.sm}px`,
    md: `${breakpointWidths.md}px`,
    lg: `${breakpointWidths.lg}px`,
    xl: `${breakpointWidths.xl}px`,
    widths: breakpointWidths,
    up: (size: Sizes) => `@media (min-width:${breakpointWidths[size]}px)`,
    down: (size: Sizes) => `@media (max-width:${breakpointWidths[size]}px)`,
  },
};
