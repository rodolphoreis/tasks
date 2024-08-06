import styles from "./dashboard.module.css";
import "../../src/styles/globals.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardComponent from "@/src/components/dashboard";

export const metadata = {
  title: "Tasks - Dashboard",
  description: "Painel de controle",
};

type User = {
  name: string;
  email: string;
  image?: string;
};

type Session = {
  user?: User;
  expires: string;
};

const Dashboard = async () => {
  const session = await auth();
  console.log(session);

  if (!session || !session.user) {
    return redirect("/login");
  }

  const normalizedSession: Session = {
    ...session,
    user: {
      name: session.user.name || "",
      email: session.user.email || "",
      image: session.user.image || "",
    },
  };

  return (
    <div className={styles.container}>
      <DashboardComponent session={normalizedSession} />
    </div>
  );
};

export default Dashboard;
