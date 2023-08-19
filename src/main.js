import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import './assets/styles/style.scss';

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
