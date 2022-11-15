import React from "react";
import StyledLastStage from "./LastStage.styled";
import Subtitle from "./../Subtitle/Subtitle";
import ButtonBox from "./../ButtonBox/ButtonBox";
import Button from "./../Button/Button";
import Input from "./../Input/Input";
import Label from "./../Label/Label";
import Error from "./../Error/Error";

const LastStage = ({ state, active, back, onSubmit, onChange, errors }) => {
  const { userName, userEmail, userPhone, userInfo } = state.personalData;
  const {
    userName: errUserName,
    userEmail: errUserEmail,
    userPhone: errUserPhone,
  } = errors;

  const fields = [
    {
      label: "Imię i Nazwisko:",
      type: "text",
      name: "personalData",
      key: "userName",
      value: userName,
      err: errUserName,
    },
    {
      label: "Adres email:",
      type: "email",
      name: "personalData",
      key: "userEmail",
      value: userEmail,
      err: errUserEmail,
    },
    {
      label: "Telefon:",
      type: "text",
      name: "personalData",
      key: "userPhone",
      value: userPhone,
      err: errUserPhone,
    },
    {
      label: "Uwagi:",
      type: "text",
      name: "personalData",
      key: "userInfo",
      value: userInfo,
    },
  ];

  return (
    <StyledLastStage active={active}>
      <Subtitle>Proszę o podanie danych kontaktowych.</Subtitle>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__content">
          {fields.map(({ label, name, type, value, err, key }) => (
            <React.Fragment key={key}>
              <Label htmlFor={key}>{label}</Label>
              <Input
                className="form__value"
                type={type}
                id={key}
                name={name}
                value={value}
                title={key}
                onChange={onChange}
              />
              {err && <Error err={err}>{err}</Error>}
            </React.Fragment>
          ))}
        </div>
        <ButtonBox>
          <Button onClick={back} type="button">
            Wstecz
          </Button>
          <Button>Wyślij</Button>
        </ButtonBox>
      </form>
    </StyledLastStage>
  );
};

export default LastStage;
