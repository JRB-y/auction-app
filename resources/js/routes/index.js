import VueRouter from 'vue-router';

import auth from './Auth';
import backend from './Backend';
import auction from './Auction';
import home from './Home';


const routes = [
  ...home,
  ...backend,
  ...auction,
  ...auth,
];

/** ===== Router declaration ===== **/
export default new VueRouter({
  history: true,
  mode: 'history',
  routes,
})
