import Vue from "vue";
import 'es6-promise/auto';

/** Initialise the router new Router() **/
import VueRouter from 'vue-router';

import VueAuth from '@websanova/vue-auth';
import axios from 'axios';
import VueAxios from 'vue-axios';

/** Auth configuration */
import auth from './auth';

/** Router configuration */
import router from './router';

/** vuetify config **/
import vuetify from "./plugins/vuetify";

/** Components that need to be loaded on every page {top-bar-nav and main-footer} **/
import AppComponent from "./components/App.vue";

/** Router Middleware */
Vue.router = router;
Vue.use(VueRouter);

/** VueAxios Middleware */
Vue.use(VueAxios, axios);

/** VueAuth Middleware */
axios.defaults.baseURL = `/api`;
Vue.use(VueAuth, auth);



/** Create the vue application **/
const vm = new Vue({
    el: "#app",
    vuetify: vuetify,
    router,
    components: {
        AppComponent
    }
});
