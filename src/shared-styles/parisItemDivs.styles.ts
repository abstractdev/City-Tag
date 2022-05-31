import styled from "styled-components";
import { pulsate } from "./keyframes.styles";

const ParisDiv = styled.div`
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.paris};
  outline: 3px solid ${({ theme }) => theme.colors.main};
  @media screen and (max-width: 670px) {
    border: 2px solid ${({ theme }) => theme.colors.paris};
    outline: 1px solid ${({ theme }) => theme.colors.main};
  }
  border-radius: 5px;
  animation: ${pulsate} 2s ease infinite;
`;
export const BrieDiv = styled(ParisDiv)`
  width: 2.5%;
  height: 4.3%;
  left: 53.4%;
  bottom: 60%;
`;
export const FleurDiv = styled(ParisDiv)`
  width: 3%;
  height: 4.8%;
  left: 66.4%;
  bottom: 95.2%;
`;
export const MonaLisaDiv = styled(ParisDiv)`
  width: 4%;
  height: 8.7%;
  left: 77.5%;
  bottom: 54.5%;
`;
export const TophatDiv = styled(ParisDiv)`
  width: 2.7%;
  height: 4.4%;
  left: 77.4%;
  bottom: 9.3%;
`;
