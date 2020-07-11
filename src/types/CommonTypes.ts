import defaultTheme from "@shared/styles/default.theme";
import * as Icons from "@public/SVGs";

export type IconName = keyof typeof Icons;
export type ThemeType = typeof defaultTheme;
export type ColorType = keyof typeof defaultTheme.colors;
export type FontWeight = keyof typeof defaultTheme.fontWeight;
export type FontSizes = keyof typeof defaultTheme.fontSizes;
