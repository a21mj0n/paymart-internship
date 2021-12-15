import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'
import 'vue-form-generator/dist/vfg-core.css'
Vue.config.productionTip = false
Vue.use(VueFormGenerator)
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')