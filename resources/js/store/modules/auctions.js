export default {

  state: {
    // auctions represent the valide in time ( date_end < now () )
    auctions: [],
    // the outdated auctions (date_end > now() )
    upcomingAuctions: [],
    onlineAuctions: [],
  },

  getters: {
    upcomingAuctions: state => state.upcomingAuctions,
    onlineAuctions: state => state.onlineAuctions,
  },

  actions: {

    upcomingAuctions(context) {
      axios.get("/auction/upcoming").then(response => {
        const auctions = response.data;
        context.commit('upcomingAuctions', auctions)
      });
    },

    onlineAuctions(context) {
      axios.get("/auction/live").then(response => {
        const auctions = response.data;
        context.commit('onlineAuctions', auctions)
      });
    },
    // user click on participer (after payement)
    participer(context, payload) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

      return new Promise((resolve, reject) => {
        axios
          .post("/participer", { auction_id: payload.auction_id, user_id: payload.user_id }).then(response => {
            resolve(response);
          })
          .catch(error => {
            console.log(error);
          });

      })
    },
    // when user click on Miser (after payement)
    miser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auction/mise", {
            auction_id: payload.auction_id,
            price: payload.price,
            user_id: payload.user_id
          })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          })
      });


    }
  },
  mutations: {
    upcomingAuctions(state, auctions) {
      state.upcomingAuctions = auctions;
    },
    onlineAuctions(state, auctions) {
      state.onlineAuctions = auctions;
    }
  }

}