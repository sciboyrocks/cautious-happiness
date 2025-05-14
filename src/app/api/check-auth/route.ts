import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

export async function GET(request: NextRequest) {
  // Always return authenticated since password protection is disabled
  return NextResponse.json({ authenticated: true }, { status: 200 });
}
