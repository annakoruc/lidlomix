import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addToUserFavorites = async () => {
  const collectionRef = collection(db, "users");

  addDoc(collectionRef, { name: "Ania", surname: "Koruc" }).then((data) => {
    console.log(data);
  });
};
