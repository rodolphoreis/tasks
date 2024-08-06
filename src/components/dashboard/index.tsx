"use client";

import { FiShare2 } from "react-icons/fi";
import Textarea from "../textarea";
import styles from "./dashboardComponent.module.css";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

const DashboardComponent = () => {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  console.log(publicTask);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1>Qual sua tarefa?</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Textarea
                value={input}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                  setInput(event.target.value)
                }
                placeholder="Digite qual sua tarefa"
              />
              <div className={styles.checkboxArea}>
                <input
                  type="checkbox"
                  checked={publicTask}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPublicTask(event.target.checked)
                  }
                  className={styles.checkbox}
                />
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
              </button>
            </div>
            <div className={styles.taskContent}>
              <p>Minha primeira tarefa de exemplo</p>
              <button className={styles.trashButton}>
                <FaTrash size={18} color="#ea3140" />
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default DashboardComponent;
