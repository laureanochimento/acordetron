"use client";

interface Props {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IM+Fell+English:ital@0;1&display=swap');

        .splash {
          width: 100%; min-height: 100vh;
          background: #1a0f05;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 2rem 1rem 1.5rem;
          font-family: 'Playfair Display', serif;
        }
        .splash-texture {
          position: absolute; inset: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 6px);
          pointer-events: none;
        }
        .splash-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
        }
        .splash-banner-top {
          font-size: 11px; letter-spacing: 5px; color: #c8a060;
          text-transform: uppercase; font-family: 'IM Fell English', serif;
          opacity: 0; animation: splashFadeDown 0.6s 0.2s forwards;
          margin-bottom: 4px; position: relative; z-index: 2;
        }
        .splash-banner-top::before, .splash-banner-top::after { content: '✦'; margin: 0 10px; font-size: 9px; }
        .splash-title-wrap {
          position: relative; z-index: 2; text-align: center;
          opacity: 0; animation: splashFadeDown 0.7s 0.4s forwards;
        }
        .splash-title-main {
          font-size: clamp(48px, 10vw, 88px); font-weight: 900;
          color: #f5e6c8; letter-spacing: -1px; line-height: 0.9;
          text-shadow: 0 2px 20px rgba(200,120,30,0.4);
          font-family: 'Playfair Display', serif;
        }
        .splash-title-sub {
          font-size: clamp(10px, 2vw, 13px); letter-spacing: 6px; color: #c8a060;
          text-transform: uppercase; font-family: 'IM Fell English', serif;
          margin-top: 4px; font-style: italic;
        }
        .splash-ornament {
          color: #8b5a1a; font-size: 18px; letter-spacing: 4px;
          opacity: 0; animation: splashFadeIn 0.5s 0.7s forwards;
          position: relative; z-index: 2; margin: 8px 0;
        }
        .splash-scene {
          position: relative; z-index: 2;
          display: flex; align-items: flex-end; justify-content: center;
          opacity: 0; animation: splashFadeUp 0.8s 0.9s forwards;
          margin: 8px 0 4px;
        }
        .splash-footer {
          width: 100%; background: #2a1508;
          border-top: 1px solid #8b5a1a; border-bottom: 1px solid #8b5a1a;
          padding: 6px 0; text-align: center;
          font-size: 11px; letter-spacing: 3px; color: #c8a060;
          text-transform: uppercase; font-family: 'IM Fell English', serif;
          position: relative; z-index: 2;
          opacity: 0; animation: splashFadeIn 0.5s 1.4s forwards;
        }
        .splash-btn {
          position: relative; z-index: 2; margin-top: 14px;
          background: transparent; border: 1.5px solid #c8a060;
          color: #f5e6c8; font-family: 'IM Fell English', serif;
          font-size: 14px; letter-spacing: 3px; text-transform: uppercase;
          padding: 10px 32px; cursor: pointer;
          opacity: 0; animation: splashFadeIn 0.6s 1.6s forwards;
          transition: background 0.2s, color 0.2s; border-radius: 2px;
        }
        .splash-btn:hover { background: #c8a060; color: #1a0f05; }
        .splash-btn::before { content: '♪  '; }
        .splash-btn::after  { content: '  ♪'; }
        .splash-corner {
          position: absolute; z-index: 2; color: #5a3010; font-size: 24px;
          opacity: 0; animation: splashFadeIn 0.4s 1.8s forwards;
        }
        .splash-corner.tl { top: 12px; left: 16px; }
        .splash-corner.tr { top: 12px; right: 16px; transform: scaleX(-1); }
        .splash-corner.bl { bottom: 12px; left: 16px; transform: scaleY(-1); }
        .splash-corner.br { bottom: 12px; right: 16px; transform: scale(-1,-1); }
        .float1 { animation: splashFloat1 3s ease-in-out infinite 2.2s; }
        .float2 { animation: splashFloat2 3.5s ease-in-out infinite 2.5s; }

        @keyframes splashFadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes splashFloat1 {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-6px); }
        }
        @keyframes splashFloat2 {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes splashSway {
          0%,100% { transform: rotate(-2deg); }
          50%     { transform: rotate(2deg); }
        }
        @keyframes splashSip {
          0%,100% { transform: rotate(-5deg) translateY(0); }
          40%     { transform: rotate(5deg) translateY(-4px); }
        }
        @keyframes splashSteam {
          0%   { opacity: 0.8; transform: translateY(0) scaleX(1); }
          100% { opacity: 0;   transform: translateY(-12px) scaleX(1.5); }
        }
        @keyframes splashRaiseWine {
          0%,100% { transform: rotate(5deg) translateY(0); }
          50%     { transform: rotate(15deg) translateY(-5px); }
        }
        @keyframes splashBobHead {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
      `}</style>

      <div className="splash">
        <div className="splash-texture" />
        <div className="splash-vignette" />

        <span className="splash-corner tl">❧</span>
        <span className="splash-corner tr">❧</span>
        <span className="splash-corner bl">❧</span>
        <span className="splash-corner br">❧</span>

        <div className="splash-banner-top">Folklore & Rock Nacional</div>

        <div className="splash-title-wrap">
          <div className="splash-title-main">ACORDETRÓN</div>
          <div className="splash-title-sub">Letras & Acordes de Guitarra</div>
        </div>

        <div className="splash-ornament">— ✦ ✦ ✦ —</div>

        <div className="splash-scene">
          {/* Personaje izquierdo: serio con el mate */}
          <div className="float1" style={{ marginRight: -10 }}>
            <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ps1" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#8b2010" strokeWidth="3"/>
                </pattern>
              </defs>
              <ellipse cx="70" cy="145" rx="52" ry="55" fill="#4a2010"/>
              <ellipse cx="70" cy="145" rx="52" ry="55" fill="url(#ps1)" opacity="0.4"/>
              <rect x="42" y="105" width="56" height="70" rx="8" fill="#e8d8b0"/>
              <rect x="42" y="130" width="56" height="12" rx="3" fill="#8b1a1a"/>
              <rect x="42" y="133" width="56" height="3" fill="#c8a060" opacity="0.6"/>
              <g style={{ animation: "splashBobHead 2.5s ease-in-out infinite 2s", transformOrigin: "70px 80px" }}>
                <ellipse cx="70" cy="72" rx="28" ry="32" fill="#c8956a"/>
                <ellipse cx="70" cy="48" rx="30" ry="8" fill="#2a2a2a"/>
                <ellipse cx="68" cy="44" rx="26" ry="10" fill="#1a1a1a"/>
                <ellipse cx="62" cy="70" rx="4" ry="4.5" fill="#f5e6c8"/>
                <ellipse cx="78" cy="70" rx="4" ry="4.5" fill="#f5e6c8"/>
                <circle cx="62" cy="71" r="2.5" fill="#2a1a0a"/>
                <circle cx="78" cy="71" r="2.5" fill="#2a1a0a"/>
                <path d="M57 63 Q62 60 67 63" stroke="#5a3a1a" strokeWidth="2" fill="none"/>
                <path d="M73 63 Q78 60 83 63" stroke="#5a3a1a" strokeWidth="2" fill="none"/>
                <path d="M64 84 Q70 82 76 84" stroke="#8b5a3a" strokeWidth="1.5" fill="none"/>
                <path d="M50 98 Q70 105 90 98" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round"/>
              </g>
              <g style={{ animation: "splashSip 3s ease-in-out infinite 2s", transformOrigin: "50px 130px" }}>
                <path d="M50 120 Q30 135 28 150" stroke="#c8956a" strokeWidth="14" fill="none" strokeLinecap="round"/>
                <circle cx="27" cy="155" r="8" fill="#c8956a"/>
                <ellipse cx="18" cy="158" rx="10" ry="12" fill="#3a2010"/>
                <ellipse cx="18" cy="152" rx="8" ry="4" fill="#2a1508"/>
                <line x1="18" y1="148" x2="14" y2="135" stroke="#c8a060" strokeWidth="1.5"/>
                <path d="M12 132 Q8 126 12 120" stroke="#f5e6c8" strokeWidth="1" fill="none" opacity="0" style={{ animation: "splashSteam 1.5s ease-out infinite 2s" }}/>
                <path d="M16 130 Q13 124 17 118" stroke="#f5e6c8" strokeWidth="1" fill="none" opacity="0" style={{ animation: "splashSteam 1.5s ease-out infinite 2.5s" }}/>
              </g>
              <g style={{ animation: "splashSway 4s ease-in-out infinite 1.5s", transformOrigin: "110px 140px" }}>
                <ellipse cx="112" cy="155" rx="14" ry="18" fill="#8b4a10"/>
                <ellipse cx="112" cy="140" rx="10" ry="13" fill="#a05a18"/>
                <rect x="110" y="100" width="4" height="45" fill="#c8822a"/>
                <ellipse cx="112" cy="155" rx="6" ry="8" fill="#000" opacity="0.3"/>
                <line x1="105" y1="100" x2="119" y2="100" stroke="#c8822a" strokeWidth="2"/>
                {[103,106,109,112,115,118].map(y => (
                  <line key={y} x1="109" y1={y} x2="115" y2={y} stroke="#f5e6c8" strokeWidth="0.5" opacity="0.6"/>
                ))}
              </g>
            </svg>
          </div>

          {/* Personaje derecho: alegre con el vino */}
          <div className="float2" style={{ marginLeft: -10 }}>
            <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ps2" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(40)">
                  <line x1="0" y1="0" x2="0" y2="10" stroke="#c8a060" strokeWidth="2"/>
                </pattern>
              </defs>
              <ellipse cx="75" cy="148" rx="60" ry="55" fill="#6a1a0a"/>
              <ellipse cx="75" cy="148" rx="60" ry="55" fill="url(#ps2)" opacity="0.3"/>
              <rect x="38" y="108" width="74" height="70" rx="10" fill="#e8d8b0"/>
              <rect x="38" y="132" width="74" height="12" rx="3" fill="#1a3a8b"/>
              <rect x="38" y="135" width="74" height="3" fill="#f5e6c8" opacity="0.5"/>
              <g style={{ animation: "splashBobHead 2s ease-in-out infinite 2.3s", transformOrigin: "75px 78px" }}>
                <ellipse cx="75" cy="72" rx="32" ry="34" fill="#c8906a"/>
                <ellipse cx="75" cy="46" rx="34" ry="9" fill="#1a1a1a"/>
                <ellipse cx="73" cy="42" rx="30" ry="11" fill="#2a2a2a"/>
                <ellipse cx="62" cy="65" rx="5" ry="5" fill="#f5e6c8"/>
                <ellipse cx="88" cy="65" rx="5" ry="5" fill="#f5e6c8"/>
                <circle cx="62" cy="66" r="3" fill="#1a0a00"/>
                <circle cx="88" cy="66" r="3" fill="#1a0a00"/>
                <path d="M58 61 Q62 57 66 61" stroke="#2a1a0a" strokeWidth="1.5" fill="none"/>
                <path d="M84 61 Q88 57 92 61" stroke="#2a1a0a" strokeWidth="1.5" fill="none"/>
                <ellipse cx="54" cy="75" rx="7" ry="5" fill="#e87060" opacity="0.4"/>
                <ellipse cx="96" cy="75" rx="7" ry="5" fill="#e87060" opacity="0.4"/>
                <path d="M60 82 Q75 94 90 82" stroke="#5a2a0a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M62 84 Q75 92 88 84 Q75 90 62 84" fill="#f5f0e0" opacity="0.8"/>
                <path d="M48 100 Q75 108 102 100" stroke="#1a1a1a" strokeWidth="7" fill="none" strokeLinecap="round"/>
              </g>
              <g style={{ animation: "splashRaiseWine 2.5s ease-in-out infinite 2.2s", transformOrigin: "100px 125px" }}>
                <path d="M100 118 Q118 110 122 130" stroke="#c8906a" strokeWidth="16" fill="none" strokeLinecap="round"/>
                <circle cx="124" cy="136" r="9" fill="#c8906a"/>
                <path d="M120 118 Q118 108 128 108 Q138 108 136 118 Q132 126 128 128 L128 136" stroke="#e8e0d0" strokeWidth="1.5" fill="rgba(200,180,160,0.3)"/>
                <ellipse cx="128" cy="136" rx="6" ry="2" fill="#c8b090" opacity="0.8"/>
                <ellipse cx="128" cy="122" rx="7" ry="4" fill="#8b1a1a" opacity="0.8"/>
                <path d="M121 112 Q122 108 124 110" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
              </g>
            </svg>
          </div>
        </div>

        <div className="splash-footer">Traé tu voz, tu copa y ganas de tocar</div>

        <button className="splash-btn" onClick={onEnter}>
          Entrar al cancionero
        </button>
      </div>
    </>
  );
}
