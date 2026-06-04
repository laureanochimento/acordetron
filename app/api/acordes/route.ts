import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { titulo, artista } = await req.json();

  if (!titulo || !artista) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const query = encodeURIComponent(`${titulo} ${artista}`);

  const links = {
    cifraclub: `https://www.cifraclub.com.br/busca/?q=${query}`,
    ultimateguitar: `https://www.ultimate-guitar.com/search.php?search_type=title&value=${query}`,
    letras: `https://www.letras.com/busca.php?q=${query}`,
    google: `https://www.google.com/search?q=${encodeURIComponent(`${titulo} ${artista} acordes guitarra`)}`,
  };

  return NextResponse.json({ links });
}
