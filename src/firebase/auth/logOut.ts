import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const logOut = async () => {
  await signOut(auth)
    .then(() => console.log("Sign out"))
    .catch((error) => {
      console.log("Sign Out doesn't work" + error.message);
    });
};
