
import { NextRequest, NextResponse } from 'next/server';
//  
// type ResponseData = {
//   message: string
// }
 
export async function GET(
  req: NextRequest,
) {
  req;
  return NextResponse.json({
    message: "Hell",
  })
}
