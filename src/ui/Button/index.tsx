import React from "react";
import { Button as StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button = ({ onClick, label }: ButtonProps) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);
