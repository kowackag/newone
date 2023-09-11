import { useReducer } from "react";
import { OrderDataTypes } from "./types";

export const useHandler = () => {
  const init = {
    gender: "",
    weight: 0,
    height: 0,
    born: "",
    activity: "",
    goal: "",
    targetWeight: 0,
    diet: "",
    lactosy: false,
    gluten: false,
    excluded1: "",
    excluded2: "",
    bmi: 0,
    personalData: {
      userName: "",
      userEmail: "",
      userPhone: "",
      userInfo: "",
    },
  };

  type OrderAction =
    | { type: "choose"; element: HTMLInputElement }
    | { type: "change"; element: HTMLInputElement }
    | { type: "reset" }
    | { type: "setBMI"; element: number };

  const reducer = (state: OrderDataTypes, action: Readonly<OrderAction>) => {
    switch (action.type) {
      case "reset":
        return init;
      case "change":
        const { name, value, checked, type, title } = action.element;
        const copyValue = type === "checkbox" ? checked : value;
        const result = title
          ? { ...state, [name]: { ...state.personalData, [title]: copyValue } }
          : { ...state, [name]: copyValue };
        return result;
      case "choose":
        let nameLi = action.element && action.element.getAttribute("name");
        return { ...state, [nameLi]: action.element.innerText };
      case "setBMI":
        return { ...state, bmi: action.element };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, init);
  return [state, dispatch];
};
