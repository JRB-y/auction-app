import Vue from 'vue';
import Router from 'vue-router';

/** ===== Components ===== **/
import Welcome from './components/Welcome.vue';
// show auction
import AuctionDetails from './components/Auction/AuctionDetails.vue';
// Login
import Login from './components/Auth/Login.vue';

// Route middleware
Vue.use(Router);

/** ===== Router declaration ===== **/
export default new Router({
    mode: 'history',
    routes: [
        // Home route (welcome)
        {
            path: '/',
            name: 'home',
            component: Welcome
        },
        // Show an Auction
        {
            path: '/auction/:id',
            name: 'auction-details',
            component: AuctionDetails
        },
        // login
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
});
