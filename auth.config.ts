import next from "next";
import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (!isLoggedIn && nextUrl.pathname.startsWith("/signup")) {
        return true;
      }
      return isLoggedIn;
    }
  },
  providers: [],
} satisfies NextAuthConfig;
