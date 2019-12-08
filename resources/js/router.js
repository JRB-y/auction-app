import Vue from 'vue';
import Router from 'vue-router';

/** ===== Components ===== **/
import Welcome from './components/Welcome.vue';
import AuctionDetails from './components/Auction/AuctionDetails.vue';

Vue.use(Router);


/** ===== Router declaration ===== **/
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Welcome
        },
        {
            path: '/auction/:id',
            name: 'auction-details',
            component: AuctionDetails
        }
    ],
});
