export default [
  // Admin backend (index)
  {
    path: '/admin/backend',
    name: 'admin-backend',
    component: () => import('../components/Admin/Index'),
    meta: {
      requiresAuth: true
    }
  },
  // Admin backend (products)
  {
    path: '/admin/backend/products',
    name: 'admin-products',
    component: () => import('../components/Admin/Products/index.vue'),

    meta: {
      requiresAuth: true
    }
  },
  // Admin backend (auctions)
  {
    path: '/admin/backend/auctions',
    name: 'admin-auctions',
    component: () => import('../components/Admin/Auctions/index.vue'),
    meta: {
      requiresAuth: true
    }
  }
]