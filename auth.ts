import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        console.log(credentials);
        return null;
      },
    }),
  ],
});
