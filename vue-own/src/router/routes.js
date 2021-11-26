export default [
  {
    path: '/',
    name: 'home',
    meta:{
      layout:'main'
    },
    component: () => import ('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      layout:'main'
    },
    component: () => import( '../pages/AboutPage.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    meta:{
      layout:'empty'
    },
    component: () => import( '../pages/NewPage.vue')
  }
]