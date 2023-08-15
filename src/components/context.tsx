import React from "react";

interface OrderDataTypes {
  gender: string;
  weight: number;
  height: number;
  born: string;
  activity: string;
  goal: string;
  targetWeight: number;
  diet: string;
  lactosy: boolean;
  gluten: boolean;
  excluded1: string;
  excluded2: string;
  personalData: {
    userName: string;
    userEmail: string;
    userPhone: string;
    userInfo: string;
  };
}
interface OrderDataContextValue {
  orderData: OrderDataTypes;
  dispatch: (prev: OrderDataTypes) => void;
}

const initOrderData = {
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
  personalData: {
    userName: "",
    userEmail: "",
    userPhone: "",
    userInfo: "",
  },
};

const OrderDataContext = React.createContext<OrderDataContextValue>({
  orderData: initOrderData,
  dispatch: (prev: OrderDataTypes) => prev,
});

export { OrderDataContext };
