export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'main',
            title: 'Home Page',
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'main',
            title: 'About Page',
        },
        component: () => import ('../pages/AboutPage')
    },
    {
        path: '/cards/:id',
        name: 'card',
        meta: {
            layout: 'upper'
        },
        props: true,
        component: () => import('../pages/CardPage') 
    },
    {
        path: '*',
        component: () => import ('../pages/NotFound')
    }
];