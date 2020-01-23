export default {
  /** ===== State ===== */
  state: {
    token: localStorage.getItem('access_token') || null,
    currentUser: localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : null,
  },
  /** ===== Getters ===== */
  getters: {
    // return if logged in or not
    loggedIn(state) {
      return state.token !== null;
    },
    currentUser(state) {
      if (state.token)
        return state.currentUser;
    }
  },
  /** ===== Mutations ===== */
  mutations: {
    retriveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    currentUser(state, user) {
      if (state.token !== null)
        state.currentUser = user;
    }
  },
  /** ===== Actions ===== */
  actions: {
    retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('auth/login', {
            email: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.access_token;
            localStorage.setItem('access_token', token);
            context.commit("retriveToken", token);
            // get the current user
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
            axios
              .post('/auth/me')
              .then(response => {
                let user = response.data;
                context.commit('currentUser', user);
                localStorage.current_user = JSON.stringify(user);
                resolve(response);
              })
              .catch(error => {
                console.error(error);
              })

          })
          .catch(error => {
            reject(error);
          })
      })
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post('auth/logout')
            .then(response => {
              localStorage.removeItem('access_token', context.token);
              localStorage.removeItem('current_user', context.token);
              context.commit("destroyToken", context.token);
              resolve(response);
            })
            .catch(error => {
              localStorage.removeItem('access_token', context.token);
              localStorage.removeItem('current_user', context.token);
              context.commit("destroyToken", context.token);
              reject(error);
            })
        })
      }
    }
  }
}