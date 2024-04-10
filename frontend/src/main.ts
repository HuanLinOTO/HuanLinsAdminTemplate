import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import naive from 'naive-ui'

import { createPinia } from 'pinia'
// @ts-ignore
import piniaPersist from 'pinia-plugin-persist';

declare module 'pinia' {
    export interface PiniaCustomProperties {
        $persist: PiniaPlugin
    }
}

const pinia = createPinia()

pinia.use(piniaPersist)

createApp(App)
.use(naive)
.use(pinia)
.use(router)
.mount('#app')
