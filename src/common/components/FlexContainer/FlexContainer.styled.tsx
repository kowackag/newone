import styled from "styled-components";

export const FlexContainer = styled.div<{
  width?: string;
  jc?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ jc }) => jc || "space-between"};
  justify-content: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "100%"};
`;
