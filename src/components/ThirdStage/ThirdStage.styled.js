import styled, { css } from "styled-components";

const DefaultStyleThirdStage = styled.div`
  color: var(--color-font);

  & .form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledThirdStage = styled(DefaultStyleThirdStage)((props) => props.style);

export default StyledThirdStage;
