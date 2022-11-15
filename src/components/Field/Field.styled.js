import styled, { css } from "styled-components";

const DefaultStyledField = styled.input`
  display: inline-block;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 0.4rem;
  box-shadow: inset 4px 4px 6px var(--color-beta),
    inset -4px -4px 10px var(--color-gamma);
  background-color: #eceef9;
  color: var(--color-font);
  font-weight: 400;
  &:focus {
    outline: none;
    background-color: rgb(246, 247, 252);
    box-shadow: inset 4px 4px 6px var(--color-beta),
      inset -4px -4px 30px var(--color-gamma);
  }

  &::after {
    display: inline-block;
    padding-left: 0.5rem;
    content: "kg";
  }
`;
const StyledField = styled(DefaultStyledField)((props) => props.style);

export default StyledField;
