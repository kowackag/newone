import React, { useState, useEffect } from "react";
import StyledThirdStage from "./ThirdStage.styled";
import Subtitle from "./../Subtitle/Subtitle";
import { Radio } from "common/components/Radio/Radio";
import { Container } from "common/components/Container/Container.styled";
import { ButtonBox } from "./../ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import Checkbox from "./../Checkbox/Checkbox";
import { Label } from "common/components/Label/Label.tsx";
import Search from "./../Search/Search";
import { Error } from "common/components/Error/Error";
//import { loadProductsAPI } from "../DataAPI";

const ThirdStage = ({
  state,
  back,
  onSubmit,
  onChange,
  onChoose,
  errors,
}) => {
  const { diet, excluded1, excluded2 } = state;
  const { diet: errDiet } = errors;
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   loadProductsAPI()
  //     .then((item) => item)
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  const radioFields = [
    {
      name: "diet",
      value: "fit",
      label: "Dieta Fit",
      desc: "Odchudzająca. Skuteczna dla osób chcących stracić zbędne kilogramy.",
    },
    {
      name: "diet",
      value: "vegetarian",
      label: "Dieta Wegetariańska",
      desc: "Pyszna dieta wegetariańska zgodna z zaleceniami światowej organizacji zdrowia.",
    },
    {
      name: "diet",
      value: "keto",
      label: "Dieta ketogeniczna",
      desc: "Zwiększenie ilości tłuszczu, ograniczenie węglowodanów oraz umiarkowane spożycie białka.",
    },
    {
      name: "diet",
      value: "high-protein",
      label: "Dieta wysokobiałkowa",
      desc: "Urozmaicona dieta, zapewniająca uczucie sytości, dzięki daniom o dużej zawartości białka.",
    },
  ];
  const searchFields = [
    { name: "excluded1", value: excluded1, label: "Składnik 1" },
    { name: "excluded2", value: excluded2, label: "Składnik 2" },
  ];

  return (
    <StyledThirdStage>
      <form className="form" onSubmit={onSubmit}>
        <Container width="45%">
          {radioFields.map(({ name, value, label, desc }) => (
            <Radio
              key={value}
              name={name}
              value={value}
              onClick={onChange}
              active={diet === value}
            >
              <p className="radio__name"> {label}</p>
              <p className="radio__description">{desc}</p>
            </Radio>
          ))}
          <Error err={errDiet} />
        </Container>
        <Container width="45%">
          <div className="box">
            <Label>Dieta bezglutenowa?</Label>
            <Checkbox name="gluten" onClick={onChange} />
          </div>
          <div className="box">
            <Label>Dieta bez laktozy?</Label>
            <Checkbox name="lactosy" onClick={onChange} />
          </div>
          <Subtitle>Wykluczenia z diety:</Subtitle>
          {searchFields.map(({ name, value, label }) => (
            <React.Fragment key={name}>
              <Label>{label}</Label>
              <Search
                items={products}
                name={name}
                value={value}
                onChange={onChange}
                onChoose={onChoose}
                isMutable={true}
              />
            </React.Fragment>
          ))}
        </Container>
        <ButtonBox>
          <Button onClick={back} type="button">
            Wstecz
          </Button>
          <Button>Dalej</Button>
        </ButtonBox>
      </form>
    </StyledThirdStage>
  );
};

export default ThirdStage;
