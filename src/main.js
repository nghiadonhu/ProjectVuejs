import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/css/style.css'

import VueAxios from 'vue-axios'
import axios from 'axios'
import store from './store';


// createApp(App).use(router).mount('#app')
const app = createApp(App).use(router)
app.use(VueAxios,{$request: axios})
app.use(store);
app.mount('#app')


