import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 完整引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入路由器
import router from './router'

createApp(App).use(ElementPlus).use(router).mount('#app')
