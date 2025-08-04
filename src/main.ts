import './assets/main.css'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import * as english from '@/assets/i18n/english.json'
import * as german from '@/assets/i18n/german.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: english,
    de: german,
  },
})

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)
app.use(i18n)

app.mount('#app')
