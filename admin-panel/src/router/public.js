export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: "home",
            breadcrumbItems: [
                {
                    name: 'home',
                    text: 'Home',
                    isDisabled: false,
                },
                {
                    name: 'checkout',
                    text: 'Checkout',
                    isDisabled: true,
                },
            ]
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: '/checkout',
        name: 'checkout',
        meta: {
            layout: "home",
            breadcrumbItems: [
                {
                    name: 'home',
                    text: 'Home',
                    isDisabled: false,
                },
                {
                    name: 'checkout',
                    text: 'Checkout',
                    isDisabled: true,
                },
            ]
        },
        component: () => import('../pages/CheckoutPage')
    },
    {
        path: '/auth',
        name: "auth",
        meta: {
            layout: "empty",
        },
        component: () => import('../pages/AuthPage')
    },
    {
        path: '/store',
        name: "store",
        meta: {
            layout: "home",
        },
        component:  () => import('../pages/StorePage')
    },

    {
        path: '/home/product/view/',
        name: "home.product.view",
        meta: {
            layout: "home",
        },
        component:  () => import('../pages/ViewProductPage')
    },



    
    // not found page
    {
        path: '*',
        name: "notFound",
        meta: {
            layout: "home",
        },
        component: () => import('../pages/NotFound')
    },
]