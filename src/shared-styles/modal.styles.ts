import styled from "styled-components";

export const StyledModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  padding: 1rem;
  border: 2px solid #121212;
  border-radius: 5px;
  position: relative;
  z-index: 21;
`;
