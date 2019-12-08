import Vue from "vue";

/** vuetify config **/
import vuetify from "./plugins/vuetify";

/** Initialise the router new Router() **/
import router from "./router";

/** Components that need to be loaded on every page {top-bar-nav and main-footer} **/
import AppComponent from "./components/App.vue";

/** Create the vue application **/
const vm = new Vue({
    el: "#app",
    vuetify: vuetify,
    router,
    components: {
        AppComponent
    }
});
