import styled from "styled-components";
import github from "../assets/images/GitHub-Mark-Light-32px.png";
import behance from "../assets/images/behance.png";

export function Footer() {
  return (
    <>
      <StyledFooterContainer>
        <StyledDiv>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.behance.net/gusmorais"
          >
            <StyledImg src={behance} alt="behance icon" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.behance.net/gusmorais"
          >
            Images by Gus Morais
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/abstractdev"
          >
            <StyledImg src={github} alt="github icon" />
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/abstractdev"
          >
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
  gap: 0.2rem;
`;

const StyledImg = styled.img`
  @media screen and (max-width: 644px) {
    display: none;
  }
`;
