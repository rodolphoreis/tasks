"use client";

import Textarea from "../textarea";
import styles from "./dashboardComponent.module.css";

const DashboardComponent = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1>Qual sua tarefa?</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Textarea placeholder="Digite qual sua tarefa" />
              <div className={styles.checkboxArea}>
                <input type="checkbox" className={styles.checkbox} />
                <label>Deixar tarefa pública? </label>
              </div>
              <button type="submit">Adicionar tarefa</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default DashboardComponent;
