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

    {
        path: '/home/product/view/',
        name: "home.product.view",
        meta: {
            layout: "home",
        },
        component:  () => import('../pages/ViewProductPage')
    },
]