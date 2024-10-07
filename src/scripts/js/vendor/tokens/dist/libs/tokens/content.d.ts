export type TokensFontSize = {
  xxxl: string;
  xxl: string;
  xl: string;
  l: string;
  n: string;
  s: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
};
export type TokensLineHeight = {
  null: string;
  reset: string;
  xl: string;
  l: string;
  n: string;
  s: string;
  xs: string;
  xxs: string;
};
export type TokensIconSize = {
  xxxl: string;
  xxl: string;
  xl: string;
  l: string;
  n: string;
  s: string;
};
export type TokensContent = {
  fontSize: TokensFontSize;
  lineHeight: TokensLineHeight;
  iconSize: TokensIconSize;
};
export declare const content: TokensContent;
