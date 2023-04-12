import { createApp } from 'vue'
import App from './App.vue'

const mountApp = () => {
    const el = document.createElement("div")
    document.body.appendChild(el)
    createApp(App).mount(el)
}
if (document.body) {
    mountApp()
} else {
    window.addEventListener('load', mountApp)
}