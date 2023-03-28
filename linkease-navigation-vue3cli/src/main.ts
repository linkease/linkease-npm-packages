import { createApp } from 'vue'
import App from './App.vue'
window.addEventListener('load', (event) => {
    const el = document.createElement("div")
    document.body.appendChild(el)
    createApp(App).mount(el)
})