"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./LoginBtn.module.css";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Bem vindo {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sair</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} className={styles.button}>
        Logar
      </button>
    </>
  );
}
