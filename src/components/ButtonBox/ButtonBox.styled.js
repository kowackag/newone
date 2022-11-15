import styled from "styled-components";

const DefaultStyledButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0 2rem;
`;

const StyledButtonBox = styled(DefaultStyledButtonBox)((props) => props.style);

export default StyledButtonBox;
