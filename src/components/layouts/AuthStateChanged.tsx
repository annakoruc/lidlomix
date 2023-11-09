import Loading from "@/app/loading";
import { auth } from "@/firebase/firebaseConfig";
import { getRandomRecipes } from "@/redux/features/getRecipesFromApiSlice";
import { setLoggedUser } from "@/redux/features/loggedUserSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export const AuthStateChanged = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useAppSelector((store) => store.loggedUser);

  useEffect(() => {
    dispatch(getRandomRecipes());
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(setLoggedUser({ email: userAuth.email!, uid: userAuth.uid }));
      }
    });
  }, []);

  if (loading) return <Loading />;
  return <>{children}</>;
};
