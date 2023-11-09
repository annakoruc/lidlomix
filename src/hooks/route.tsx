import { useAppSelector } from "@/redux/store";
import { paths } from "@/utils/paths";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const withPublic = (Component: any) => {
  return function WithPublic(props: any) {
    const { user } = useAppSelector((store) => store.loggedUser);
    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push(paths.myProfile);
      }
    }, [user]);

    return <Component {...props} />;
  };
};

export const withPrivate = (Component: any) => {
  return function WithPublic(props: any) {
    const { user } = useAppSelector((store) => store.loggedUser);
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push(paths.home);
      }
    }, [user]);

    return <Component {...props} />;
  };
};
