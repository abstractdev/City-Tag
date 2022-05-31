import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { audio } from "./audio";

export async function checkFirebaseForMatch(
  coordsCollection: string,
  xItemClickPos: number,
  yItemClickPos: number,
  dropdownDataId: string | undefined,
  gameItems: {}[],
  setGameItems: (gameItems: any) => void,
  handleClickErrorSpan: () => void
) {
  const { rightAudio, wrongAudio } = audio();
  let coords: {
    name: string;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
  }[] = [];
  //store found items in an array
  const foundItems = gameItems
    .filter((e: any) => e.isFound)
    .map((e: any) => e.name);
  //store the firebase coordinates in an array of objects
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
  //filter coordinate objects for coordinates that need to be found
  const notFoundCoords = coords.filter(
    (e: any) => !foundItems.includes(e.name)
  );
  //check if coordinates are within item box
  //check if dropdown selection matches
  let thereIsAMatch = false;
  for (let i = 0; i < notFoundCoords.length; i++) {
    if (
      notFoundCoords[i].xMin < xItemClickPos &&
      xItemClickPos < notFoundCoords[i].xMax &&
      notFoundCoords[i].yMin < yItemClickPos &&
      yItemClickPos < notFoundCoords[i].yMax &&
      notFoundCoords[i].name === dropdownDataId
    ) {
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
      thereIsAMatch = true;
      break;
    }
  }
  if (!thereIsAMatch) {
    wrongAudio.play();
    handleClickErrorSpan();
  }
}
