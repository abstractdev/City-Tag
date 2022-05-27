import { doc, getDocs, deleteDoc, query, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export function handleFormSubmit(
  event: any,
  setUserModalIsVisible: (arg0: boolean) => void,
  currentGame: any,
  time: number,
  currentGameUserData: any,
  setCurrentGameUserData: (arg0: any[]) => void,
  setLeaderboardModalIsVisible: (arg0: boolean) => void
) {
  event.preventDefault();
  event.target.reset();
  setUserModalIsVisible(false);
  console.log("form submitted");
  setLeaderboardModalIsVisible(true);
  console.log(currentGameUserData);
  const currentGameScores = currentGameUserData.map(
    (e: { time: number }) => e.time
  );
  const highestTime = Math.max(...currentGameScores);
  setTimeout(() => {
    const getUserDataFromFirebase = (async () => {
      //validate score
      //add user score to leaderboard if there is room
      // setLeaderboardIsVisible(true);
      //if there is not enough room but the score qualifies, remove the highest time from array and firebase
      //otherwise remove user
    })();
  }, 100);
}
