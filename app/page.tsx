"use client";

import { useState, useMemo } from "react";
import { canciones, Cancion } from "@/lib/canciones";
import SplashScreen from "@/components/SplashScreen";

interface AcordesData {
  letra: string;
  acordes: string;
  info: string;
}

type Cache = Record<string, AcordesData>;

function renderLine(line: string) {
  const clean = line.replace(/^\s*\*\s+/, "").replace(/^\s*-\s+/, "");
  const parts = clean.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-zinc-100">{part}</strong> : part
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [generoFiltro, setGeneroFiltro] = useState<"todos" | "folklore" | "rock">("todos");
  const [artistaFiltro, setArtistalFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [cancionActiva, setCancionActiva] = useState<Cancion | null>(null);
  const [cargando, setCargando] = useState(false);
  const [cache, setCache] = useState<Cache>({});
  const [error, setError] = useState("");

  const cancionesFiltradas = useMemo(() => {
    return canciones.filter((c) => {
      const matchGenero = generoFiltro === "todos" || c.genero === generoFiltro;
      const matchArtista = artistaFiltro === "todos" || c.artista === artistaFiltro;
      const matchBusqueda =
        busqueda === "" ||
        c.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.artista.toLowerCase().includes(busqueda.toLowerCase());
      return matchGenero && matchArtista && matchBusqueda;
    });
  }, [generoFiltro, artistaFiltro, busqueda]);

  const artistasFiltrados = useMemo(() => {
    const base = generoFiltro === "todos" ? canciones : canciones.filter((c) => c.genero === generoFiltro);
    return ["todos", ...new Set(base.map((c) => c.artista))].sort((a, b) =>
      a === "todos" ? -1 : b === "todos" ? 1 : a.localeCompare(b)
    );
  }, [generoFiltro]);

  const agrupadas = useMemo(() => {
    const grupos: Record<string, Cancion[]> = {};
    cancionesFiltradas.forEach((c) => {
      if (!grupos[c.artista]) grupos[c.artista] = [];
      grupos[c.artista].push(c);
    });
    return Object.entries(grupos).sort(([a], [b]) => a.localeCompare(b));
  }, [cancionesFiltradas]);

  const cacheKey = (c: Cancion) => `${c.titulo}__${c.artista}`;

  async function abrirCancion(cancion: Cancion) {
    setCancionActiva(cancion);
    setError("");
    const key = cacheKey(cancion);
    if (cache[key]) return;
    setCargando(true);
    try {
      const res = await fetch("/api/acordes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo: cancion.titulo, artista: cancion.artista }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setCache((prev) => ({ ...prev, [key]: data }));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al cargar");
    } finally {
      setCargando(false);
    }
  }

  const datosActivos = cancionActiva ? cache[cacheKey(cancionActiva)] : null;

  if (showSplash) {
    return <SplashScreen onEnter={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => setShowSplash(true)}
          className="text-2xl font-bold text-white tracking-tight hover:text-amber-400 transition-colors cursor-pointer text-left"
          style={{ fontFamily: "'Playfair Display', serif", background: "none", border: "none" }}
        >
          🎸 Acordetrón
        </button>
        <p className="text-zinc-500 text-sm">Folklore & Rock Nacional · Letra y Acordes</p>
        <div className="ml-auto text-zinc-600 text-sm">{canciones.length} canciones</div>
      </header>

      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 73px)" }}>
        <aside className="w-80 border-r border-zinc-800 flex flex-col">
          <div className="p-4 border-b border-zinc-800 space-y-3">
            <input
              type="text"
              placeholder="Buscar canción o artista..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
            <div className="flex gap-2">
              {(["todos", "folklore", "rock"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => { setGeneroFiltro(g); setArtistalFiltro("todos"); }}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                    generoFiltro === g
                      ? g === "folklore" ? "bg-amber-600 text-white"
                        : g === "rock" ? "bg-rose-700 text-white"
                        : "bg-zinc-700 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  {g === "todos" ? "Todos" : g === "folklore" ? "🪗 Folklore" : "🎸 Rock"}
                </button>
              ))}
            </div>
            <select
              value={artistaFiltro}
              onChange={(e) => setArtistalFiltro(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500"
            >
              {artistasFiltrados.map((a) => (
                <option key={a} value={a}>{a === "todos" ? "Todos los artistas" : a}</option>
              ))}
            </select>
          </div>

          <div className="flex-1 overflow-y-auto">
            {agrupadas.length === 0 ? (
              <p className="text-zinc-500 text-sm p-4">Sin resultados.</p>
            ) : (
              agrupadas.map(([artista, songs]) => (
                <div key={artista}>
                  <div className="px-4 py-2 bg-zinc-900 text-zinc-400 text-xs font-semibold uppercase tracking-wider sticky top-0 z-10">
                    {artista}
                  </div>
                  {songs.map((c) => {
                    const isActive = cancionActiva?.titulo === c.titulo && cancionActiva?.artista === c.artista;
                    const isCached = !!cache[cacheKey(c)];
                    return (
                      <button
                        key={cacheKey(c)}
                        onClick={() => abrirCancion(c)}
                        className={`w-full text-left px-4 py-3 border-b border-zinc-800/50 transition-colors flex items-center gap-2 ${
                          isActive ? "bg-zinc-700" : "hover:bg-zinc-800/60"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          c.genero === "folklore" ? "bg-amber-500" : "bg-rose-500"
                        }`} />
                        <span className="flex-1 text-sm truncate">{c.titulo}</span>
                        {isCached && <span className="text-xs text-green-600">✓</span>}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          {!cancionActiva ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="text-6xl mb-4">🎵</div>
              <h2 className="text-xl font-semibold text-zinc-300 mb-2">Seleccioná una canción</h2>
              <p className="text-zinc-500 text-sm max-w-xs">
                Elegí cualquier canción de la lista y Gemini te trae la letra con los acordes de guitarra al instante.
              </p>
              <div className="mt-6 flex gap-4 text-sm text-zinc-600">
                <span><span className="text-amber-500">●</span> Folklore: {canciones.filter(c => c.genero === "folklore").length} canciones</span>
                <span><span className="text-rose-500">●</span> Rock: {canciones.filter(c => c.genero === "rock").length} canciones</span>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto p-8">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    cancionActiva.genero === "folklore"
                      ? "bg-amber-900/50 text-amber-400"
                      : "bg-rose-900/50 text-rose-400"
                  }`}>
                    {cancionActiva.genero === "folklore"
                      ? `🪗 Folklore${cancionActiva.subgenero ? ` · ${cancionActiva.subgenero}` : ""}`
                      : "🎸 Rock Nacional"}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">{cancionActiva.titulo}</h2>
                <p className="text-zinc-400 text-lg">{cancionActiva.artista}</p>
              </div>

              {cargando ? (
                <div className="flex flex-col items-center py-20 gap-4">
                  <div className="w-10 h-10 border-2 border-zinc-600 border-t-amber-500 rounded-full animate-spin" />
                  <p className="text-zinc-400 text-sm">Buscando letra y acordes con Gemini...</p>
                </div>
              ) : error ? (
                <div className="bg-red-900/30 border border-red-700 rounded-xl p-6 text-center">
                  <p className="text-red-400 mb-3">⚠️ {error}</p>
                  <button onClick={() => abrirCancion(cancionActiva)}
                    className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Reintentar
                  </button>
                </div>
              ) : datosActivos ? (
                <div className="space-y-8">
                  {datosActivos.info && (
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                      <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Info</h3>
                      <div className="text-zinc-300 text-sm space-y-1">
                        {datosActivos.info.split("\n").filter(Boolean).map((line, i) => (
                          <p key={i}>{renderLine(line)}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {datosActivos.acordes && (
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                      <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">🎸 Acordes</h3>
                      <div className="text-zinc-300 text-sm font-mono space-y-1.5">
                        {datosActivos.acordes.split("\n").filter(Boolean).map((line, i) => (
                          <p key={i}>{renderLine(line)}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">🎵 Letra con Acordes</h3>
                    <div className="text-zinc-200 text-sm font-mono space-y-0.5">
                      {datosActivos.letra.split("\n").map((line, i) => (
                        <p key={i} className={line.trim() === "" ? "h-3" : "leading-relaxed"}>
                          {renderLine(line)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

