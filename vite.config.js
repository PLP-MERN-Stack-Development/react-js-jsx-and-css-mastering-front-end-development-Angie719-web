import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-js-jsx-and-css-mastering-front-end-development-Angie719-web/',
  plugins: [react()],
  server: {
    port: 5173, // always use this port
  },
})
