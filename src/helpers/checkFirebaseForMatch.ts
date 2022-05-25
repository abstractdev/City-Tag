import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export async function checkFirebaseForMatch(
  coordsCollection: string,
  xItemClickPos: number,
  yItemClickPos: number,
  dropdownDataId: string | undefined
) {
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

  for (let i = 0; i < coords.length; i++) {
    if (
      coords[i].xMin < xItemClickPos &&
      xItemClickPos < coords[i].xMax &&
      coords[i].yMin < yItemClickPos &&
      yItemClickPos < coords[i].yMax &&
      coords[i].name === dropdownDataId
    ) {
      console.log("match click");
      break;
    }
  }
}
