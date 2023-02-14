import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Index from "@/views/Index.vue"
import './assets/main.css'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Index", component: Index}
    ]
})


createApp(App).use(router).mount("#app");