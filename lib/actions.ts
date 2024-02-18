'use server';

import { signIn } from '@/auth';
import connect from '@/db';
import User from '@/models/users';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';
import { z } from 'zod';
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
        return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signUp(prevState: string | undefined, formData: FormData, ) {
  try {
    connect();
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }
    console.log(data)
    const parsedData = z.object({
      name: z.string().min(3),
      password: z.string().min(6),
      email: z.string().email()
    }).safeParse(data);
    console.log({parsedData})
    if (parsedData.success) {
      const { name, email, password } = parsedData.data;
      await User.create({
        name, email, password
      })
      revalidatePath("/")
      authenticate(prevState, formData)
    } else {
      return (parsedData.error.errors.map(er => er.path + ": " + er.message)[0]);
    }
  } catch (error) {
    return "Something went wrong!";
  }
}

