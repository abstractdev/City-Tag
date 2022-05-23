import broadway from "../assets/images/ny/broadway.jpg";
import hotdog from "../assets/images/ny/hotdog.jpg";
import iloveny from "../assets/images/ny/iloveny.jpg";
import police from "../assets/images/ny/police.jpg";
import styled from "styled-components";
import { vFlex } from "../shared-styles/vFlex";

export function Find() {
  return (
    <>
      <FindContainer>
        <FindImageContainer
        >
          <FindImage src={broadway} />
          broadway
        </FindImageContainer>
        <FindImageContainer
        >
          <FindImage src={hotdog} />
          hotdog
        </FindImageContainer>
        <FindImageContainer
        >
          <FindImage src={iloveny} />
          iloveny
        </FindImageContainer>
        <FindImageContainer
        >
          <FindImage src={police} />
          police
        </FindImageContainer>
      </FindContainer>
    </>
  );
}


export const FindContainer = styled.div`
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

export const FindImageContainer = styled(vFlex)`
  height: 100px;
  width: 200px;
  gap: 0.3rem;
  @media screen and (max-width: 670px) {
    font-size: 0;
    height: 60px;
  }
`;

export const FindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
