import Vue from 'vue';
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        dark: '#212121',
        primary: '#3f51b5'
      },
    },
  },
  icons: {
    iconfont: "mdi"
  }
})
