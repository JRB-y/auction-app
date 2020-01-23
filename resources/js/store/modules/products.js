import axios from 'axios';

export default {
  state: {
    products: []
  },

  getters: {
    allProducts: state => {
      return state.products;
    }
  },

  mutations: {

  },

  actions: {
    getAllProducts(state) {
      axios.get("/product").then(data => {
        state.products = data.data;

      });
    }
  }
}