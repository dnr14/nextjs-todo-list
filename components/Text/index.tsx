import { css } from "@stitches/react";
import React, { FC } from "react";

interface TextProps {
  children: React.ReactNode;
  margin?: string;
}

export const Text: FC<TextProps> = ({ children, margin }) => (
  <p className={css({ margin })()}>{children}</p>
);
