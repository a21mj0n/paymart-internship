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
    // categories
    {
        path: '/admin/categories',
        name: "categories",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/categories/Index')
    },
    {
        path: '/admin/categories/create',
        name: "createCategory",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/categories/Create')
    },
    {
        path: '/admin/categories/edit/:id',
        name: "editCategory",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/categories/Edit')
    },
    {
        path: '/admin/categories/view/:id',
        name: "viewCategory",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/categories/View')
    },
    // products
    {
        path: '/admin/products',
        name: "products",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/products/Index')
    },
    {
        path: '/admin/products/create',
        name: "createProduct",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/products/Create')
    },
    {
        path: '/admin/products/edit/:id',
        name: "editProduct",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/products/Edit')
    },
    {
        path: '/admin/products/view/:id',
        name: "viewProduct",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/products/View')
    },
    // users
    {
        path: '/admin/users',
        name: "Users",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/users/Index')
    },
    {
        path: '/admin/users/create',
        name: "createUser",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/users/Create')
    },
    {
        path: '/admin/users/edit/:id',
        name: "editUser",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/users/Edit')
    },
    {
        path: '/admin/users/view/:id',
        name: "viewUser",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/users/View')
    },
    // brands
    {
        path: '/admin/brands',
        name: "brands",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/brands/Index')
    },
    {
        path: '/admin/brands/create',
        name: "createBrand",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/brands/Create')
    },
    {
        path: '/admin/brands/edit/:id',
        name: "editBrand",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/brands/Edit')
    },
    {
        path: '/admin/brands/view/:id',
        name: "viewBrand",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/admin/brands/View')
    },
    {
        path: '/admin/products',
        name: "products",
        meta: {
            layout: "admin"
        },
        component:  () => import('../pages/ProductsPage')
    },
]