import styled from "styled-components";
import { AiOutlineGithub, AiOutlineBehanceSquare } from "react-icons/ai";
import { VFlex } from "../shared-styles/VFlex.styles";

export function Footer() {
  return (
    <>
      <StyledFooterContainer>
        <StyledDiv>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/abstractdev"
          >
            <VFlex>
              <AiOutlineBehanceSquare />
            </VFlex>
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.behance.net/gusmorais"
          >
            {" "}
            Images by Gus Morais
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/abstractdev"
          >
            <VFlex>
              <AiOutlineGithub />
            </VFlex>
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/abstractdev"
          >
            {" "}
            Site by abstractdev
          </StyledLink>
        </StyledDiv>
      </StyledFooterContainer>
    </>
  );
}

const StyledFooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0.5rem 0.75rem;
  font-size: 70%;
  @media screen and (max-width: 644px) {
    font-size: 0.6rem;
  }
  gap: 2rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.08rem;
`;
