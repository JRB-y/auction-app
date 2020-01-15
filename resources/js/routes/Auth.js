export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Auth/Login.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Auth/Register.vue'),
    meta: {
      auth: false
    }
  },
]