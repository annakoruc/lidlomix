import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/login"}>Login</Link>
      <Link href={"/sign-up"}>Sign Up</Link>
    </main>
  );
}
