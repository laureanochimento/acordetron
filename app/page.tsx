"use client";

import { useState, useMemo } from "react";
import { canciones, Cancion } from "@/lib/canciones";
import { AcordesData } from "@/lib/acordesDB";
import SplashScreen from "@/components/SplashScreen";

type Cache = Record<string, AcordesData | "not_found">;

function renderLine(line: string) {
  const clean = line.replace(/^\s*\*\s+/, "").replace(/^\s*-\s+/, "");
  const parts = clean.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color: "#f5e6c8" }}>{part}</strong> : part
  );
}

// Detecta si una línea es de acordes (empieza con [X] o tiene acordes inline)
function isAcordeLine(line: string) {
  return /^\[/.test(line.trim()) || /^[A-G][#bmM0-9\/\s]*$/.test(line.trim());
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
      if (res.status === 404) {
        setCache((prev) => ({ ...prev, [key]: "not_found" }));
      } else {
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setCache((prev) => ({ ...prev, [key]: data }));
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al cargar");
    } finally {
      setCargando(false);
    }
  }

  const datosActivos = cancionActiva ? cache[cacheKey(cancionActiva)] : null;

  if (showSplash) return <SplashScreen onEnter={() => setShowSplash(false)} />;

  const bg        = "#120a03";
  const bgPanel   = "#1e1005";
  const bgCard    = "#2a1508";
  const border    = "#5a3010";
  const gold      = "#c8a060";
  const cream     = "#f5e6c8";
  const muted     = "#9a7a50";
  const folklorec = "#c8822a";
  const rockc     = "#8b1a1a";

  return (
    <div style={{ minHeight: "100vh", background: bg, color: cream, display: "flex", flexDirection: "column", fontFamily: "Georgia, serif" }}>
      <header style={{ borderBottom: `1px solid ${border}`, padding: "12px 24px", display: "flex", alignItems: "center", gap: 12, background: bgPanel }}>
        <button onClick={() => setShowSplash(true)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🎸</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: cream, fontFamily: "Georgia, serif", letterSpacing: 1 }}>Acordetrón</span>
        </button>
        <span style={{ color: muted, fontSize: 13, fontStyle: "italic", marginLeft: 4 }}>Folklore & Rock Nacional · Letra y Acordes</span>
        <div style={{ marginLeft: "auto", color: border, fontSize: 13 }}>{canciones.length} canciones</div>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 57px)" }}>
        <aside style={{ width: 300, borderRight: `1px solid ${border}`, display: "flex", flexDirection: "column", background: bgPanel }}>
          <div style={{ padding: 16, borderBottom: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 10 }}>
            <input type="text" placeholder="Buscar canción o artista..."
              value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
              style={{ background: bg, border: `1px solid ${border}`, borderRadius: 6, padding: "8px 12px", fontSize: 13, color: cream, outline: "none", fontFamily: "Georgia, serif" }}
            />
            <div style={{ display: "flex", gap: 6 }}>
              {(["todos", "folklore", "rock"] as const).map((g) => (
                <button key={g} onClick={() => { setGeneroFiltro(g); setArtistalFiltro("todos"); }}
                  style={{
                    flex: 1, padding: "6px 0", borderRadius: 6, fontSize: 11, fontWeight: 600,
                    cursor: "pointer", border: `1px solid ${border}`,
                    background: generoFiltro === g ? (g === "folklore" ? folklorec : g === "rock" ? rockc : "#3a2010") : "transparent",
                    color: generoFiltro === g ? cream : muted,
                    letterSpacing: 1, textTransform: "uppercase", fontFamily: "Georgia, serif",
                  }}>
                  {g === "todos" ? "Todos" : g === "folklore" ? "🪗 Folklore" : "🎸 Rock"}
                </button>
              ))}
            </div>
            <select value={artistaFiltro} onChange={(e) => setArtistalFiltro(e.target.value)}
              style={{ background: bg, border: `1px solid ${border}`, borderRadius: 6, padding: "8px 12px", fontSize: 13, color: cream, outline: "none", fontFamily: "Georgia, serif" }}>
              {artistasFiltrados.map((a) => (
                <option key={a} value={a} style={{ background: bgCard }}>{a === "todos" ? "Todos los artistas" : a}</option>
              ))}
            </select>
          </div>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {agrupadas.map(([artista, songs]) => (
              <div key={artista}>
                <div style={{ padding: "8px 16px", background: bg, color: gold, fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", borderBottom: `1px solid ${border}`, position: "sticky", top: 0, zIndex: 10 }}>
                  {artista}
                </div>
                {songs.map((c) => {
                  const isActive = cancionActiva?.titulo === c.titulo && cancionActiva?.artista === c.artista;
                  const cached = cache[cacheKey(c)];
                  const hasData = cached && cached !== "not_found";
                  const notFound = cached === "not_found";
                  return (
                    <button key={cacheKey(c)} onClick={() => abrirCancion(c)}
                      style={{
                        width: "100%", textAlign: "left", padding: "10px 16px",
                        borderBottom: `1px solid ${border}40`,
                        display: "flex", alignItems: "center", gap: 8,
                        background: isActive ? bgCard : "transparent",
                        cursor: "pointer", border: "none",
                        borderLeft: isActive ? `3px solid ${gold}` : "3px solid transparent",
                      }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: c.genero === "folklore" ? folklorec : rockc }} />
                      <span style={{ flex: 1, fontSize: 13, color: isActive ? cream : "#c8a87a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {c.titulo}
                      </span>
                      {hasData && <span style={{ fontSize: 10, color: "#6a8b3a" }}>✓</span>}
                      {notFound && <span style={{ fontSize: 10, color: muted }}>—</span>}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>

        <main style={{ flex: 1, overflowY: "auto", background: bg }}>
          {!cancionActiva ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎵</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: cream, marginBottom: 8, fontFamily: "Georgia, serif" }}>Seleccioná una canción</h2>
              <p style={{ color: muted, fontSize: 14, fontStyle: "italic", lineHeight: 1.6, maxWidth: 300 }}>
                Las canciones con <span style={{ color: "#6a8b3a" }}>✓</span> ya tienen acordes cargados. Las demás se van agregando.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 24, fontSize: 13, color: border }}>
                <span><span style={{ color: folklorec }}>●</span> Folklore: {canciones.filter(c => c.genero === "folklore").length}</span>
                <span><span style={{ color: rockc }}>●</span> Rock: {canciones.filter(c => c.genero === "rock").length}</span>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 720, margin: "0 auto", padding: 40 }}>
              <div style={{ marginBottom: 32 }}>
                <span style={{
                  fontSize: 11, padding: "3px 10px", borderRadius: 4, fontWeight: 600,
                  letterSpacing: 2, textTransform: "uppercase",
                  background: cancionActiva.genero === "folklore" ? `${folklorec}22` : `${rockc}22`,
                  color: cancionActiva.genero === "folklore" ? folklorec : "#e06060",
                  border: `1px solid ${cancionActiva.genero === "folklore" ? folklorec : rockc}44`,
                }}>
                  {cancionActiva.genero === "folklore"
                    ? `🪗 Folklore${cancionActiva.subgenero ? ` · ${cancionActiva.subgenero}` : ""}`
                    : "🎸 Rock Nacional"}
                </span>
                <h2 style={{ fontSize: 34, fontWeight: 700, color: cream, marginTop: 10, marginBottom: 4, fontFamily: "Georgia, serif", lineHeight: 1.2 }}>
                  {cancionActiva.titulo}
                </h2>
                <p style={{ color: gold, fontSize: 16, fontStyle: "italic", marginBottom: 16 }}>{cancionActiva.artista}</p>
                <div style={{ height: 1, background: `linear-gradient(to right, ${border}, transparent)` }} />
              </div>

              {cargando ? (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 0", gap: 12 }}>
                  <div style={{ width: 24, height: 24, border: `2px solid ${border}`, borderTopColor: gold, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  <p style={{ color: muted, fontSize: 14, fontStyle: "italic" }}>Cargando acordes...</p>
                </div>
              ) : error ? (
                <div style={{ background: `${rockc}22`, border: `1px solid ${rockc}`, borderRadius: 10, padding: 24, textAlign: "center" }}>
                  <p style={{ color: "#e06060", marginBottom: 12 }}>⚠️ {error}</p>
                  <button onClick={() => abrirCancion(cancionActiva)}
                    style={{ background: rockc, color: cream, border: "none", padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}>
                    Reintentar
                  </button>
                </div>
              ) : datosActivos === "not_found" ? (
                <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: 32, textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🎸</div>
                  <p style={{ color: cream, fontSize: 16, marginBottom: 8, fontFamily: "Georgia, serif" }}>Acordes no disponibles aún</p>
                  <p style={{ color: muted, fontSize: 13, fontStyle: "italic", lineHeight: 1.6 }}>
                    Esta canción todavía no está en la base de datos.<br/>
                    Se van agregando progresivamente.
                  </p>
                </div>
              ) : datosActivos ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Info */}
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {[
                      { label: "Tonalidad", val: (datosActivos as AcordesData).tonalidad },
                      { label: "Ritmo", val: (datosActivos as AcordesData).ritmo },
                      { label: "Dificultad", val: (datosActivos as AcordesData).dificultad },
                    ].map(({ label, val }) => (
                      <div key={label} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 8, padding: "8px 16px" }}>
                        <div style={{ fontSize: 9, color: muted, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
                        <div style={{ fontSize: 14, color: gold, fontWeight: 600 }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Acordes */}
                  <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: 24 }}>
                    <h3 style={{ fontSize: 10, color: gold, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>🎸 Acordes usados</h3>
                    <pre style={{ color: "#c8b090", fontSize: 13, fontFamily: "monospace", whiteSpace: "pre-wrap", lineHeight: 1.8, margin: 0 }}>
                      {(datosActivos as AcordesData).acordes}
                    </pre>
                  </div>

                  {/* Letra con acordes */}
                  <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: 24 }}>
                    <h3 style={{ fontSize: 10, color: gold, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>🎵 Letra con Acordes</h3>
                    <div style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 1 }}>
                      {(datosActivos as AcordesData).letra.split("\n").map((line, i) => {
                        const isSectionLabel = /^\[/.test(line.trim());
                        const isEmpty = line.trim() === "";
                        return (
                          <div key={i} style={{
                            color: isSectionLabel ? gold
                              : isAcordeLine(line) && !isSectionLabel ? "#7ec8a0"
                              : cream,
                            fontSize: isSectionLabel ? 11 : 13,
                            letterSpacing: isSectionLabel ? 2 : 0,
                            textTransform: isSectionLabel ? "uppercase" : "none",
                            marginBottom: isEmpty ? 12 : isSectionLabel ? 8 : 0,
                            marginTop: isSectionLabel ? 16 : 0,
                            lineHeight: isEmpty ? 0 : 1.7,
                          }}>
                            {isEmpty ? null : renderLine(line)}
                          </div>
                        );
                      })}
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
