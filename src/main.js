import { createApp } from 'vue';
import { createPinia } from 'pinia';
import observe from './directives/observe.js'
import styles from './assets/styles/main.scss';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('observe', observe);
app.mount('#app')
