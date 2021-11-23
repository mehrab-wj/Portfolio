import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import { dragscrollNext } from "vue-dragscroll";

createApp(App).use(router).directive('dragscroll', dragscrollNext).mount('#app')
