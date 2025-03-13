import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  server: {
    host: '0.0.0.0', // 允许外部访问（例如通过宿主机访问容器内的服务）
    port: 8081,
    hmr: true, // 启用热模块替换
    watch: {
      usePolling: true, // 启用轮询机制监听文件变化
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
