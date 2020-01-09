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

  actions: {
    getAllProducts(state) {
      axios.get("/product").then(data => {
        state.products = data.data;

      });
    }
  }
}