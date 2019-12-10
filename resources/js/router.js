import VueRouter from 'vue-router';

/** ===== Components ===== **/
import Welcome from './components/Welcome.vue';
// show auction
import AuctionDetails from './components/Auction/AuctionDetails.vue';
// Login
import Login from './components/Auth/Login.vue';

/**
 * Admin backend Routes!
 */
import AdminIndex from './components/Admin/Index.vue';
import AdminProducts from './components/Admin/Products/index.vue';
import AdminAuctions from './components/Admin/Auctions/index.vue';


const routes = [
    // Home route (welcome)
    {
        path: '/',
        name: 'home',
        component: Welcome,
        meta: {
            auth: undefined
        }
    },
    // Show an Auction
    {
        path: '/auction/:id',
        name: 'auction-details',
        component: AuctionDetails,
        meta: {
            auth: undefined
        }
    },
    // login
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    // Admin backend (index)
    {
        path: '/admin/backend',
        name: 'admin-backend',
        component: AdminIndex,
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
        component: AdminProducts,
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
        component: AdminAuctions,
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
