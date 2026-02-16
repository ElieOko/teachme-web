import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './components/Layout.vue'

const app = createApp(App)
app.component('DefaultLayout', Layout)
app.use(createPinia())
app.use(router)

app.mount('#app')
