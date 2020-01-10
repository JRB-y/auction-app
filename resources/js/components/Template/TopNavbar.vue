<template>
  <nav>
    <v-app-bar color="grey darken-4" dark flat app>
      <!-- Toggle drawer (menu) -->
      <!-- <v-toolbar-side-icon class="gray"></v-toolbar-side-icon> -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- Application title / logo -->
      <v-toolbar-title class="font-weight-bold">AUCTION APP</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Logged Se connecter -->
      <router-link to="/login" v-if="!$auth.check()">
        <v-btn depressed small color="primary" class="ma-2 white--text">Se Connecter</v-btn>
      </router-link>

      <!-- Unlogged Se connecter -->
      <dropdown-login v-if="$auth.check()"></dropdown-login>

      <!-- Categories items -->
      <template v-slot:extension>
        <v-tabs align-with-title centered dark>
          <v-tab to="/" ripple class="primary">
            <v-icon>home</v-icon>
          </v-tab>
          <v-tab class="white--text">A propos</v-tab>
          <v-tab class="white--text">Contact</v-tab>
          <v-tabs-slider color="primary"></v-tabs-slider>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>Menu</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav dark>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">Home</v-list-item-title>
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
  methods: {}
};
</script>
