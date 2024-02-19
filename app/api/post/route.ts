import { auth } from "@/auth";
import connect from "@/db";
import Post from "@/models/posts";
import { UserType } from "@/types/user";
import { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextApiRequest) {
  const posts = await Post.find({}).populate('user').exec();
  return NextResponse.json({
    posts
  })
}


export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.redirect(
      "/login"
    );
  }
  const user: UserType = session.user as UserType;
  const { caption, attachments } = await req.json();
  console.log({ caption, attachments, user: session.user })
  await connect();
  const post = await Post.create({
    caption, attachments, user: user._id.toString()
  })
  revalidatePath('/');
  return NextResponse.json({ caption, attachments, post })
}
