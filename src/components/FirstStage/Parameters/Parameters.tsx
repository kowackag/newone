import React, { useState, useContext } from "react";
import StyledParameters from "./Parameteres.styled";
import { Input } from "common/components/Input/Input";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";
import { OrderDataContext } from "components/context";
import Search from "../../Search/Search";

const Parameters = ({ param, errors, onChange, onChoose }) => {
  const { gender, weight, height, born } = param;
  const { dispatch } = useContext(OrderDataContext);

  const changeValue = (e) => {
    e.preventDefault();
    dispatch({ type: "change", element: e.target });
  };

  const {
    gender: errGender,
    weight: errWeight,
    height: errHeight,
    born: errBorn,
  } = errors;

  const fields = [
    {
      label: "Masa ciała",
      type: "number",
      unit: "kg",
      name: "weight",
      value: weight,
      err: errWeight,
    },
    {
      label: "Wzrost",
      type: "number",
      unit: "cm",
      name: "height",
      value: height,
      err: errHeight,
    },
    {
      label: "Data urodzenia",
      type: "date",
      name: "born",
      value: born,
      err: errBorn,
    },
  ];

  return (
    <StyledParameters>
      <Label>Płeć</Label>
      <Search
        className="form__value"
        items={["kobieta", "mężczyzna"]}
        name="gender"
        value={gender}
        onChange={onChange}
        onChoose={onChoose}
        isMutable={false}
      />
      {errGender && <Error err={errGender} />}
      {fields.map(({ label, type, unit, name, value, err }) => (
        <React.Fragment key={name}>
          <Label htmlFor={name}>{label}</Label>
          <Input
            id={name}
            className="form__value"
            type={type}
            unit={unit}
            name={name}
            value={value}
            onChange={changeValue}
          />
          {err && <Error err={err} />}
        </React.Fragment>
      ))}
    </StyledParameters>
  );
};

export default Parameters;
