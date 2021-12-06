
export default [
    {
        path: '/admin',
        name: 'admin',
        meta: {
            layout: "admin"
        },
        component: () => import('../pages/AdminPage')
    },
    {
        path: '/auth',
        name: "auth",
        component:  () => import('../pages/AuthPage')
    },
    {
        path: '/admin/category',
        name: "category",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/CategoryPage')
    },
]