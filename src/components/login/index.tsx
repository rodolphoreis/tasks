"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        setError("Login e/ou senha inválidos");
      } else {
        setError("Ocorreu um erro inesperado");
      }
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          {error && <p className={styles.error}>{error}</p>}
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
          <button
            type="submit"
            className={styles.button_google}
            onClick={() => signIn("google")}
          >
            <FcGoogle /> Entrar com o Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
