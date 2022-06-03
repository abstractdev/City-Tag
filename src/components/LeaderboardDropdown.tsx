import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import { clickOutside } from "../helpers/clickOutside";
import { allGames } from "../data/allGames";
import { propsInterface } from "../interfaces/propsInterface";

export function LeaderboardDropdown(props: propsInterface) {
  const { setCurrentLeaderboard } = props;
  const containerRef = useRef<any>();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const navigate = () => {
    ("");
  };
  useEffect(() => {
    clickOutside(dropdownIsOpen, setDropdownIsOpen, containerRef, navigate);
  }, [dropdownIsOpen]);

  function handleSetDropdownIsOpen(event: React.MouseEvent) {
    setDropdownIsOpen((prev) => !prev);
  }

  function handleCurrentLeaderboard(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    setDropdownIsOpen(false);
    console.log("click");
    allGames.forEach((e) => {
      if (event !== null && event.target instanceof HTMLElement) {
        if (`${e.name}lb` === event.target.dataset.id) {
          console.log("lb match");
          setCurrentLeaderboard!(`${e.name}lb`);
        }
      }
    });
  }

  return (
    <>
      <StyledLeaderboardLinkContainer ref={containerRef}>
        <StyledLeaderboardLink
          onClick={(event) => handleSetDropdownIsOpen(event)}
        >
          Leaderboard
        </StyledLeaderboardLink>
        <StyledIconContainer
          onClick={(event) => handleSetDropdownIsOpen(event)}
        >
          <Icon icon="bi:caret-down-fill" />
        </StyledIconContainer>
        {dropdownIsOpen && (
          <StyledLeaderboardDropdownContainer>
            <ul>
              {allGames.map((e) => {
                return (
                  <StyledLink
                    data-id={e.name + "lb"}
                    key={e.name + "lb"}
                    onClick={(event) => handleCurrentLeaderboard(event)}
                  >
                    <StyledLi data-id={e.name + "lb"}>{e.displayName}</StyledLi>
                  </StyledLink>
                );
              })}
            </ul>
          </StyledLeaderboardDropdownContainer>
        )}
      </StyledLeaderboardLinkContainer>
    </>
  );
}

const StyledLeaderboardLinkContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledLeaderboardLink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  font-family: "sky";
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 670px) {
    font-size: 1rem;
  }
`;

const StyledIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const StyledLeaderboardDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: #121212;
  top: 90%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0.4em 0;
  border-radius: 5px;
  z-index: 1;
`;

const StyledLi = styled.li`
  padding: 0.7em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.main};
`;
