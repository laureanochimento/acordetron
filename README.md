# 🎸 Cancionero AR — Folklore & Rock Nacional

App web para ver letra y acordes de guitarra de las playlists de folklore y rock nacional argentino, usando Gemini AI.

## Setup local

```bash
# 1. Clonar el repo
git clone https://github.com/TU_USUARIO/cancionero-ar.git
cd cancionero-ar

# 2. Instalar dependencias
npm install

# 3. Configurar API key
cp .env.example .env.local
# Editá .env.local y pegá tu Gemini API key

# 4. Correr en desarrollo
npm run dev
```

Abrí http://localhost:3000

## Deploy en Vercel

1. Subí el repo a GitHub
2. Importalo en vercel.com
3. En Settings → Environment Variables, agregá:
   - GEMINI_API_KEY = tu API key de Gemini
4. Deploy automático ✅

## Cómo conseguir la API key de Gemini

1. Entrá a aistudio.google.com
2. Hacé click en "Get API key"
3. Copiá la key y pegala en Vercel

## Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Gemini 1.5 Flash para letra y acordes
- Deploy en Vercel
