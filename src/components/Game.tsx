import { useState, useEffect } from "react";
import styled from "styled-components";
import { propsInterface } from "../interfaces/propsInterface";
import { stylesInterface } from "../interfaces/stylesInterface";
import { VFlex } from "../shared-styles/VFlex.styles";
import { getGameItemTextArr } from "../helpers/getGameData";
import { getClickPosition } from "../helpers/getClickPosition";
import { checkFirebaseForMatch } from "../helpers/checkFirebaseForMatch";
import { audio } from "../helpers/audio";
import { UserModal } from "./UserModal";
import { LeaderboardModal } from "./LeaderboardModal";
import { setDoc, doc, collection, Timestamp, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { ClickErrorSpan, TimeErrorSpan } from "./ErrorSpan";
import { fadeIn } from "../shared-styles/keyframes.styles";

export function Game(props: propsInterface) {
  const {
    currentGame,
    gameIsActive,
    setGameIsActive,
    userData,
    time,
    setTime,
    userId,
    setUserId,
  } = props;
  const { endAudio } = audio();
  const gameItemTextArr = getGameItemTextArr(currentGame);
  const [boardIsClicked, setBoardIsClicked] = useState(false);
  const [targetPosition, setTargetPosition] = useState<number[]>([]);
  const [dropdownPosition, setDropdownPosition] = useState<number[]>([]);
  const [itemClickPosition, setItemClickPosition] = useState<number[]>([]);
  const [gameItems, setGameItems] = useState(currentGame!.items);
  const [userModalIsVisible, setUserModalIsVisible] = useState(false);
  const [leaderboardModalIsVisible, setLeaderboardModalIsVisible] =
    useState(false);
  const [currentGameUserData, setCurrentGameUserData] = useState(
    getCurrentGameUserData()
  );
  const [Item1, Item2, Item3, Item4] = handleShowItemDiv()!;
  const [clickErrorSpanIsVisible, setClickErrorSpanIsVisible] = useState(false);
  const [timeErrorSpanIsVisible, setTimeErrorSpanIsVisible] = useState(false);

  useEffect(() => {
    const docRef = doc(collection(db, "users"));
    if (gameIsActive) {
      setDoc(docRef, {
        id: docRef.id,
        city: `${currentGame!.name}`,
        start: Timestamp.now().toMillis(),
      });
      setUserId!(docRef.id);
    } else if (!gameIsActive) {
      //get doc by id and calculate backend time
      (async () => {
        let backendTime: number;
        const userRef = doc(db, "users", userId!);
        const userSnap = await getDoc(userRef);
        if (userSnap) {
          backendTime = Timestamp.now().toMillis() - userSnap.data()!.start;
          setTime!(backendTime);
          setDoc(
            userRef,
            {
              backendTime: backendTime!,
            },
            { merge: true }
          );
        }
      })();
    }
  }, [gameIsActive]);

  function getCurrentGameUserData() {
    return userData!.filter((e: any) => e.city === `${currentGame!.name}`);
  }

  function handleTargetAndItemPosition(event: React.MouseEvent) {
    const { xItemClickPos, yItemClickPos, xTargetClickPos, yTargetClickPos } =
      getClickPosition(event);
    setBoardIsClicked(!boardIsClicked);
    setItemClickPosition([xItemClickPos, yItemClickPos]);
    setTargetPosition([xTargetClickPos - 23, yTargetClickPos - 23]);
    setDropdownPosition([xTargetClickPos + 20, yTargetClickPos + 20]);
  }
  async function handleDropdownClick(event: React.MouseEvent<HTMLLIElement>) {
    setBoardIsClicked(!boardIsClicked);
    //check Firebase for item click position match and dropdown match
    if (event !== null && event.target instanceof HTMLElement) {
      const coordsCollection = `${currentGame!.name}Coords`;
      await checkFirebaseForMatch(
        coordsCollection,
        itemClickPosition[0],
        itemClickPosition[1],
        event.target.dataset.id,
        gameItems!,
        setGameItems,
        handleClickErrorSpan
      );
      const checkIfAllItemsFound = (() => {
        if (gameItems.every((e) => e.isFound)) {
          setGameIsActive!(false);
          setTimeout(() => {
            endAudio.play();
          }, 700);
          setTimeout(() => {
            setUserModalIsVisible(true);
          }, 2000);
        }
      })();
    }
  }
  function handleShowItemDiv() {
    return gameItems!.filter((e) => e.isFound).map((e) => e.div);
  }

  function handleClickErrorSpan() {
    setClickErrorSpanIsVisible(true);
    setTimeout(() => {
      setClickErrorSpanIsVisible(false);
    }, 2000);
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
              {gameItemTextArr!.map((e, i) => (
                <DropdownLi
                  key={e.name + "item"}
                  data-id={e.name}
                  onClick={(event) => handleDropdownClick(event)}
                >
                  {e.text}
                </DropdownLi>
              ))}
            </ul>
          </DropdownContainer>
        </>
      )}
      {Item1 && <Item1 />}
      {Item2 && <Item2 />}
      {Item3 && <Item3 />}
      {Item4 && <Item4 />}
      {userModalIsVisible && (
        <UserModal
          userModalIsVisible={userModalIsVisible}
          setUserModalIsVisible={setUserModalIsVisible}
          currentGame={currentGame}
          currentGameUserData={currentGameUserData}
          setCurrentGameUserData={setCurrentGameUserData}
          setLeaderboardModalIsVisible={setLeaderboardModalIsVisible}
          time={time}
          userData={userData}
          userId={userId}
          setTimeErrorSpanIsVisible={setTimeErrorSpanIsVisible}
        />
      )}
      {leaderboardModalIsVisible && (
        <LeaderboardModal
          leaderboardModalIsVisible={leaderboardModalIsVisible}
          setLeaderboardModalIsVisible={setLeaderboardModalIsVisible}
          currentGame={currentGame}
          currentGameUserData={currentGameUserData}
        />
      )}
      {clickErrorSpanIsVisible && <ClickErrorSpan />}
      {timeErrorSpanIsVisible && <TimeErrorSpan />}
    </StyledCityImageContainer>
  );
}

//STYLED COMPONENTS//

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
  border: 8px solid ${(props) => props.currentGame!.color};
  @media screen and (max-width: 670px) {
    border: 4px solid ${(props) => props.currentGame!.color};
  }
`;

const DropdownContainer = styled(VFlex)<stylesInterface>`
  left: ${(props) =>
    props.dropdownPosition!.length && `${props.dropdownPosition![0]}px`};
  top: ${(props) =>
    props.dropdownPosition!.length && `${props.dropdownPosition![1]}px`};
  position: absolute;
  width: 132px;
  height: 106px;
  border: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  background-color: ${(props) => props.currentGame!.color};
  z-index: 2;
  animation: ${fadeIn} 0.3s ease-in;
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
const StyledCityImageContainer = styled(VFlex)`
  width: 100%;
  height: auto;
  position: relative;
`;
