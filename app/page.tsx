"use client";

import { useState, useMemo } from "react";
import { canciones, Cancion } from "@/lib/canciones";
import SplashScreen from "@/components/SplashScreen";

interface LinksData {
  cifraclub: string;
  ultimateguitar: string;
  letras: string;
  google: string;
}

type Cache = Record<string, LinksData>;

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

  const sources = [
    {
      key: "cifraclub" as const,
      label: "Cifra Club",
      desc: "Mejor para folklore argentino",
      icon: "🎸",
      accent: "#1a6b3a",
    },
    {
      key: "ultimateguitar" as const,
      label: "Ultimate Guitar",
      desc: "El más completo para rock",
      icon: "🤘",
      accent: "#1a3a8b",
    },
    {
      key: "letras" as const,
      label: "Letras.com",
      desc: "Letra completa de la canción",
      icon: "📜",
      accent: "#6b3a1a",
    },
    {
      key: "google" as const,
      label: "Buscar en Google",
      desc: "Acordes + artista en Google",
      icon: "🔍",
      accent: "#4a1a6b",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: bg, color: cream, display: "flex", flexDirection: "column", fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <header style={{ borderBottom: `1px solid ${border}`, padding: "12px 24px", display: "flex", alignItems: "center", gap: 12, background: bgPanel }}>
        <button onClick={() => setShowSplash(true)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🎸</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: cream, fontFamily: "Georgia, serif", letterSpacing: 1 }}>Acordetrón</span>
        </button>
        <span style={{ color: muted, fontSize: 13, fontStyle: "italic", marginLeft: 4 }}>Folklore & Rock Nacional</span>
        <div style={{ marginLeft: "auto", color: border, fontSize: 13 }}>{canciones.length} canciones</div>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", height: "calc(100vh - 57px)" }}>
        {/* Sidebar */}
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
                      <span style={{ flex: 1, fontSize: 13, color: isActive ? cream : "#c8a87a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>
                        {c.titulo}
                      </span>
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
              <h2 style={{ fontSize: 20, fontWeight: 700, color: cream, marginBottom: 8, fontFamily: "Georgia, serif" }}>Seleccioná una canción</h2>
              <p style={{ color: muted, fontSize: 14, fontStyle: "italic", lineHeight: 1.6, maxWidth: 280 }}>
                Elegí cualquier canción y te llevamos directo a los acordes reales en los mejores sitios.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 24, fontSize: 13, color: border }}>
                <span><span style={{ color: folklorec }}>●</span> Folklore: {canciones.filter(c => c.genero === "folklore").length}</span>
                <span><span style={{ color: rockc }}>●</span> Rock: {canciones.filter(c => c.genero === "rock").length}</span>
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 680, margin: "0 auto", padding: 40 }}>
              {/* Header canción */}
              <div style={{ marginBottom: 36 }}>
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
                  <p style={{ color: muted, fontSize: 14, fontStyle: "italic" }}>Preparando links...</p>
                </div>
              ) : error ? (
                <div style={{ background: `${rockc}22`, border: `1px solid ${rockc}`, borderRadius: 10, padding: 24, textAlign: "center" }}>
                  <p style={{ color: "#e06060", marginBottom: 12 }}>⚠️ {error}</p>
                  <button onClick={() => abrirCancion(cancionActiva)}
                    style={{ background: rockc, color: cream, border: "none", padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 13 }}>
                    Reintentar
                  </button>
                </div>
              ) : datosActivos ? (
                <div>
                  <p style={{ color: muted, fontSize: 13, fontStyle: "italic", marginBottom: 24 }}>
                    Elegí el sitio donde querés ver la letra y los acordes:
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {sources.map((s) => (
                      <a key={s.key} href={datosActivos[s.key]} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: "flex", flexDirection: "column", gap: 8,
                          background: bgCard, border: `1px solid ${border}`,
                          borderRadius: 10, padding: "20px 20px",
                          textDecoration: "none", transition: "border-color 0.15s",
                          cursor: "pointer",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = gold)}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 24 }}>{s.icon}</span>
                          <span style={{ fontSize: 15, fontWeight: 700, color: cream, fontFamily: "Georgia, serif" }}>{s.label}</span>
                        </div>
                        <p style={{ fontSize: 12, color: muted, fontStyle: "italic", margin: 0 }}>{s.desc}</p>
                        <div style={{ marginTop: 4, fontSize: 11, color: gold, letterSpacing: 1 }}>
                          Abrir →
                        </div>
                      </a>
                    ))}
                  </div>

                  <div style={{ marginTop: 32, background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: "16px 20px" }}>
                    <p style={{ fontSize: 11, color: muted, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Tip</p>
                    <p style={{ fontSize: 13, color: "#c8b090", lineHeight: 1.6, fontStyle: "italic" }}>
                      Para folklore argentino, <span style={{ color: gold }}>Cifra Club</span> suele tener la mejor cobertura.
                      Para rock nacional, probá <span style={{ color: gold }}>Ultimate Guitar</span> primero.
                    </p>
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


