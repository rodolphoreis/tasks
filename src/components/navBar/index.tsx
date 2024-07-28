"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "./nav.module.css";

const NavBar = () => {
  const { data: session, status } = useSession();

  return (
    <header className={styles.container}>
      <div className={styles.section}>
        <Link href="/" className={styles.logo}>
          <h1>
            Tasks <span className={styles.more}>+</span>
          </h1>
        </Link>
        <div className={styles.container_button}>
          <Link href="/dashboard" className={styles.button}>
            Dashboard
          </Link>
          <Link href="/login" className={styles.button}>
            Minha Conta
          </Link>
        </div>
        {status === "loading" ? (
          <></>
        ) : session ? (
          <button onClick={() => signOut()}>Olá {session?.user?.name}</button>
        ) : (
          <button onClick={() => signIn("google")}>Entrar</button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
