import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7766,
    host: true,   // LAN / mobile la access panna
  }
})
