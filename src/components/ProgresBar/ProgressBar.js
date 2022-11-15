import React from "react";
import StyledProgressBar from "./ProgressBar.styled";

const ProgressBar = ({ progress }) => {
  return (
    <StyledProgressBar progress={progress}>
      <span className="progress"></span>
    </StyledProgressBar>
  );
};

export default ProgressBar;
