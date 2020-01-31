require('./bootstrap');

import Vue from "vue";

/** Initialise the router new Router() **/
import VueRouter from 'vue-router';

// Vue Socialauth
import VueSocialauth from 'vue-social-auth';

/** Vuex */
import store from './store/index';

/** Auth configuration */
// import auth from './auth';

/** Router configuration */
import router from './routes';

/** vuetify config **/
import vuetify from "./plugins/vuetify";

/** Components that need to be loaded on every page {top-bar-nav and main-footer} **/
import AppComponent from "./components/App.vue";

/** Datetime Picker vuetify plugin */
import DatetimePicker from 'vuetify-datetime-picker';
Vue.use(DatetimePicker);

/** Router Middleware */
Vue.router = router;
Vue.use(VueRouter);

/** VueAxios Middleware */
// Vue.use(VueAxios, axios);

/** VueAuth Middleware */
axios.defaults.baseURL = `/api`;
// Vue.use(VueAuth, auth);

/** Vue SocialAuth */
// Vue.use(VueSocialauth, {
//   providers: {
//     facebook: {
//       clientId: '757142411475222',
//       redirectUri: '/auth/facebook/callback'
//     }
//   }
// })


/**
 * Auth Middleware
 * Check if user is authenticated.
 * Checked by meta tag on router links
 */
router.beforeEach((to, from, next) => {

  // if route require admin
  if (to.matched.some(record => record.meta.admin)) {

    if (!store.getters.currentUser.is_admin) {
      next({
        name: 'home'
      })
    } else {
      next();
    }
  }

  // if route require auth
  else if (to.matched.some(record => record.meta.auth)) {

    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'login'
      })
    } else {
      next();
    }
  }


  else {
    next() // make sure to always call next()!
  }
})

/** Create the vue application **/
const vm = new Vue({
  el: "#app",
  vuetify: vuetify,
  router,
  components: {
    AppComponent
  },
  store
});
