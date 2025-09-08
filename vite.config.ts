// Root vite config - delegates to Launcher as the main entry point
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist/launcher',
    emptyOutDir: true,
    rollupOptions: {
      input: './Launcher/index.html'
    }
  },
  resolve: {
    alias: {
      '@yuzha/ui': path.resolve(__dirname, './shared/YuzhaUI/YuzhaUI.tsx'),
      '@yuzha/auth': path.resolve(__dirname, './shared/YuzhaAuth/YuzhaAuth.tsx'),
      '@yuzha/api': path.resolve(__dirname, './shared/YuzhaAPI/YuzhaAPI.tsx'),
    }
  },
  server: {
    port: 5173,
    host: true
  }
})