import Textarea from "../textarea";
import styles from "./dashboardComponent.module.css";

const DashboardComponent = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Qual sua tarefa?</h1>
        <Textarea />
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <label>Deixar tarefa público</label>
        </div>
        <button type="button" className={styles.button}>
          Registra
        </button>
      </main>
    </>
  );
};

export default DashboardComponent;
