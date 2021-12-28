import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins 
import i18n from './i18n/i18n'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'
import Loader from '@/components/Loader'
import VueSlider from 'vue-slider-component'
import VueCarousel from 'vue-carousel'

//css styles
import '../node_modules/vue-form-generator/dist/vfg-core.css'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false

// plugins activated
Vue.component('VueSlider', VueSlider)
Vue.component('Loader', Loader)
Vue.use(VueCarousel)
Vue.use(VueFormGenerator)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
