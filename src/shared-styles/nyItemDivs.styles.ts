import styled from "styled-components";

const NewYorkDiv = styled.div`
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.ny};
  outline: 3px solid ${({ theme }) => theme.colors.main};
  @media screen and (max-width: 670px) {
    border: 2px solid ${({ theme }) => theme.colors.ny};
    outline: 1px solid ${({ theme }) => theme.colors.main};
  }
  border-radius: 5px;
`;
export const BroadwayDiv = styled(NewYorkDiv)`
  width: 7%;
  height: 6.2%;
  left: 53.5%;
  bottom: 84.2%;
`;
export const HotdogDiv = styled(NewYorkDiv)`
  width: 3%;
  height: 9.3%;
  left: 15.4%;
  bottom: 32%;
`;
export const IlovenyDiv = styled(NewYorkDiv)`
  width: 3.1%;
  height: 8.7%;
  left: 45.9%;
  bottom: 42%;
`;
export const PoliceDiv = styled(NewYorkDiv)`
  width: 3%;
  height: 8%;
  left: 52%;
  bottom: 61%;
`;
