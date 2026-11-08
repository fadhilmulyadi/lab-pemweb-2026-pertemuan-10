// src/app/api/login/route.js
import { NextResponse } from "next/server";

// TODO: buat endpoint login
export async function POST() {
  return NextResponse.json(
    { message: "TODO: endpoint login belum dibuat" },
    { status: 501 }
  );
}
