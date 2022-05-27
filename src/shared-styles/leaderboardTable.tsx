import styled from "styled-components";

export const StyledTable = styled.table`
  width: 80%;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;
export const StyledTr = styled.tr`
  border-bottom: 1px solid #121212;
`;

export const StyledTd = styled.td`
  padding: 0.5rem;
  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledTdHeader = styled(StyledTd)`
  font-weight: 900;
`;

export const StyledTimeTd = styled(StyledTd)`
  width: 20%;
  @media screen and (max-width: 670px) {
    width: 34%;
  }
`;
