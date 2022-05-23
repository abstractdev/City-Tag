import styled from "styled-components";
import { vFlex } from "../shared-styles/vFlex";
import { allGames } from "../data/allGames";

export function Find() {
  const findImages = allGames.map((e) => {
    let result: any;
    if (e.gameIsActive) {
      result = e.items.map((e, i) => {
        return (
          <StyledFindImageContainer>
            <StyledFindImage key={i} src={e.image} alt="asdf" />
            {e.text}
          </StyledFindImageContainer>
        );
      });
    }
    return result;
  });

  return (
    <>
      <StyledFindContainer>{findImages}</StyledFindContainer>
    </>
  );
}

export const StyledFindContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: "metropolis";
  background-color: ${({ theme }) => theme.colors.main};
`;

export const StyledFindImageContainer = styled(vFlex)`
  height: 100px;
  width: 200px;
  gap: 0.3rem;
  @media screen and (max-width: 670px) {
    font-size: 0;
    height: 60px;
  }
`;

export const StyledFindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
