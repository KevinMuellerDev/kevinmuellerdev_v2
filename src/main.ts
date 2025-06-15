import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import * as english from '@/assets/i18n/english.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            message: english,
        },
        ja: {
            message: {
                hello: 'こんにちは、世界',
            },
        },
    },
});

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
