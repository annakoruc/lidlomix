import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import store from "@/redux/store";
import { loggedOutUser, setLoggedUser } from "@/redux/features/loggedUserSlice";

export const getLoggedUser = async () => {
  await onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      store.dispatch(
        setLoggedUser({ email: userAuth.email!, uid: userAuth.uid })
      );
      console.log(userAuth.email);
      console.log("user", store.getState().loggedUser.user);
    } else {
      store.dispatch(loggedOutUser());
    }
  });
};
