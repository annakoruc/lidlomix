import { auth } from "@/firebase/firebaseConfig";
import { loggedOutUser } from "@/redux/features/loggedUserSlice";
import { AppDispatch } from "@/redux/store";
import { paths } from "@/utils/paths";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { useModalWithInformation } from "./useModalWithInformation";
import { mdiEmailFastOutline, mdiEmailRemoveOutline } from "@mdi/js";

export const useFirebaseAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { openModal } = useModalWithInformation();

  const loginWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user.emailVerified) {
          router.push(paths.recipes);
        } else {
          console.log("Account not verified");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        dispatch(loggedOutUser());
        router.push(paths.recipes);
      })
      .catch((error) => {
        console.log("Sign Out doesn't work" + error.message);
      });
  };

  const signUpWithEmail = async (
    registerEmail: string,
    registerPassword: string
  ) => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(() => {
        sendEmailVerification(auth.currentUser!);
        openModal(
          mdiEmailFastOutline,
          "Verification email was sent. Check your email"
        );
        setTimeout(() => router.push(`/login`), 3000);
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          openModal(mdiEmailRemoveOutline, "Email busy try another");
        } else {
          throw new Error(error.message);
        }
      });
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();

    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...});

        console.log(errorMessage);
      });
  };

  return { logOut, loginWithGoogle, loginWithEmail, signUpWithEmail };
};
