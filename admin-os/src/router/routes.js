export default  [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutPage.vue')
    }
]
