import styled from "styled-components";
import { propsInterface } from "../interfaces/propsInterface";
import { VFlex } from "../shared-styles/VFlex.styles";
import { Link } from "react-router-dom";
import { getAllGameImages } from "../helpers/getGameData";

export function Home(props: propsInterface) {
  const { handleCurrentGame } = props;
  const allGameImages = getAllGameImages();
  return (
    <StyledHomeContainer onClick={handleCurrentGame}>
      <StyledHomeText>Choose a city</StyledHomeText>
      <StyledHomeContent>
        {allGameImages.map((e, i) => {
          return (
            <Link to={`/game/${e.name}`} key={e.name + "board"}>
              <StyledHomeImageContainer
                data-id={e.name}
                style={{ backgroundImage: `url(${e.gameImage})` }}
              />
            </Link>
          );
        })}
      </StyledHomeContent>
    </StyledHomeContainer>
  );
}

const StyledHomeContainer = styled(VFlex)`
  padding: 1rem 4rem;
  @media screen and (max-width: 670px) {
    padding: 0 2rem;
  }
`;

const StyledHomeText = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding-bottom: 1rem;
  @media screen and (max-width: 670px) {
    font-size: 1rem;
    padding-top: 1rem;
  }
`;

const StyledHomeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

const StyledHomeImageContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
`;
