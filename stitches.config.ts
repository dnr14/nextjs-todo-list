import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

const { styled, globalCss } = createStitches({
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

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, Nanum Gothic, sans-serif",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

export { globalStyles, styled };
