import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerApp } from './globalCompontent'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/main.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
const pinia = createPinia()
registerApp(app)
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.mount('#app')
