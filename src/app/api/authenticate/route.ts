import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

export async function POST(request: NextRequest) {
  // Always authenticate since password protection is disabled
  const response = NextResponse.json({ success: true }, { status: 200 });
  
  response.headers.set(
    "Set-Cookie",
    cookie.serialize("authToken", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );

  return response;
}
