import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  const { titulo, artista } = await req.json();

  if (!titulo || !artista) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key no configurada" }, { status: 500 });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

    const prompt = `Eres un experto en música argentina. Para la canción "${titulo}" de "${artista}", proporciona:

1. La letra completa de la canción
2. Los acordes de guitarra con el cifrado indicando en qué parte de la letra va cada acorde

Formato de respuesta (usa exactamente estos separadores):

===LETRA===
[letra completa aquí, con los acordes indicados entre corchetes sobre cada verso]

===ACORDES===
[lista de acordes usados y su digitación básica en guitarra]

===INFO===
[tonalidad, ritmo/estilo, dificultad estimada: Fácil/Media/Difícil]

Si no conocés la canción con exactitud, indicalo al principio pero igual proporciona tu mejor aproximación.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Parse sections
    const letraMatch = text.match(/===LETRA===\s*([\s\S]*?)(?:===ACORDES===|$)/);
    const acordesMatch = text.match(/===ACORDES===\s*([\s\S]*?)(?:===INFO===|$)/);
    const infoMatch = text.match(/===INFO===\s*([\s\S]*?)$/);

    return NextResponse.json({
      letra: letraMatch?.[1]?.trim() || text,
      acordes: acordesMatch?.[1]?.trim() || "",
      info: infoMatch?.[1]?.trim() || "",
      raw: text,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
