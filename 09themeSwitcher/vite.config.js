import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/

export default defineConfig({
  darkMode : "class",
  plugins: [
     tailwindcss(),react()],
})
