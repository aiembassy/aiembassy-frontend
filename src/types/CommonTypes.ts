import * as Icons from "@public/SVGs";
import defaultTheme from "@shared/styles/default.theme";

export type IconName = keyof typeof Icons;
export type ThemeType = typeof defaultTheme;
export type ColorType = keyof typeof defaultTheme.colors;
export type FontWeight = keyof typeof defaultTheme.fontWeight;
export type FontSizes = keyof typeof defaultTheme.fontSizes;
export type ButtonTypes = "PRIMARY" | "SECONDARY" | "ERROR";

export interface IMetaTags {
  title?: string;
  description?: string;
  keywords?: string;
}

export enum EnvType {
  development = "development",
  production = "production",
}
