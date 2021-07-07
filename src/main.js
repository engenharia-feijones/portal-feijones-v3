import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueTheMask from 'vue-the-mask'
import './index.css'

createApp(App).use(router).use(VueTheMask).mount('#app')
