import Vue from 'vue';
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                dark: '#212121',
                primary: '#0073a0',
            },
        },
    },
    icons: {
        iconfont: "mdi"
    }
})
