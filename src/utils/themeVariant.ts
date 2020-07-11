import defaultTheme from "@shared/styles/default.theme";
import darkTheme from "@shared/styles/dark.theme";
import { Theme } from "@@types/Theme";

const themeVariant = {
  [Theme.DEFAULT]: defaultTheme,
  [Theme.DARK]: darkTheme,
};

export default themeVariant;
