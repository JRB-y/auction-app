import Vuex from 'vuex';
import Vue from 'vue';

import products from './modules/products';
import auctions from './modules/auctions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    auctions
  },

  // state: { // = data
  //   //
  // },

  // getters: { // = computed properties
  //   //
  // },

  // actions: {
  //   //
  // },

  // mutations: {
  //   //
  // }
})