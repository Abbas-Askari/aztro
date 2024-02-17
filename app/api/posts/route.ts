import { NextRequest, NextResponse } from "next/server";
import connect from "@/db";
export function GET(req: NextRequest) {
  req;
  connect();
  return new NextResponse({
    req: "Noice"
  })
}

