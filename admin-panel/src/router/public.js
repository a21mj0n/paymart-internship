export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: "home",
<<<<<<< HEAD
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
=======
>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: '/checkout',
        name: 'checkout',
        meta: {
<<<<<<< HEAD
            layout: "home",
            breadcrumbItems: [
                {
                    name: 'home',
                    text: 'Home /',
                    isDisabled: false,
                },
                {
                    name: 'checkout',
                    text: 'Checkout',
                    isDisabled: true,
                },
            ]
=======
            layout: "empty",
>>>>>>> a904ddc03ca4b65022a6bd8522a01ed270e2f398
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
        path: '*',
        name: "notFound",
        meta: {
            layout: "home",
        },
        component: () => import('../pages/NotFound')
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
]