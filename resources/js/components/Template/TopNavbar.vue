<template>
  <nav>
    <v-app-bar color="grey darken-4" dark flat app>
      <!-- Application title / logo -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">CKADOO ;)</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text small to="/">Accueil</v-btn>
        <v-btn text small>A Propos</v-btn>
        <v-btn text small>Contact</v-btn>
        <v-btn text small to="/login" v-if="!this.$store.getters.currentUser">Connexion</v-btn>
        <v-btn
          text
          small
          color="primary"
          to="/register"
          v-if="!this.$store.getters.currentUser"
        >S'inscrire</v-btn>
      </v-toolbar-items>

      <dropdown-login v-if="loggedIn"></dropdown-login>

      <!-- Categories items -->
      <template v-slot:extension>
        <v-tabs align-with-title centered dark>
          <v-tab to="/" ripple class="primary">
            <v-icon>home</v-icon>
          </v-tab>
          <v-tab class="white--text" :to="{name: 'upcoming-auctions' }">
            <v-icon small color="primary" class="mr-1">mdi-checkbox-blank-circle</v-icon>Prochaines
          </v-tab>
          <v-tab class="white--text" :to="{name: 'live-auctions'}">
            <v-icon small color="green" class="mr-1">mdi-checkbox-blank-circle</v-icon>En ligne
          </v-tab>
          <v-tabs-slider color="primary"></v-tabs-slider>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="green hidden-md-and-up">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>Menu</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>account_box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">A propos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>contactless</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/login" v-if="!this.$store.getters.loggedIn">
          <v-list-item-content>
            <v-list-item-title class="white--text">Connexion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/register" v-if="!this.$store.getters.loggedIn">
          <v-list-item-content>
            <v-list-item-title class="white--text">S'inscrire</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import DropdownLogin from "./DropdownLogin";
export default {
  components: { DropdownLogin },
  data() {
    return {
      drawer: false,
      links: ["Home", "A propos", "Contact"]
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
  methods: {}
};
</script>
