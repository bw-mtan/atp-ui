import { type TokensContent } from './content';
import { type TokensDetails } from './details';
import { type TokensSizes } from './sizes';
import type { TokensPalette } from './types';
export type Tokens = {
  readonly color: TokensPalette;
} & TokensSizes &
  TokensContent &
  TokensDetails;
export declare const tokensLight: Tokens;
export declare const tokensDynamic: Tokens;
