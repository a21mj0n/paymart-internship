export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: "empty",
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: '/checkout',
        name: 'checkout',
        meta: {
            layout: "empty",
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
]