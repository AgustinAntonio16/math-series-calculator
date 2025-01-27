import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Escuchar en la dirección IP de la máquina
    port: 5173, // Puedes especificar el puerto que desees
  }, 
  test: {
    globals: true,
    environment: "jsdom", // Usa jsdom como entorno
    setupFiles: "./setupTests.js", // Archivo opcional para configuraciones iniciales
  },
})
