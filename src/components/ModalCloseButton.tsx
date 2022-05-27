import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { propsInterface } from "../interfaces/propsInterface";

export function ModalCloseButton(props: propsInterface) {
  const { setUserModalIsVisible, setLeaderboardModalIsVisible } = props;
  const navigate = useNavigate();
  function handleSetUserModalIsVisible() {
    // setUserModalIsVisible(false);
    navigate(-1);
    setTimeout(() => {
      navigate(0);
    }, 500);
  }
  return (
    <>
      <StyledCloseContainer onClick={handleSetUserModalIsVisible}>
        <Icon icon="fa:close" style={{ display: "block", margin: "auto" }} />
      </StyledCloseContainer>
    </>
  );
}

export const StyledCloseContainer = styled.div`
  position: absolute;
  height: 3rem;
  width: 3rem;
  color: #121212;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
`;
