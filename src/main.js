import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.config.globalProperties.$toUp = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
}

app.use(router)

AOS.init({
  startEvent: 'DOMContentLoaded',
  once: true,
  duration: 1000
})

app.mount('#app')
