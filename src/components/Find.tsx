import styled from "styled-components";
import { VFlex } from "../shared-styles/VFlex.styles";
import { allGames } from "../data/allGames";
import { propsInterface } from "../interfaces/propsInterface";
import { dropIn } from "../shared-styles/keyframes.styles";

export function Find(props: propsInterface) {
  const { currentGame } = props;
  const findImages = allGames.map((e) => {
    let result: any;
    if (currentGame && e.name === currentGame.name) {
      result = e.items.map((e, i) => {
        return (
          <StyledFindImageContainer key={i}>
            <StyledFindImage src={e.image} alt="find image" />
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

const StyledFindContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  color: ${({ theme }) => theme.colors.white};
  font-family: "metropolis";
  background-color: ${({ theme }) => theme.colors.main};
  animation: ${dropIn} 0.75s ease;
`;

const StyledFindImageContainer = styled(VFlex)`
  height: 100px;
  width: 200px;
  gap: 0.3rem;
  @media screen and (max-width: 670px) {
    font-size: 0;
    height: 60px;
  }
`;

const StyledFindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
