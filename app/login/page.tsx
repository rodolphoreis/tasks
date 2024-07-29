import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";
import "../../src/styles/globals.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <h1 className={styles.title}>Login</h1>
        <button className={styles.button}>
          <FcGoogle /> Entrar com o Google
        </button>
      </div>
    </div>
  );
};

export default Login;
