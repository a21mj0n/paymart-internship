export default  [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutPage.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/TestPage.vue')
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('../views/FormPage.vue')
    },
    {
        path: '/productCard',
        name: 'productCard',
        component: () => import('../views/ProductCardPage')
    },
    {
        path: '/cards/:id',
        name: 'cards',
        component: () => import ('../views/CardPage'),
        props: true // to send props
    }
]
