import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export const logOut = () => {
  signOut(auth)
    .then(() => console.log("Sign out"))
    .catch((error) => {
      console.log("Sign Out doesynt work" + error.message);
    });
};
