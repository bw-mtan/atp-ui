export type TokensPaletteBase = {
  white: ColorGamma;
  black: ColorGamma;
};
type ColorGamma = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  solid: string;
};
export type TokensPalette = TokensPaletteBase & {
  primary: Color;
  secondary: Color;
  info: Color;
  success: Color;
  warning: Color;
  error: Color;
  text: {
    primary: string;
    secondary: string;
    muted: string;
    subtle: string;
  };
  background: {
    main: string;
    paper: string;
    'elevation-xs': string;
    'elevation-sm': string;
    'elevation-md': string;
    'elevation-lg': string;
    'elevation-xl': string;
  };
  border: {
    primary: string;
    secondary: string;
    strong: string;
  };
  overlay: {
    dark: string;
  };
  focusRing: string;
  shadow: string;
  shadowRgb: string;
};
type ColorShade = {
  subtle: string;
  muted: string;
  soft: string;
  emphasis: string;
  strong: string;
};
type ColorAlpha = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
};
type Color = {
  main: string;
  mainRgb: string;
  light: string;
  lighter: string;
  dark?: string;
  darker?: string;
  contrast: string;
  contrastRgb: string;
  shade: ColorShade;
  alpha: ColorAlpha;
};
export {};
