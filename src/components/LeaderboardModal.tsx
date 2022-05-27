import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { clickOutside } from "../helpers/clickOutside";
import { propsInterface } from "../interfaces/propsInterface";
import { VFlex } from "../shared-styles/VFlex.styles";
import {
  StyledModal,
  StyledModalContainer,
} from "../shared-styles/modal.styles";
import { ModalCloseButton } from "./ModalCloseButton";
import { stylesInterface } from "../interfaces/stylesInterface";
import {
  StyledTable,
  StyledTd,
  StyledTdHeader,
  StyledTr,
} from "../shared-styles/leaderboardTable";
import { makeUserList } from "../helpers/makeUserList";
export function LeaderboardModal(props: propsInterface) {
  const {
    leaderboardModalIsVisible,
    setLeaderboardModalIsVisible,
    currentGame,
    currentGameUserData,
  } = props;
  const navigate = useNavigate();
  const mainModalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    clickOutside(
      leaderboardModalIsVisible!,
      setLeaderboardModalIsVisible!,
      mainModalRef,
      navigate
    );
  }, [leaderboardModalIsVisible]);

  return (
    <StyledModalContainer>
      <StyledMainModal currentGame={currentGame} ref={mainModalRef}>
        <ModalCloseButton
          leaderboardModalIsVisible={leaderboardModalIsVisible}
          setLeaderboardModalIsVisible={setLeaderboardModalIsVisible}
        />
        <VFlex>
          <StyledH1 currentGame={currentGame}>
            {currentGame!.displayName}
          </StyledH1>
        </VFlex>
        <StyledTable>
          <thead>
            <StyledTr>
              <StyledTd></StyledTd>
              <StyledTdHeader>Name</StyledTdHeader>
              <StyledTdHeader>Time</StyledTdHeader>
            </StyledTr>
          </thead>
          <tbody>{makeUserList(currentGameUserData!)}</tbody>
        </StyledTable>
      </StyledMainModal>
    </StyledModalContainer>
  );
}

const StyledMainModal = styled(StyledModal)<stylesInterface>`
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.currentGame!.color};
  border: 5px solid ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

const StyledH1 = styled.h1<stylesInterface>`
  font-family: ${(props) => props.currentGame!.name};
  font-size: 4rem;
  text-align: center;
  cursor: default;
`;
