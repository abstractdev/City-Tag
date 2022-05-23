import broadway from "../assets/images/ny/broadway.jpg";
import hotdog from "../assets/images/ny/hotdog.jpg";
import iloveny from "../assets/images/ny/iloveny.jpg";
import police from "../assets/images/ny/police.jpg";
import styled from "styled-components";
import { vFlex } from "../shared-styles/vFlex";

export function Find() {
  return (
    <>
      <StyledFindContainer>
        <StyledFindImageContainer
        >
          <StyledFindImage src={broadway} />
          broadway
        </StyledFindImageContainer>
        <StyledFindImageContainer
        >
          <StyledFindImage src={hotdog} />
          hotdog
        </StyledFindImageContainer>
        <StyledFindImageContainer
        >
          <StyledFindImage src={iloveny} />
          iloveny
        </StyledFindImageContainer>
        <StyledFindImageContainer
        >
          <StyledFindImage src={police} />
          police
        </StyledFindImageContainer>
      </StyledFindContainer>
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
