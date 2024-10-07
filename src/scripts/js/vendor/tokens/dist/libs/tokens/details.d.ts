import type { TokensPalette } from './types';
export type TokensShadow = {
  color: string;
  colorRgb: string;
  none: 'none';
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
export type TokensFocus = {
  color: string;
  width: string;
  offset: string;
  outline: string;
};
export type TokensDuration = {
  shortest: string;
  shorter: string;
  short: string;
  standard: string;
  complex: string;
  entering: string;
  leaving: string;
};
export type TokensDetails = {
  shadow: TokensShadow;
  focus: TokensFocus;
  duration: TokensDuration;
};
export declare function makeDetails(p: TokensPalette): TokensDetails;
