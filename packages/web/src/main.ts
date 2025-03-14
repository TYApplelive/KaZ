import '@/assets/reset.css' // 重置样式
// import 'vuetify/styles' // 引入 Vuetify 的全局样式
import '@mdi/font/css/materialdesignicons.min.css' // Vuetify 图标库

import { createVuetify } from 'vuetify'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify()
const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
