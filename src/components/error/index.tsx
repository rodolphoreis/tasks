import React from "react";
import styles from "./error_card.module.css";
import { main } from "ts-node/dist/bin";

interface ErrorCardProps {
  errorMessage: string;
  reset: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ errorMessage, reset }) => {
  return (
    <main className={styles.container_error}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ocorreu um erro</h1>
        <p className={styles.message}>{errorMessage}</p>
        <button onClick={reset} className={styles.button}>
          Tentar novamente
        </button>
      </div>
    </main>
  );
};

export default ErrorCard;
