export default [
    {
        path: "/",
        name: 'home',
        meta: {
            layout: 'main'
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: "/about",
        name: 'about',
        component: () => import('../pages/AboutPage')
    },
    {
        path: '/cards/:id',
        name: 'cards',
        component: () => import ('../pages/CardPage'),
        props: true // to send props
    }
];
