import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";
import "../../styles/globals.css";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_logo}>
          <Link href="/" className={styles.logo}>
            <h1>
              Tasks <span className={styles.more}>+</span>
            </h1>
          </Link>
        </div>

        <div className={styles.container_login}>
          <h1 className={styles.title}>Entrar</h1>
          <button className={styles.button}>
            {" "}
            <FcGoogle /> Entrar com o Google
          </button>

          <div className={styles.divider}>
            <span className={styles.line}></span>
            <span className={styles.text}>ou</span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
