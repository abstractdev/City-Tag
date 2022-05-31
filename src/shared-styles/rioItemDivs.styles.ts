import styled from "styled-components";
import { pulsate } from "./keyframes.styles";

const RioDiv = styled.div`
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.rio};
  outline: 3px solid ${({ theme }) => theme.colors.main};
  @media screen and (max-width: 670px) {
    border: 2px solid ${({ theme }) => theme.colors.rio};
    outline: 1px solid ${({ theme }) => theme.colors.main};
  }
  border-radius: 5px;
  animation: ${pulsate} 2s ease infinite;
`;
export const DancerDiv = styled(RioDiv)`
  width: 5%;
  height: 12%;
  left: 77.3%;
  bottom: 52%;
`;
export const FlagDiv = styled(RioDiv)`
  width: 5%;
  height: 7%;
  left: 13.8%;
  bottom: 32%;
`;
export const SoccerDiv = styled(RioDiv)`
  width: 2.3%;
  height: 4%;
  left: 57.2%;
  bottom: 10%;
`;
export const TambourineDiv = styled(RioDiv)`
  width: 4%;
  height: 7.3%;
  left: 52.5%;
  bottom: 71.8%;
`;
