import * as yup from "yup";

export const firstStageValidateSchema = yup.object().shape({
  gender: yup.string().required("Podaj płeć"),
  weight: yup.number().required("Podaj wagę"),
  height: yup.number().integer().required("Podaj wzrost"),
  born: yup.string().required("Wprowadź datę urodzenia"),
  //   activity: yup.string().required("Uzupełnij rodzaj aktywności"),
});
