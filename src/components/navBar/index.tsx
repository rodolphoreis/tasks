import Link from "next/link";
import styles from "./nav.module.css";

const NavBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.section}>
        <Link href="/" className={styles.logo}>
          <h1>
            Tasks <span className={styles.more}>+</span>
          </h1>
        </Link>
        <Link href="/login" className={styles.button}>
          Logar
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
