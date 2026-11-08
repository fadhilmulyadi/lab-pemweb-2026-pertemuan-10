// src/app/api/register/route.js
import { NextResponse } from "next/server";

// TODO: buat endpoint register
export async function POST() {
  return NextResponse.json(
    { message: "TODO: endpoint register belum dibuat" },
    { status: 501 }
  );
}
