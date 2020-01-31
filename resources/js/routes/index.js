import VueRouter from 'vue-router';

import auth from './Auth';
import backend from './Backend';
import auction from './Auction';
import home from './Home';


const routes = [
  ...auction,
  ...backend,
  ...auth,
  ...home,
];

/** ===== Router declaration ===== **/
export default new VueRouter({
  mode: 'history',
  routes
})
