import { auth } from "@/firebase/firebaseConfig";
import { loggedOutUser, setLoggedUser } from "@/redux/features/loggedUserSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { paths } from "@/utils/paths";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const privateRouters = [
  paths.calendar,
  paths.favorites,
  paths.myProfile,
  paths.shoppingList,
];

const publicRoutes = [
  paths.login,
  paths.signUp,
  paths.forgotPassword,
  paths.home,
];

export const useIsUserLogged = () => {
  const user = useAppSelector((store) => store.loggedUser.user);
  const location = usePathname();
  const router = useRouter();

  //   const dispatch = useDispatch<AppDispatch>();

  const checkIfUserIsLogged = async () => {
    if (user !== null && publicRoutes.includes(location)) {
      router.push(paths.myProfile);
      // const absoluteUrl = new URL(paths.home, request.nextUrl.origin);
      // return NextResponse.redirect(absoluteUrl.toString());
    } else if (user === null && privateRouters.includes(location)) {
      router.push(paths.home);
      // const absoluteUrl = new URL(paths.myProfile, request.nextUrl.origin);
      // return NextResponse.redirect(absoluteUrl.toString());
    }
    // onAuthStateChanged(auth, (userAuth) => {
    //     if (userAuth) {
    //       dispatch(
    //         setLoggedUser({ email: userAuth.email!, uid: userAuth.uid })
    //       );
    //       console.log(userAuth.email);
    //       console.log("user", store.getState().loggedUser.user);
    //     } else {
    //       dispatch(loggedOutUser());
    //     }
    //   });
  };

  return { checkIfUserIsLogged };
};
