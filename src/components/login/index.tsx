"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";
import Link from "next/link";
import login from "@/app/(auth)/login/_actions/login";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <form action={login} className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Sua senha"
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Entrar
          </button>
          <Link href="/register" className={styles.link_register}>
            {" "}
            Criar uma conta!
          </Link>
          <div className={styles.container_line}>
            <div className={styles.line}></div>
            <div className={styles.line_or}>ou</div>
            <div className={styles.line}></div>
          </div>
          <button type="submit" className={styles.button_google}>
            <FcGoogle /> Entrar com o Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
