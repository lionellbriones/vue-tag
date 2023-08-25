import './assets/main.css'

import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'

const app = createApp(App)

app.use(VueGtag, {
  config: { id: 'G-WPPHHHRZ1T' },
})

app.mount('#app')
