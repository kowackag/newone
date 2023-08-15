import styled from "styled-components";

export const StyledBMI = styled.section`
  --color-contrast: ${(props) => props.theme.colorContrast};

  width: 45%;
  font-size: 1.4rem;
  font-weight: bold;

  & .bmi-value,
  .bmi-description {
    color: rgb(var(--color-contrast));
    margin-top: 2rem;
  }

  & .bmi-value {
    font-size: 5rem;
    font-weight: 200;
  }

  & .bmi-description {
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
