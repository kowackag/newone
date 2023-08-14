import React from "react";
import { StyledLabel } from "./Label.styled";

export const Label = ({ children, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
