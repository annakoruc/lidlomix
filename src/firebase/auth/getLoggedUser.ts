import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const getLoggedUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUid = user.uid;
      console.log("user:", user, userUid);
    } else {
      console.log("User is signed out");
    }
  });
};
