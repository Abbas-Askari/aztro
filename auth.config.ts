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
    },
    jwt({ token, user, account }) {
      console.log({token, user, account});
      if (user) {
        token.accessToken = account!.access_token;
        token.id = user.id;
        token.user = user;
      }
      return token;
    },
    session({session, token}) {
      session.user = token.user;
      return session;
    }
  },
  providers: [],
} satisfies NextAuthConfig;
