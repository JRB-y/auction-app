import Axios from "axios"

export default {

  state: {
    lastBets: [],
  },

  getters: {
    lastBets: state => state.lastBets,
  },

  actions: {
    lastBets(context) {
      axios
        .get('bets/last')
        .then(response => {
          const bets = response.data;
          context.commit('lastBets', bets);
        })
    },

  },
  mutations: {
    lastBets(state, bets) {
      state.lastBets = bets;
    }
  }

}