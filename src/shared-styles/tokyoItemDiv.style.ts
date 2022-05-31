import styled from "styled-components";
import { pulsate } from "./keyframes.styles";

const TokyoDiv = styled.div`
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.tokyo};
  outline: 3px solid ${({ theme }) => theme.colors.main};
  @media screen and (max-width: 670px) {
    border: 2px solid ${({ theme }) => theme.colors.tokyo};
    outline: 1px solid ${({ theme }) => theme.colors.main};
  }
  border-radius: 5px;
  animation: ${pulsate} 2s ease infinite;
`;
export const GeishaDiv = styled(TokyoDiv)`
  width: 5%;
  height: 11%;
  left: 60.8%;
  bottom: 59.2%;
`;
export const ParasolDiv = styled(TokyoDiv)`
  width: 3%;
  height: 6.5%;
  left: 29.2%;
  bottom: 76%;
`;
export const SushiDiv = styled(TokyoDiv)`
  width: 3.2%;
  height: 4%;
  left: 56.3%;
  bottom: 92%;
`;
export const SumoDiv = styled(TokyoDiv)`
  width: 6%;
  height: 11.8%;
  left: 82.4%;
  bottom: 17.5%;
`;
