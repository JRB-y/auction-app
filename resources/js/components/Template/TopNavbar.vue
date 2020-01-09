<template>
  <nav>
    <v-app-bar color="grey darken-4" dark flat>
      <!-- Toggle drawer (menu) -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
  </nav>
</template>
<script>
import DropdownLogin from "./DropdownLogin";
export default {
  components: { DropdownLogin }
};
</script>
