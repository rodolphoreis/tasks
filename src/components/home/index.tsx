import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_video}>
        <video src="/video.mp4" className={styles.video} autoPlay muted></video>
      </div>
      <div className={styles.container_title}>
        <h1 className={styles.title}>
          Sistema para você organizar seus estudos e tarefas
        </h1>
        <p className={styles.subtitle}>
          Crie e organize suas tarefas com mais facilidade
        </p>
      </div>
      <div className={styles.container_buttons}>
        <button className={styles.button}>+ 7 mil posts</button>
        <button className={styles.button}>+ 1 mil comentários</button>
      </div>
    </div>
  );
};

export default HomePage;
