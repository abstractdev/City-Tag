import { useState, useRef } from "react";
import styled from "styled-components";
import { propsInterface } from "../interfaces/propsInterface";
import { stylesInterface } from "../interfaces/stylesInterface";
import { vFlex } from "../shared-styles/vFlex.styles";
import { getGameItemTextArr } from "../helpers/getGameData";

export function Game(props: propsInterface) {
  const { currentGame } = props;
  const gameItemTextArr = getGameItemTextArr(currentGame);
  const [boardIsClicked, setBoardIsClicked] = useState(false);
  const [targetPosition, setTargetPosition] = useState<number[]>([]);
  const [dropdownPosition, setDropdownPosition] = useState<number[]>([]);

  function handleTargetPosition(event: any) {
    setBoardIsClicked(!boardIsClicked);
    const rect = event.target.getBoundingClientRect();
    const xItemClickPos = Math.round(
      (event.nativeEvent.offsetX / event.nativeEvent.target.offsetWidth) * 100
    );
    const yItemClickPos = Math.round(
      (event.nativeEvent.offsetY / event.nativeEvent.target.offsetHeight) * 100
    );
    const xTargetClickPos = event.nativeEvent.clientX - rect.left;
    const yTargetClickPos = event.nativeEvent.clientY - rect.top;
    setTargetPosition([xTargetClickPos - 23, yTargetClickPos - 23]);
    setDropdownPosition([xTargetClickPos + 20, yTargetClickPos + 20]);
  }

  return (
    <StyledCityImageContainer>
      <StyledCityImage
        src={currentGame!.gameImage}
        alt={"city image"}
        onClick={(event) => handleTargetPosition(event)}
      />
      {boardIsClicked && (
        <>
          <Target targetPosition={targetPosition} currentGame={currentGame} />
          <DropdownContainer
            dropdownPosition={dropdownPosition}
            currentGame={currentGame}
          >
            <ul>
              {gameItemTextArr?.map((e, i) => (
                <DropdownLi key={`${e}${i}`}>{e}</DropdownLi>
              ))}
            </ul>
          </DropdownContainer>
        </>
      )}
    </StyledCityImageContainer>
  );
}

const Target = styled.div<stylesInterface>`
  left: ${(props) =>
    props.targetPosition!.length && `${props.targetPosition![0]}px`};
  top: ${(props) =>
    props.targetPosition!.length && `${props.targetPosition![1]}px`};
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: 3px solid ${({ theme }) => theme.colors.main};
  border: 8px solid ${(props) => props.currentGame?.color};
  @media screen and (max-width: 670px) {
    border: 4px solid ${(props) => props.currentGame?.color};
  }
`;

const DropdownContainer = styled(vFlex)<stylesInterface>`
  left: ${(props) =>
    props.dropdownPosition!.length && `${props.dropdownPosition![0]}px`};
  top: ${(props) =>
    props.dropdownPosition!.length && `${props.dropdownPosition![1]}px`};
  position: absolute;
  width: 132px;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  background-color: ${(props) => props.currentGame?.color};
`;

const DropdownLi = styled.li`
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledCityImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;
const StyledCityImageContainer = styled(vFlex)`
  width: 100%;
  height: auto;
  position: relative;
`;
