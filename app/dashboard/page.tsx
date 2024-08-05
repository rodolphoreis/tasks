import styles from "./dashboard.module.css";
import "../../src/styles/globals.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardComponent from "@/src/components/dashboard";

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
        <DashboardComponent />
      </div>
    </>
  );
};

export default Dashboard;
