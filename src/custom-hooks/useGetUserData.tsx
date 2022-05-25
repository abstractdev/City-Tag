import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export function useGetUserData() {
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    let temp: any = [];
    const getUserDataFromFirebase = (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        setUserData([...temp]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return { userData };
}
