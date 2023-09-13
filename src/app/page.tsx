import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import { getSomeRecipes } from "@/axios/someRecipesGet";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getSomeRecipes("chicken");
  }, []);
  return (
    <main>
      <Link href={"/login"}>Login</Link>
      <Link href={"/sign-up"}>Sign Up</Link>
    </main>
  );
}
