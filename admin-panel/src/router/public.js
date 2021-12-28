export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: "home",
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: '/checkout',
        name: 'checkout',
        meta: {
            layout: "home",
        },
        component: () => import('../pages/CheckoutPage')
    },
    {
        path: '/auth',
        name: "auth",
        meta: {
            layout: "empty",
        },
        component:  () => import('../pages/AuthPage')
    },
    {
        path: '*',
        name: "notFound",
        meta: {
            layout: "home",
        },
        component:  () => import('../pages/NotFound')
    },
    {
        path: '/store',
        name: "store",
        meta: {
            layout: "home",
        },
        component:  () => import('../pages/StorePage')
    },
]