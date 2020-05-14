import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import Vant from 'vant'
import Http from '../http'
import { Toast } from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);
Vue.prototype.$http = Http
Vue.prototype.$toast = Toast
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')