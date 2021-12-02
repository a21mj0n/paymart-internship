
export default [
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../pages/AdminPage')
    },
    {
        path: '/auth',
        name: "auth",
        component:  () => import('../pages/AuthPage')
    }
]