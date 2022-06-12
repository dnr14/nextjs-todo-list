import React, { FC } from "react";

interface TextProps {
  children: React.ReactNode;
}

export const Text: FC<TextProps> = ({ children }) => {
  return <p>{children}</p>;
};
