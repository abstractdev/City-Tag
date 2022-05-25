import { useState } from "react";
import styled from "styled-components";
import { propsInterface } from "../interfaces/propsInterface";
import { stylesInterface } from "../interfaces/stylesInterface";
import { vFlex } from "../shared-styles/vFlex.styles";
import { getGameItemTextArr } from "../helpers/getGameData";
import { getClickPosition } from "../helpers/getClickPosition";
import { checkFirebaseForMatch } from "../helpers/checkFirebaseForMatch";

export function Game(props: propsInterface) {
  const { currentGame } = props;
  const coordsCollection = `${currentGame!.name}Coords`
  const gameItemTextArr = getGameItemTextArr(currentGame);
  const [boardIsClicked, setBoardIsClicked] = useState(false);
  const [targetPosition, setTargetPosition] = useState<number[]>([]);
  const [dropdownPosition, setDropdownPosition] = useState<number[]>([]);
  const [itemClickPosition, setItemClickPosition] = useState<number[]>([]);

  
  function handleTargetAndItemPosition(event: React.MouseEvent) {
    const { xItemClickPos, yItemClickPos, xTargetClickPos, yTargetClickPos } = getClickPosition(event);
    setBoardIsClicked(!boardIsClicked);
    setItemClickPosition([xItemClickPos, yItemClickPos])
    setTargetPosition([xTargetClickPos - 23, yTargetClickPos - 23]);
    setDropdownPosition([xTargetClickPos + 20, yTargetClickPos + 20]);
  }
  async function handleDropdownClick (event: React.MouseEvent<HTMLLIElement>) {
    if (event !== null && event.target instanceof HTMLElement) {
      await checkFirebaseForMatch(coordsCollection, itemClickPosition[0], itemClickPosition[1], event.target.dataset.id);
      console.log('qwerty')
    }
  }

  return (
    <StyledCityImageContainer>
      <StyledCityImage
        src={currentGame!.gameImage}
        alt={"city image"}
        onClick={(event) => handleTargetAndItemPosition(event)}
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
                <DropdownLi key={`${e.name}${i}`} data-id={e.name} onClick={(event) => handleDropdownClick(event)}>{e.text}</DropdownLi>
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
