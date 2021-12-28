import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins 
import i18n from './i18n/i18n'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'
import VueSlickCarousel from 'vue-slick-carousel'

import Loader from '@/components/Loader'
<<<<<<< HEAD
import VueSlider from 'vue-slider-component'
import VueCarousel from 'vue-carousel'

//css styles
import '../node_modules/vue-form-generator/dist/vfg-core.css'
import 'vue-slider-component/theme/default.css'

Vue.config.productionTip = false

// plugins activated
Vue.component('VueSlider', VueSlider)
=======
import '../node_modules/vue-form-generator/dist/vfg-core.css'

Vue.config.productionTip = false

import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(VueFormGenerator)
Vue.use(VueSlickCarousel)



>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
Vue.component('Loader', Loader)
Vue.use(VueCarousel)
Vue.use(VueFormGenerator)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
