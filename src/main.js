import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import router from './router'
import {MotionPlugin} from '@vueuse/motion'
import { createPinia } from 'pinia'
// import PrimeVue from 'primevue-config'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(MotionPlugin)
app.use(pinia)
// app.use(PrimeVue, {
//     unstyled: true
// })

app.mount('#app')
