"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import Textarea from "../textarea";
import styles from "./dashboardComponent.module.css";
import { db } from "../../services/firebaseConection";
import Link from "next/link";

type User = {
  name: string;
  email: string;
  image?: string;
};

type Session = {
  user?: User;
  expires: string;
};

type DashboardComponentProps = {
  session: Session;
};

interface TaskProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  public: boolean;
  task: string;
  userId: string;
}

const DashboardComponent = ({ session }: DashboardComponentProps) => {
  const [input, setInput] = useState<string>("");
  const [publicTask, setPublicTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  useEffect(() => {
    async function loadTask() {
      const taskRef = await collection(db, "tarefas");
      const q = query(
        taskRef,
        where("userId", "==", session.user?.email),
        orderBy("createdAt", "desc")
      );
      onSnapshot(q, (snapshot) => {
        let lista = [] as TaskProps[];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            createdAt: doc.data().createdAt,
            updatedAt: doc.data().updatedAt,
            public: doc.data().public,
            task: doc.data().tarefa,
            userId: doc.data().userId,
          });
        });
        setTasks(lista);
      });
    }
    loadTask();
  }, [session.user?.email]);

  const handleRegisterTask = async (event: FormEvent) => {
    event.preventDefault();
    if (input === "") return;

    try {
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        public: publicTask,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: session.user?.email || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <div className={styles.contentForm}>
          <h1>Qual sua tarefa?</h1>
          <form onSubmit={handleRegisterTask} className={styles.form}>
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
  );
};

export default DashboardComponent;
