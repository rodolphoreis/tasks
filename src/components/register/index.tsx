"use client";

import React, { useState } from "react";
import styles from "./Register.module.css";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

interface RegisterProps {
  onRegister: (name: string, email: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(name, email, password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container_title}>
          <FaUser className={styles.icon} />
          <div>
            <h2 className={styles.title}>Cadastre-se</h2>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            required
            className={styles.input}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Fazer Conta
        </button>
        <Link href="/login" className={styles.link_login}>
          {" "}
          Já tenho uma conta! Entrar
        </Link>
      </form>
    </div>
  );
};

export default Register;
