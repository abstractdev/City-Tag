import {
  doc,
  getDocs,
  deleteDoc,
  query,
  where,
  collection,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export function handleFormSubmit(
  event: any,
  setUserModalIsVisible: (arg0: boolean) => void,
  currentGame: any,
  time: number,
  setCurrentGameUserData: (arg0: any[]) => void,
  setLeaderboardModalIsVisible: (arg0: boolean) => void,
  userId: string,
  name: string,
  handleTimeErrorSpan: () => void
) {
  event.preventDefault();
  event.target.reset();
  setUserModalIsVisible(false);
  setTimeout(() => {
    const validateDeleteAndAddUserToFirebase = (async () => {
      //add name to firebase
      const userRef = doc(db, "users", userId);
      await setDoc(
        userRef,
        { name: !name.trim() ? "Anonymous" : name },
        { merge: true }
      );
      //gather all current game user data and add to array
      let currentGameUsers: any[] = [];
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("city", "==", `${currentGame.name}`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.data().name) {
          currentGameUsers.push(doc.data());
        }
      });
      //extract backend times from each user
      const times = currentGameUsers.map((e) => e.backendTime);
      const highestTime = Math.max(...times);
      // add user time to leaderboard if there is room
      if (time < highestTime && currentGameUsers.length <= 19) {
        setCurrentGameUserData([...currentGameUsers]);
        setLeaderboardModalIsVisible(true);
      }
      //if there is not enough room but the time qualifies, remove the highest time from array and firebase
      else if (time < highestTime && currentGameUsers.length === 20) {
        const removeHighest = (async () => {
          const highestUser = currentGameUsers.find(
            (e) => e.backendTime === highestTime
          );
          await deleteDoc(doc(db, "users", highestUser.id));
          const removeHighestUserFromArray = (() => {
            currentGameUsers = currentGameUsers.filter((e) => {
              return e.backendTime !== highestTime;
            });
          })();
          setCurrentGameUserData([...currentGameUsers]);
          setLeaderboardModalIsVisible(true);
        })();
        //otherwise remove user
      } else {
        await deleteDoc(doc(db, "users", userId));
        setLeaderboardModalIsVisible(false);
        handleTimeErrorSpan();
      }
    })();
  }, 100);
}
