import './scss/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { BootstrapButtonPlugin } from '@imo-tikuwa/vue3-plugin-dev-study'

createApp(App).use(BootstrapButtonPlugin).mount('#app')
