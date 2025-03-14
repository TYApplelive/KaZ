import '@/assets/reset.css' // 重置样式
import 'vfonts/Lato.css' // 通用字体
import 'vfonts/FiraCode.css' // 等宽字体

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { create } from 'naive-ui'

import App from './App.vue'
import router from './router'

const naive = create()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
