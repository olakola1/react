import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
    },
  },
})
