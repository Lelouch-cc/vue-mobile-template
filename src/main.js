import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style'

// Global filters
import * as filters from '@/utils/filters'

// Regist filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
