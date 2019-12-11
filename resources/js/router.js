import VueRouter from 'vue-router';

/** ===== Components ===== **/
// import Welcome from './components/Welcome.vue';
// show auction
// import AuctionDetails from './components/Auction/AuctionDetails.vue';
// Login
// import Login from './components/Auth/Login.vue';

/**
 * Admin backend Routes!
 */
// import AdminIndex from './components/Admin/Index.vue';
// import AdminProducts from './components/Admin/Products/index.vue';
// import AdminAuctions from './components/Admin/Auctions/index.vue';


const routes = [
  // Home route (welcome)
  {
    path: '/',
    name: 'home',
    component: () => import('./components/Welcome.vue'),
    meta: {
      auth: undefined
    }
  },
  // Show an Auction
  {
    path: '/auction/:id',
    name: 'auction-details',
    component: () => import('./components/Auction/AuctionDetails.vue'),
    meta: {
      auth: undefined
    }
  },
  // login
  {
    path: '/login',
    name: 'login',
    component: () => import('./components/Auth/Login.vue'),
    meta: {
      auth: false
    }
  },
  // Admin backend (index)
  {
    path: '/admin/backend',
    name: 'admin-backend',
    component: () => import('./components/Admin/Index.vue'),
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
    component: () => import('./components/Admin/Products/index.vue'),

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
    component: () => import('./components/Admin/Auctions/index.vue'),
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
];

/** ===== Router declaration ===== **/
export default new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
