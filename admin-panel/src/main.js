import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'
import 'vue-form-generator/dist/vfg-core.css'

Vue.config.productionTip = false
Vue.use(VueFormGenerator)
    
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
