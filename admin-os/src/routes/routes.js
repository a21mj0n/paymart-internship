export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'main',
            title: 'Home Page',
        },
        component: () => import('../pages/homePage')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'main',
            title: 'About Page',
        },
        component: () => import ('../pages/aboutPage')
    },
    {
        path: '/cards/:id',
        name: 'card',
        meta: {
            layout: 'upper'
        },
        props: true,
        component: () => import('../pages/cardPage') 
    },
    {
        path: '*',
        component: () => import ('../pages/notFound')
    }
];