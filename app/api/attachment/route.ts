import { generateSignedUrl } from '@/storage';
import connect from '@/db';
import Attachment from '@/models/attachments';
import {  NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET() {
  connect();
  const attachments = await Attachment.find({}).exec();
  return NextResponse.json({
    attachments,
  })
}

export async function POST(req: Request) {
  connect();
  const { name, type, size } = await req.json();
  const key =  Math.random() + Date.now() + name;
  const publicUrl =  `${process.env.PUBLIC_ENDPOINT}/${key.replaceAll(" ", "%20")}`;
  console.log({name, type, size, publicUrl})
  const attachment = await Attachment.create({
    name, size, type, url:publicUrl,
  })
  const url = await generateSignedUrl(key);
  console.log(url);
  revalidatePath("/")
  return NextResponse.json({ attachment, url })
}
