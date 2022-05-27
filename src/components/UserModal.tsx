import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { clickOutside } from "../helpers/clickOutside";
import { propsInterface } from "../interfaces/propsInterface";
import { ModalCloseButton } from "./ModalCloseButton";
import { VFlex } from "../shared-styles/VFlex.styles";
import { handleFormSubmit } from "../helpers/handleFormSubmit";
import {
  StyledModal,
  StyledModalContainer,
} from "../shared-styles/modal.styles";

export function UserModal(props: propsInterface) {
  const {
    currentGame,
    userModalIsVisible,
    setUserModalIsVisible,
    time,
    currentGameUserData,
    setCurrentGameUserData,
    setLeaderboardModalIsVisible,
    // handleFormSubmit,
    // handleOnChange,
  } = props;
  const nameModalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  console.log(currentGameUserData);
  useEffect(() => {
    clickOutside(
      userModalIsVisible!,
      setUserModalIsVisible!,
      nameModalRef,
      navigate
    );
  }, [userModalIsVisible]);

  return (
    <>
      {userModalIsVisible && (
        <StyledModalContainer>
          <StyledNameModal ref={nameModalRef}>
            <ModalCloseButton setUserModalIsVisible={setUserModalIsVisible} />
            <VFlex>
              <StyledForm
                onSubmit={(event) =>
                  handleFormSubmit(
                    event,
                    setUserModalIsVisible!,
                    currentGame,
                    time!,
                    currentGameUserData,
                    setCurrentGameUserData!,
                    setLeaderboardModalIsVisible!
                  )
                }
              >
                <VFlex>
                  <label htmlFor="name">Please enter your name</label>
                  <StyledInput
                    // onChange={handleOnChange}
                    value="Anonymous"
                    type="text"
                    name="name"
                    id="name"
                    maxLength={20}
                  />
                </VFlex>
                <VFlex>
                  <StyledFormButton>Submit</StyledFormButton>
                </VFlex>
              </StyledForm>
            </VFlex>
          </StyledNameModal>
        </StyledModalContainer>
      )}
    </>
  );
}

const StyledNameModal = styled(StyledModal)`
  height: 250px;
  width: 400px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media screen and (max-width: 670px) {
    font-size: 1rem;
    height: 180px;
    width: 300px;
  }
`;
const StyledForm = styled.form`
  width: 100%;
  height: 100%;
`;
const StyledInput = styled.input`
  border-radius: 5px;
  max-width: 100%;
  padding: 0.5rem;
  margin: 1.5rem 0;
  font-size: 1.5rem;
  @media screen and (max-width: 670px) {
    font-size: 1rem;
  }
`;
const StyledFormButton = styled.button`
  width: 160px;
  height: 60px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.5rem;
  @media screen and (max-width: 670px) {
    font-size: 1rem;
    width: 80px;
    height: 40px;
  }
`;
