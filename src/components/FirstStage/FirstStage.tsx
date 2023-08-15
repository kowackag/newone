import React, { useState } from "react";
import { StyledFirstStage } from "./FirstStage.styled";
import Box from "../Box/Box";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import Parameters from "./Parameters/Parameters";
import Activity from "./Activity/Activity";
import { validateDataFirstStage } from "components/validateData";
const FirstStage = ({
  state,
  errors,
  onChange,
  onChoose,
  onSubmit,
  active,
}) => {
  const countBMI = (weight: number, height: number) => {
    const bmi = (weight / Math.pow(height, 2)).toFixed(1);
    return bmi;
  };
  const [err, setErr] = useState({});
  // const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const errors = validateDataFirstStage(state);
  //   setErr({ ...errors });
  //   if (Object.keys(errors).length === 0) {
  //       const { weight, height } = state;
  //       const bmi = countBMI(Number(weight), Number(height) / 100);
       
  //     }

  //   }
  // };

  return (
    <StyledFirstStage active={active}>
      <form onSubmit={onSubmit}>
        <Box>
          <Parameters
            param={state}
            errors={errors}
            onChange={onChange}
            onChoose={onChoose}
          />
          <Activity
            activity={state.activity}
            error={errors.activity}
            onClick={onChange}
          />
        </Box>
        <ButtonBox>
          <Button type="submit">Dalej</Button>
        </ButtonBox>
      </form>
    </StyledFirstStage>
  );
};

export default FirstStage;
