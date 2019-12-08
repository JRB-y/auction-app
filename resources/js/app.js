import Vue from "vue";
// Vuetify plugin with mdi-icons (we can add more vuetify configuration)
import vuetify from "./plugins/vuetify";

// router new Router({})
import router from "./router";

/** Components that need to be loaded on every page {top-bar-nav and main-footer} **/
import TopBarNav from "./components/Template/TopBarNav.vue";
import MainFooter from "./components/Template/MainFooter.vue"

const vm = new Vue({
    el: "#app",
    vuetify: vuetify,
    router,
    components: {
        TopBarNav,
        MainFooter
    }
});
