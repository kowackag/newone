import React from "react";
import { StyledInput } from "./Input.styled";

interface InputProps {
  id: string;
  className: string;
  type: string;
  unit: string;
  value: string | number;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  //title: string;
}

export const Input = ({
  id,
  className,
  type,
  unit,
  value,
  name,
  onChange,
 // title,
}: InputProps) => {
  return (
    <StyledInput unit={unit}>
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        //title={title}
        value={value}
        onChange={onChange}
      />
      {unit ? <span className="form__unit">{unit}</span> : null}
    </StyledInput>
  );
};
