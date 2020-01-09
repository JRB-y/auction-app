export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Welcome'),
    meta: {
      auth: undefined
    }
  }
]