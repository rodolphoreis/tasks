import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";
import "../../src/styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tasks - Login",
  description: "Página de login",
};
const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_login}>
          <h1 className={styles.title}>Login</h1>
          <button className={styles.button}>
            {" "}
            <FcGoogle /> Entrar com o Google
          </button>

          <div className={styles.divider}>
            <span className={styles.line}></span>
            <span className={styles.text}>ou</span>
            <span className={styles.line}></span>
          </div>
          <form>
            <label>
              <span className={styles.span}>Email</span>
              <input type="email" />
            </label>
            <label>
              <span className={styles.span}>Senha</span>
              <input type="password" />
            </label>
            <button type="submit" className={styles.button_submit}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
