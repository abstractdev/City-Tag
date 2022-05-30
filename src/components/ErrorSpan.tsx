import styled from "styled-components";

export function ClickErrorSpan() {
  return (
    <>
      <StyledErrorSpan>Try again!</StyledErrorSpan>
    </>
  );
}

export function TimeErrorSpan() {
  return (
    <>
      <StyledErrorSpan>
        Your time did not qualify for the leaderboard.
        <br />
        Please try again
      </StyledErrorSpan>
    </>
  );
}

export const StyledErrorSpan = styled.span`
  color: red;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  left: 50%;
  bottom: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  border-radius: 5px;
  z-index: 10;
  font-family: "metropolisB";
  text-align: center;
`;
