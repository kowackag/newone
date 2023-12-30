import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";
import { Parameters } from "./Parameters";
import { Activity } from "./Activity";

import { validateDataFirstStage } from "components/validateData";
import { OrderDataContext } from "components/context";
import { countBMI } from "./helpers";

export const FirstStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();

  const [err, setErr] = useState(null);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      weight: orderData.weight,
      height: orderData.height,
      gender: orderData.gender,
      born: orderData.born,
      activity: orderData.activity,
    };

    const errors = validateDataFirstStage(data);
    setErr({ ...errors });

    if (Object.keys(errors).length === 0) {
      const { weight, height } = data;
      const bmi = countBMI(weight, height);
      dispatch({ type: "setBMI", element: bmi });
      navigate("/diet-form-and-calc-BMI/2");
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <FlexContainer>
          <Parameters errors={err} />
          <Activity activity={orderData.activity} error={err?.activity} />
        </FlexContainer>
        <ButtonBox>
          <Button>Dalej</Button>
        </ButtonBox>
      </form>
    </div>
  );
};
