"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        error.message = "Credenciais Inválidas";
        throw error;
      }
    }
  }
  redirect("/dashboard");
}
