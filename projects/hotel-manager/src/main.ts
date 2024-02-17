import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 完整引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入路由器
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app')
