import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getDatabase = () => {
  const collectionRef = collection(db, "users");

  getDocs(collectionRef)
    .then((element) => {
      console.log(element.docs);
    })
    .catch((error) => {
      console.log(error);
    });
};
