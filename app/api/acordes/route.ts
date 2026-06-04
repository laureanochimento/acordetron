import { NextRequest, NextResponse } from "next/server";
import { acordesDB } from "@/lib/acordesDB";

export async function POST(req: NextRequest) {
  const { titulo, artista } = await req.json();
  if (!titulo || !artista) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }
  const key = `${titulo}__${artista}`;
  const data = acordesDB[key];
  if (!data) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
