import { NextRequest, NextResponse } from "next/server";
import store from "./redux/store";
import { paths } from "./utils/paths";

// const privateRouters = [
//   paths.calendar,
//   paths.favorites,
//   paths.myProfile,
//   paths.shoppingList,
// ];

// const publicRoutes = [
//   paths.login,
//   paths.signup,
//   paths.forgotPassword,
//   paths.home,
// ];

export function middleware(request: NextRequest) {
  // const isUserLogged = store.getState().loggedUser.user;
  // console.log("check if user", isUserLogged);
  // if (
  //   isUserLogged !== null &&
  //   privateRouters.includes(request.nextUrl.pathname)
  // ) {
  //   const absoluteUrl = new URL(paths.home, request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteUrl.toString());
  // } else if (
  //   isUserLogged === null &&
  //   publicRoutes.includes(request.nextUrl.pathname)
  // ) {
  //   const absoluteUrl = new URL(paths.myProfile, request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteUrl.toString());
  // }
}
