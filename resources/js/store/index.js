import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import auctions from './modules/auctions';
import bets from './modules/bets';


Vue.use(Vuex);

export default new Vuex.Store({

  modules: { auth, auctions, bets }

})