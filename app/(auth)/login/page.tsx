"use client";
import Login from "@/src/components/login";
import React from "react";

const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Registrando usuário:", { email, password });
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
