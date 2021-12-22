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
        path: '/auth',
        name: "auth",
        meta: {
            layout: "empty",
        },
        component:  () => import('../pages/AuthPage')
    },
]