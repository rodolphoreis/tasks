"use client";

import Register from "@/src/components/register";
import React from "react";

const RegisterPage = () => {
  const handleRegister = (name: string, email: string, password: string) => {
    console.log("Registrando usuário:", { name, email, password });
  };

  return (
    <>
      <Register onRegister={handleRegister} />
    </>
  );
};

export default RegisterPage;
