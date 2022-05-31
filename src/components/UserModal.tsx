import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
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
import { growIn } from "../shared-styles/keyframes.styles";

export function UserModal(props: propsInterface) {
  const {
    currentGame,
    userModalIsVisible,
    setUserModalIsVisible,
    time,
    setCurrentGameUserData,
    setLeaderboardModalIsVisible,
    userId,
    setTimeErrorSpanIsVisible,
  } = props;
  const [name, setName] = useState("");
  const nameModalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    clickOutside(
      userModalIsVisible!,
      setUserModalIsVisible!,
      nameModalRef,
      navigate
    );
  }, [userModalIsVisible]);

  function handleTimeErrorSpan() {
    setTimeErrorSpanIsVisible!(true);
    setTimeout(() => {
      navigate(-1);
      setTimeout(() => {
        navigate(0);
      }, 200);
    }, 7000);
  }

  return (
    <>
      {userModalIsVisible && (
        <StyledModalContainer>
          <StyledNameModal ref={nameModalRef}>
            <ModalCloseButton
              userModalIsVisible={userModalIsVisible}
              setUserModalIsVisible={setUserModalIsVisible}
            />
            <VFlex>
              <StyledForm
                onSubmit={(event) =>
                  handleFormSubmit(
                    event,
                    setUserModalIsVisible!,
                    currentGame,
                    time!,
                    setCurrentGameUserData!,
                    setLeaderboardModalIsVisible!,
                    userId!,
                    name!,
                    handleTimeErrorSpan
                  )
                }
              >
                <VFlex>
                  <label htmlFor="name">Please enter your name</label>
                  <StyledInput
                    onChange={(event) => setName(event.target.value)}
                    value={name}
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
  animation: ${growIn} 0.5s ease;
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
