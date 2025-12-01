// import { createApp } from 'vue'
// import style from './style.css'
// import App from './App.vue'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// createApp(App).mount('#app')
// const app=createApp(App);
// App.use(router);
// App.mount('#app');
// import Vue from 'vue';
// import router from './router.js';
import { createApp } from 'vue'
import './style.css'
import App from '../src/App.vue'

//createApp(App).mount('#app')
import router from './router.js'
const app=createApp(App)
app.use(router)
app.mount('#app')