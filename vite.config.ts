 1     import { defineConfig } from 'vite'
    2     import react from '@vitejs/plugin-react'
    3
    4     // https://vitejs.dev/config/
    5     export default defineConfig({
    6       plugins: [react()],
    7       server: {
    8         port: 3000,
    9         host: '0.0.0.0',
   10       },
   11       preview: {
   12         host: '0.0.0.0',
   13         port: 8080,
   14         allowedHosts: [
   15           'creametal.onrender.com',
   16         ],
   17       },
   18     })