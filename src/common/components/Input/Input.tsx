import React from "react";
import { StyledInput, Unit, InputContainer } from "./Input.styled";

interface InputProps {
  id: string;
  type: string;
  unit?: string;
  value: string | number;
  title?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  id,
  type,
  unit,
  value,
  name,
  title,
  onChange,
}: InputProps) => {
  return (
    <InputContainer>
      <StyledInput
        unit={unit}
        id={id}
        type={type}
        name={name}
        title={title}
        value={value}
        onChange={onChange}
      />
      {unit ? <Unit>{unit}</Unit> : null}
    </InputContainer>
  );
};
