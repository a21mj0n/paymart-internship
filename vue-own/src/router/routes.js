export default [
  {
    path: '/',
    name: 'home',
    component: () => import ('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../pages/AboutPage.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: () => import( '../pages/NewPage.vue')
  }
]