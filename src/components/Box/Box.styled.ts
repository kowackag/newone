import styled from "styled-components";

const DefaultStyledBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBox = styled(DefaultStyledBox)((props) => props.style);

export default StyledBox;
