import { styled } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import { ComponentProps } from "react";

const CoustomTitle = styled("h3", {
  fontFamily: "Roboto sans-serif",
  variants: {
    type: {
      h1: { fontSize: 22, margin: "15px 0" },
      h2: { fontSize: 18 },
      h3: { fontSize: 14 },
      h4: { fontSize: 10 },
      h5: { fontSize: 6 },
      h6: { fontSize: 2 },
    },
  },
});

interface TitleProps extends ComponentProps<typeof CoustomTitle> {
  text: string;
}

export function Title({ text, type = "h1" }: TitleProps) {
  return <CoustomTitle type={type}>{text}</CoustomTitle>;
}
