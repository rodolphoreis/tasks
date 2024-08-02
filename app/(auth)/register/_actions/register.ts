"use server";

import db from "@/src/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function register(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof email !== "string" ||
    email.trim() === "" ||
    typeof password !== "string" ||
    password.trim() === ""
  ) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  const user = await db.user.findUnique({
    where: { email },
  });

  if (user) {
    throw new Error("Email já cadastrado.");
  }

  await db.user.create({
    data: {
      name: name.trim(),
      email: email.trim(),
      password: hashSync(password.trim()),
    },
  });

  redirect("/login");
}
