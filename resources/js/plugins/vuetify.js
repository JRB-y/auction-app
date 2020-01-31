import Vue from 'vue';
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        dark: '#212121',
        primary: '#F77F00',
        green: '#009E60'
      },
    },
  },
  icons: {
    iconfont: "mdi"
  }
})
