"use client";
import Login from "@/src/components/login";
import React from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    console.log("Registrando usuário:", { email, password });
  };
  const session = useSession();
  console.log(session);
  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
