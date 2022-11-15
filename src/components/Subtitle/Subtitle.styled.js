import styled from "styled-components";

const DefaultStyledSubtitle = styled.h3`
  margin: 2rem 0;
  font-size: 1.6rem;
`;
const StyledSubtitle = styled(DefaultStyledSubtitle)((props) => props.style);

export default StyledSubtitle;
