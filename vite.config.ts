    1     import { defineConfig } from 'vite'
    2     import react from '@vitejs/plugin-react'
    3
    4     export default defineConfig({
    5       plugins: [react()],
    6       preview: {
    7         host: '0.0.0.0',
    8         port: 8080,
    9         allowedHosts: [
   10           'creametal.onrender.com',
   11         ],
   12       },
   13     })
