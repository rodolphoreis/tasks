import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt";

import db from "@/src/lib/db";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) {
          return null;
        }

        const matches = compareSync(password, user.password);

        if (matches) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      },
    }),
  ],
});
