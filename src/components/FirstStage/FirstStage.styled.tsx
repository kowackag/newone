import styled from "styled-components";

export const StyledFirstStage = styled.div<{
  active: boolean;
}>`
  display: ${({ active }) => !active && "none"};
`;
