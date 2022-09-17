import { useState, useEffect } from "react";
import { getDocs, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export function useGetUserData() {
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    let temp: any = [];
    const getUserDataFromFirebase = (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((e) => {
          if (
            e.data().hasOwnProperty("backendTime") &&
            e.data().hasOwnProperty("name")
          ) {
            if (!e.data().backendTime || !e.data().name) {
              deleteDoc(doc(db, "users", e.data().id));
            } else {
              temp.push(e.data());
            }
          }
        });
        setUserData([...temp]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return { userData };
}
