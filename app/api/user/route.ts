import connect from '@/db';
import {  NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import User from '@/models/users';
import { NextApiRequest } from 'next';
import { auth } from '@/auth';

export async function GET(req: NextApiRequest) {
await   connect();
  const session = await auth()
  console.log({session});
  const users = await User.find({}).exec();
  return NextResponse.json({
    users,
  })
}

export async function POST(req: Request) {
  try {
    connect();
    const { name, email, password } = await req.json();
    const user = await User.create({
      name, email, password
    })
    revalidatePath("/")
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error: error })
  }
}
