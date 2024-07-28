import styles from "./dashboard.module.css";
import "../../src/styles/globals.css";

export const metadata = {
  title: "Tasks - Dashboard",
  description: "Painel de controle",
};
const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>dashboard</h2>
      </div>
    </>
  );
};

export default Dashboard;
