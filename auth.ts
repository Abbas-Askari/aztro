import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import credentials from 'next-auth/providers/credentials'; 
import { z } from 'zod';
import User from './models/users';
import connect from './db';
import { UserType } from './types/user';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [credentials({
    async authorize(credentials) {
      const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);
      if (parsedCredentials.success) {
        await connect()
        const { email, password } = parsedCredentials.data;
        const user: UserType & {toJSON: () => {}} = await User.findOne({ email }).exec();
        console.log({user})
        if (!user) return null;
        if (user.password !== password) return null;
        console.log("User is: ", user);
        return user.toJSON();
      }

      return null;
    }
 
  })]
});
