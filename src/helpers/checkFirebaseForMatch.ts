import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { audio } from "./audio";

export async function checkFirebaseForMatch(
  coordsCollection: string,
  xItemClickPos: number,
  yItemClickPos: number,
  dropdownDataId: string | undefined,
  gameItems: {}[],
  setGameItems: (gameItems: any) => void
) {
  const { rightAudio, wrongAudio, endAudio } = audio();
  let coords: {
    name: string;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
  }[] = [];
  const querySnapshot = await getDocs(collection(db, `${coordsCollection}`));
  querySnapshot.forEach((doc) => {
    coords.push({
      name: doc.data().name,
      xMin: doc.data().x[0],
      xMax: doc.data().x[1],
      yMin: doc.data().y[0],
      yMax: doc.data().y[1],
    });
  });
  //check if coordinates are within item box
  //check if dropdown selection matches
  for (let i = 0; i < coords.length; i++) {
    if (
      coords[i].xMin < xItemClickPos &&
      xItemClickPos < coords[i].xMax &&
      coords[i].yMin < yItemClickPos &&
      yItemClickPos < coords[i].yMax &&
      coords[i].name === dropdownDataId
    ) {
      console.log("match click");
      //set isFound for game item to true
      rightAudio.play();
      const gameItemsClone = [...gameItems];
      const handleSetGameItems = (() => {
        gameItemsClone.forEach((e: any) => {
          if (e.name === dropdownDataId) {
            e.isFound = true;
            setGameItems([...gameItemsClone]);
          }
        });
      })();
      break;
    }
  }
}
