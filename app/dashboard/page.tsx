import styles from "./dashboard.module.css";
import "../../src/styles/globals.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Tasks - Dashboard",
  description: "Painel de controle",
};
const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>dashboard</h2>
      </div>
    </>
  );
};

export default Dashboard;
