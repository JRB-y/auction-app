export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Auth/Login.vue'),
    meta: {
      auth: false
    }
  }
]