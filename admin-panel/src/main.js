import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins 
import i18n from './i18n/i18n'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'
import VueSlickCarousel from 'vue-slick-carousel'

import Loader from '@/components/Loader'
import '../node_modules/vue-form-generator/dist/vfg-core.css'

Vue.config.productionTip = false

import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(VueFormGenerator)
Vue.use(VueSlickCarousel)



Vue.component('Loader', Loader)
Vue.use(VueCarousel)
Vue.use(VueFormGenerator)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
