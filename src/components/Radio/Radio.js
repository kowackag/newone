import React from "react";
import StyledRadio from "./Radio.styled";

const Radio = ({ name, value, active, onClick, children }) => {
  return (
    <StyledRadio active={active}>
      {children}
      <input name={name} value={value} type="radio" onClick={onClick}></input>
    </StyledRadio>
  );
};

export default Radio;
