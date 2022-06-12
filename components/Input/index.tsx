import { styled } from "@stitches/react";
import React, { ComponentProps, FC } from "react";

const CoustomInput = styled("input", {
  "&[data-rule]": {
    boxShadow: "0 0 0 3px red",
  },

  bc: "$primary",
  fontSize: 50,

  variants: {
    color: {
      violet: {
        backgroundColor: "blueviolet",
        color: "white",
        "&:hover": {
          backgroundColor: "darkviolet",
        },
      },
      gray: {
        backgroundColor: "gainsboro",
        "&:hover": {
          backgroundColor: "lightgray",
        },
      },
    },
  },
});

type StitchesButtonProps = ComponentProps<typeof CoustomInput>;
type InputProps = FC<StitchesButtonProps>;

export const Input: InputProps = ({ ...rest }) => (
  <CoustomInput data-rule type={"text"} {...rest} />
);
