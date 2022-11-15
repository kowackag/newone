import React from "react";
import StyledActivity from "./Activity.styled";
import Subtitle from "../../Subtitle/Subtitle";
import Radio from "../../Radio/Radio";
import Error from "./../../Error/Error";

const Activity = ({ onClick, activity, error }) => {
  const fields = [
    {
      name: "activity",
      value: "none",
      label: "Brak aktywności",
      desc: "Siedzący tryb życia",
    },
    {
      name: "activity",
      value: "low",
      label: "Mała aktywność",
      desc: "Sporadyczne treningi",
    },
    {
      name: "activity",
      value: "med",
      label: "Średnia aktywność",
      desc: "1-3 treningi w tygodniu",
    },
    {
      name: "activity",
      value: "hight",
      label: "Duża aktywność",
      desc: "Conajmniej 4 treningi w tygodniu",
    },
  ];

  return (
    <StyledActivity>
      <Subtitle>Jaka jest twoja aktywność fizyczna?</Subtitle>
      {fields.map(({ name, value, label, desc }) => (
        <Radio
          key={value}
          name={name}
          value={value}
          onClick={onClick}
          active={value === activity}
        >
          <p className="radio__name"> {label}</p>
          <p className="radio__description">{desc}</p>{" "}
        </Radio>
      ))}
      <Error err={error} />
    </StyledActivity>
  );
};

export default Activity;
