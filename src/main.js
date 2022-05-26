import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/styles.css'
import { longClickDirective } from 'vue-long-click'

const longClickInstance = longClickDirective({ delay: 850, interval: 0 })

Vue.config.productionTip = false
Vue.directive('longclick', longClickInstance)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
