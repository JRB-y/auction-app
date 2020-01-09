export default [
  // Admin backend (index)
  {
    path: '/admin/backend',
    name: 'admin-backend',
    component: () => import('../components/Admin/Index'),
    meta: {
      auth: {
        roles: 1,
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  // Admin backend (products)
  {
    path: '/admin/backend/products',
    name: 'admin-products',
    component: () => import('../components/Admin/Products/index.vue'),

    meta: {
      auth: {
        roles: 1,
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  // Admin backend (auctions)
  {
    path: '/admin/backend/auctions',
    name: 'admin-auctions',
    component: () => import('../components/Admin/Auctions/index.vue'),
    meta: {
      auth: {
        roles: 1,
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  }
]