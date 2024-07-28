"use client";
import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";
import "../../src/styles/globals.css";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <h1 className={styles.title}>Login</h1>
        <button className={styles.button} onClick={() => signIn("google")}>
          <FcGoogle /> Entrar com o Google
        </button>
      </div>
    </div>
  );
};

export default Login;
