"use client";

import { FiShare2 } from "react-icons/fi";
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
              <button type="submit" className={styles.button}>
                Adicionar tarefa
              </button>
            </form>
          </div>
        </section>
        <section className={styles.taskContainer}>
          <h1>Minhas Tarefas</h1>
          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>PUBLICO</label>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color="#3183ff" />
                Compartilhar
              </button>
            </div>
            <div className={styles.taskContent}>
              <p>Minha primeira tarefa de exemplo</p>
              <button className={styles.shareButton}>
                <FiShare2 size={22} color="#ea3140" />
                Compartilhar
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default DashboardComponent;
