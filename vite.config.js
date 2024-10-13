import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*optimizeDeps: {
    include: ['opencascade.js'],  // Ensure opencascade.js is optimized
    force: true                   // Force reoptimization
}*/
})
