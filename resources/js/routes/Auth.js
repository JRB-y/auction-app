export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Auth/Login.vue'),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Auth/Register.vue'),
    meta: {
      requiresVisitor: true
    }
  },
]