import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<<< HEAD:vue2/src/router/index.js
import routes from './routes';
========
import routes from './routes'
>>>>>>>> 402e6dbec60c02342d201430a0e04eae9676aafc:vue-own/src/router/index.js

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
