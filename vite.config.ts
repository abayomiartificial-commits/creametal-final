1 import { defineConfig } from 'vite'
    2 import react from '@vitejs/plugin-react'
    3
    4 // https://vitejs.dev/config/
    5 export default defineConfig({
    6   plugins: [react()],
    7   preview: {
    8     host: '0.0.0.0',
    9     port: 8080,
   10     allowedHosts: [
   11       'creametal.onrender.com',
   12     ],
   13   },
   14 })