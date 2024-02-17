
import connect from '@/db';
import Attachment from '@/models/attachments';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(
  req: NextRequest,
) {
  req;
  return NextResponse.json({
    message: "Hell",
  })
}


export async function POST(req: Request) {
  connect();
  const {name, type, size} = await req.json();
  const attachment = await Attachment.create({
    name, size, type, url: name
  })
 return NextResponse.json({attachment}) 
}
