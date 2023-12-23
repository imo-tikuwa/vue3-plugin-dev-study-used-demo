import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  // `vite build`時のassetsのパスについて相対的なパスとするための設定
  base: ''
})