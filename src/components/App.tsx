import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import {FirstStage} from "./FirstStage/FirstStage";
import {SecondStage} from "./SecondStage/SecondStage";
import { ThirdStage } from "./ThirdStage/ThirdStage";
import LastStage from "./LastStage/LastStage";
import Complete from "./Complete/Complete";
import ProgressBar from "./ProgresBar/ProgressBar";
import { addOrdersAPI } from "./DataAPI";

// import { OrderDataTypes } from "./types";
import { OrderDataContext, initOrderData } from "./context";
import { useHandler } from "./reducer";
import {
  validateDataSecondStage,
  validateDataThirdStage,
  validateDataLastStage,
} from "./validateData";

import { Wrapper, Title } from "./App.styled";

const App = () => {
  const [orderData, dispatch] = useHandler();
  const [stage, setStage] = useState(1);
  const [err, setErr] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
    let errors = {};
    switch (stage) {
      case 2:
        errors = validateDataSecondStage(orderData);
        break;
      case 3:
        errors = validateDataThirdStage(orderData);
        break;
      case 4:
        errors = validateDataLastStage(orderData);
        break;
    }

    setErr({ ...errors });
    if (Object.keys(errors).length === 0) {
      if (stage === 4) {
        addOrdersAPI(orderData);
      }
      setStage((prev) => ++prev);
    }
  };
  console.log(stage);
  const chooseElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "choose", element: e.target });
  };

  const prevForm = (e) => {
    e.preventDefault();
    setStage((prev) => --prev);
  };

  const reset = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStage(1);
    dispatch({ type: "reset" });
  };

  const getProgress = (stage: number) => {
    const progress = 25 * (stage - 1);
    return progress;
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "change", element: e.target });
  };

  console.log(orderData);
  return (
    <OrderDataContext.Provider value={{ orderData, dispatch }}>
      <Wrapper>
        <Title>Konfigurator diety</Title>
        <Routes>
          <Route path={"/1"} element={<FirstStage />} />
          <Route path={"/2"} element={<SecondStage />} />
          <Route path={"/3"} element={<ThirdStage /> } />
          <Route
            path={"/4"}
            element={
              <LastStage
                state={orderData}
                active={stage === 4}
                back={prevForm}
                onSubmit={handleForm}
                onChange={changeValue}
                errors={err}
              />
            }
          />
          <Route
            path={"/compleate"}
            element={<Complete active={stage === 5} reset={reset} />}
          />
        </Routes>
        <ProgressBar progress={getProgress(stage)}></ProgressBar>
      </Wrapper>
    </OrderDataContext.Provider>
  );
};

export default App;
