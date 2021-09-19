import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'remixicon/fonts/remixicon.css'
import BaseNav from './components/BaseNav'
import Popup from './components/popup.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)
app.use(router).mount('#app')
app.component('base-nav', BaseNav)
app.component('pop-up', Popup)
app.component('base-button', BaseButton)