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
    i % 2 === 1 ? <strong key={i} style={{ color: "#f5e6c8" }}>{part}</strong> : part
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

  // Paleta del afiche
  const bg       = "#120a03";
  const bgPanel  = "#1e1005";
  const bgCard   = "#2a1508";
  const border   = "#5a3010";
  const borderHover = "#c8a060";
  const gold     = "#c8a060";
  const cream    = "#f5e6c8";
  const muted    = "#9a7a50";
  const folklore = "#c8822a";
  const rock     = "#8b1a1a";

  return (
    <div style={{ minHeight: "100vh", background: bg, color: cream, display: "flex", flexDirection: "column", fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <header style={{ borderBottom: `1px solid ${border}`, padding: "12px 24px", display: "flex", alignItems: "center", gap: 12, background: bgPanel }}>
        <button
          onClick={() => setShowSplash(true)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <span style={{ fontSize: 22 }}>🎸</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: cream, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: 1 }}>Acordetrón</span>
        </button>
        <span style={{ color: muted, fontSize: 13, fontStyle: "italic", marginLeft: 4 }}>Folklore & Rock Nacional · Letra y Acordes</span>
        <div style={{ marginLeft: "auto", color: border, fontSize: 13 }}>{canciones.length} canciones</div>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 57px)" }}>
        {/* Sidebar */}
        <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", background: bgPanel }}>
          {/* Filtros */}
          <div style={{ padding: 16, borderBottom: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              type="text"
              placeholder="Buscar canción o artista..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                background: bg, border: `1px solid ${border}`, borderRadius: 6,
                padding: "8px 12px", fontSize: 13, color: cream, outline: "none",
                fontFamily: "Georgia, serif",
              }}
            />
            <div style={{ display: "flex", gap: 6 }}>
              {(["todos", "folklore", "rock"] as const).map((g) => (
                <button key={g} onClick={() => { setGeneroFiltro(g); setArtistalFiltro("todos"); }}
                  style={{
                    flex: 1, padding: "6px 0", borderRadius: 6, fontSize: 11,
                    fontWeight: 600, cursor: "pointer", border: `1px solid ${border}`,
                    background: generoFiltro === g
                      ? g === "folklore" ? folklore : g === "rock" ? rock : "#3a2010"
                      : "transparent",
                    color: generoFiltro === g ? cream : muted,
                    letterSpacing: 1, textTransform: "uppercase", fontFamily: "Georgia, serif",
                    transition: "all 0.15s",
                  }}
                >
                  {g === "todos" ? "Todos" : g === "folklore" ? "🪗 Folklore" : "🎸 Rock"}
                </button>
              ))}
            </div>
            <select
              value={artistaFiltro}
              onChange={(e) => setArtistalFiltro(e.target.value)}
              style={{
                background: bg, border: `1px solid ${border}`, borderRadius: 6,
                padding: "8px 12px", fontSize: 13, color: cream, outline: "none",
                fontFamily: "Georgia, serif",
              }}
            >
              {artistasFiltrados.map((a) => (
                <option key={a} value={a} style={{ background: bgCard }}>{a === "todos" ? "Todos los artistas" : a}</option>
              ))}
            </select>
          </div>

          {/* Lista */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {agrupadas.length === 0 ? (
              <p style={{ color: muted, fontSize: 13, padding: 16 }}>Sin resultados.</p>
            ) : agrupadas.map(([artista, songs]) => (
              <div key={artista}>
                <div style={{
                  padding: "8px 16px", background: bg,
                  color: gold, fontSize: 10, fontWeight: 700,
                  letterSpacing: 3, textTransform: "uppercase",
                  borderBottom: `1px solid ${border}`,
                  position: "sticky", top: 0, zIndex: 10,
                  fontFamily: "Georgia, serif",
                }}>
                  {artista}
                </div>
                {songs.map((c) => {
                  const isActive = cancionActiva?.titulo === c.titulo && cancionActiva?.artista === c.artista;
                  const isCached = !!cache[cacheKey(c)];
                  return (
                    <button key={cacheKey(c)} onClick={() => abrirCancion(c)}
                      style={{
                        width: "100%", textAlign: "left", padding: "10px 16px",
                        borderBottom: `1px solid ${border}40`,
                        display: "flex", alignItems: "center", gap: 8,
                        background: isActive ? bgCard : "transparent",
                        cursor: "pointer", border: "none",
                        borderLeft: isActive ? `3px solid ${gold}` : "3px solid transparent",
                        transition: "all 0.15s",
                      }}
                    >
                      <span style={{
                        width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                        background: c.genero === "folklore" ? folklore : rock,
                      }} />
                      <span style={{ flex: 1, fontSize: 13, color: isActive ? cream : "#c8a87a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>
                        {c.titulo}
                      </span>
                      {isCached && <span style={{ fontSize: 10, color: "#6a8b3a" }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, overflowY: "auto", background: bg }}>
          {!cancionActiva ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎵</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: cream, marginBottom: 8, fontFamily: "'Playfair Display', Georgia, serif" }}>Seleccioná una canción</h2>
              <p style={{ color: muted, fontSize: 14, maxWidth: 280, fontStyle: "italic", lineHeight: 1.6 }}>
                Elegí cualquier canción de la lista y Gemini te trae la letra con los acordes al instante.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 24, fontSize: 13, color: border }}>
                <span><span style={{ color: folklore }}>●</span> Folklore: {canciones.filter(c => c.genero === "folklore").length} canciones</span>
                <span><span style={{ color: rock }}>●</span> Rock: {canciones.filter(c => c.genero === "rock").length} canciones</span>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 720, margin: "0 auto", padding: 40 }}>
              {/* Canción header */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{
                    fontSize: 11, padding: "3px 10px", borderRadius: 4, fontWeight: 600,
                    letterSpacing: 2, textTransform: "uppercase",
                    background: cancionActiva.genero === "folklore" ? `${folklore}22` : `${rock}22`,
                    color: cancionActiva.genero === "folklore" ? folklore : "#e06060",
                    border: `1px solid ${cancionActiva.genero === "folklore" ? folklore : rock}44`,
                    fontFamily: "Georgia, serif",
                  }}>
                    {cancionActiva.genero === "folklore"
                      ? `🪗 Folklore${cancionActiva.subgenero ? ` · ${cancionActiva.subgenero}` : ""}`
                      : "🎸 Rock Nacional"}
                  </span>
                </div>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: cream, marginBottom: 4, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>
                  {cancionActiva.titulo}
                </h2>
                <p style={{ color: gold, fontSize: 16, fontStyle: "italic" }}>{cancionActiva.artista}</p>
                <div style={{ marginTop: 12, height: 1, background: `linear-gradient(to right, ${border}, transparent)` }} />
              </div>

              {cargando ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0", gap: 16 }}>
                  <div style={{
                    width: 40, height: 40, border: `2px solid ${border}`,
                    borderTopColor: gold, borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }} />
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  <p style={{ color: muted, fontSize: 14, fontStyle: "italic" }}>Buscando letra y acordes con Gemini...</p>
                </div>
              ) : error ? (
                <div style={{ background: `${rock}22`, border: `1px solid ${rock}`, borderRadius: 10, padding: 24, textAlign: "center" }}>
                  <p style={{ color: "#e06060", marginBottom: 12 }}>⚠️ {error}</p>
                  <button onClick={() => abrirCancion(cancionActiva)}
                    style={{ background: rock, color: cream, border: "none", padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 13, fontFamily: "Georgia, serif" }}>
                    Reintentar
                  </button>
                </div>
              ) : datosActivos ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {datosActivos.info && (
                    <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: 16 }}>
                      <h3 style={{ fontSize: 10, color: gold, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10, fontFamily: "Georgia, serif" }}>Info</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        {datosActivos.info.split("\n").filter(Boolean).map((line, i) => (
                          <p key={i} style={{ color: "#c8b090", fontSize: 13, lineHeight: 1.6 }}>{renderLine(line)}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {datosActivos.acordes && (
                    <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: 24 }}>
                      <h3 style={{ fontSize: 10, color: gold, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Georgia, serif" }}>🎸 Acordes</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {datosActivos.acordes.split("\n").filter(Boolean).map((line, i) => (
                          <p key={i} style={{ color: "#c8b090", fontSize: 13, fontFamily: "monospace", lineHeight: 1.7 }}>{renderLine(line)}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: 24 }}>
                    <h3 style={{ fontSize: 10, color: gold, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Georgia, serif" }}>🎵 Letra con Acordes</h3>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {datosActivos.letra.split("\n").map((line, i) => (
                        <p key={i} style={{
                          color: line.trim() === "" ? "transparent" : cream,
                          fontSize: 13, fontFamily: "monospace",
                          lineHeight: line.trim() === "" ? "0.8" : "1.9",
                          marginBottom: line.trim() === "" ? 8 : 0,
                        }}>
                          {line.trim() === "" ? "·" : renderLine(line)}
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

