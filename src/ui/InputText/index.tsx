import React from "react";
import { Input } from "./styles";

interface InputTextProps {
  onChange: () => void;
  value: string;
}

export const InputText = ({ onChange, value, ...other }) => (
  <Input onChange={onChange} value={value} {...other} />
);
