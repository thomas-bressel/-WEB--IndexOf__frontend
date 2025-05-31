import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import the path module to resolve the path of the images folder
import path from 'path-browserify';
const { resolve } = path;

// https://vite.dev/config/
export default defineConfig({
  base: "/", 
  root: "./",

  build: {
    outDir: "./dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@models': resolve(__dirname, 'src/_models'),
      '@components': resolve(__dirname, 'src/_components'),
      '@contexts': resolve(__dirname, 'src/_contexts'),
      '@services': resolve(__dirname, 'src/_services'),
      '@child_components': resolve(__dirname, 'src/_child-components'),
      '@overlay_components': resolve(__dirname, 'src/_overlay-components'),

     }
  },
})
