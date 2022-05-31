import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { LeaderboardDropdown } from "./LeaderboardDropdown";
import { Find } from "./Find";
import { propsInterface } from "../interfaces/propsInterface";
import { Timer } from "./Timer";

export function Header(props: propsInterface) {
  const { currentGame, gameIsActive, time, setTime } = props;
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
    navigate(0);
  }
  return (
    <StyledStickyContainer>
      <StyledHeaderContainer>
        <StyledHeaderTextContainer>
          <StyledHeaderText to="/" onClick={goHome}>
            CITY TAG
          </StyledHeaderText>
        </StyledHeaderTextContainer>
        {gameIsActive && (
          <Timer time={time} setTime={setTime} gameIsActive={gameIsActive} />
        )}
        <LeaderboardDropdown />
      </StyledHeaderContainer>
      {currentGame && <Find currentGame={currentGame} />}
    </StyledStickyContainer>
  );
}
const StyledStickyContainer = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
`;

const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 670px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const StyledHeaderTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeaderText = styled(Link)`
  font-family: "city";
  color: ${({ theme }) => theme.colors.white};
  font-size: 4rem;
  text-decoration: none;

  @media screen and (max-width: 670px) {
    font-size: 2rem;
  }
`;
