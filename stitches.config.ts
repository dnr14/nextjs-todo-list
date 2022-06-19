import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "blueviolet",
      secondary: "gainsboro",
      white: "#fff",
      black: "#000",
    },
  },
  utils: {
    bc: (backgroundColor: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor,
    }),
  },
});
