export default [
  // Admin backend (index)
  {
    path: '/admin/backend',
    name: 'admin-backend',
    component: () => import('../components/Admin/Index'),
    meta: {
      auth: true,
      admin: true
    }
  },
  // Admin backend (products)
  {
    path: '/admin/backend/products',
    name: 'admin-products',
    component: () => import('../components/Admin/Products/index.vue'),
    meta: {
      auth: true,
      admin: true
    }
  },
  // Admin backend (auctions)
  {
    path: '/admin/backend/auctions',
    name: 'admin-auctions',
    component: () => import('../components/Admin/Auctions/index.vue'),
    meta: {
      auth: true,
      admin: true
    }
  },
  {
    path: '/admin/backend/users',
    name: 'admin-users',
    component: () => import('../components/Admin/Users/index.vue'),
    meta: {
      auth: true,
      admin: true
    }
  }
]