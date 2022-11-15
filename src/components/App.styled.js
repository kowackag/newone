import styled from "styled-components";

const DefaultStyledApp = styled.section`
  margin: 50px auto;
  padding: 50px;
  max-width: 800px;
  box-shadow: 8px 8px 20px #ccd1d8, 8px 8px 20px #ccd1d8;
  background-color: rgb(var(--color-alfa));
  color: rgb(var(--color-font));

  & .diet-app__title {
    margin-bottom: 3rem;
    color: rgb(var(--color-contrast));
  }

  & .done {
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
  }
`;
const StyledApp = styled(DefaultStyledApp)((props) => props.style);

export default StyledApp;
