<template>
  <div>
    <v-card class="pr-5 pl-5 mx-auto pb-5" max-width="500" outlined>
      <H1 class="title">SE CONNECTER</H1>
      <v-list-item-subtitle>
        Si vous n'avez pas de compte vous pouvez
        <router-link to="/register">créer</router-link>un rapiement.
      </v-list-item-subtitle>
      <v-alert
        color="red lighten-2"
        v-model="has_error"
        dismissible
        border="left"
        elevation="2"
        colored-border
        icon="mdi-alert"
      >Impossible de se connecter</v-alert>
      <v-form autocomplete="off" @submit.prevent="login" method="post">
        <!-- Email -->
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="person"
          type="email"
          color="primary"
          v-model="user.email"
        />
        <!-- Password -->
        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          color="primary"
          type="password"
          v-model="user.password"
        />
        <!-- submit btn -->
        <v-btn
          type="submit"
          dark
          class="mr-4"
          color="primary"
          depressed
          small
          block
          :loading="loading"
        >Connexion</v-btn>
      </v-form>

      <!-- Social BTN -->
      <v-divider class="mt-5 mb-5"></v-divider>
      <p class="mt-5">Ou vous pouvez créer un compte avec les réseau sociaux</p>
      <v-btn
        class="ma-2 white--text"
        block
        depressed
        small
        style="background-color: #3578E5"
        @click="AuthProvider('facebook')"
      >
        Facebook
        <v-icon right dark></v-icon>
      </v-btn>
      <v-btn class="ma-2 white--text" block depressed small style="background-color: #de5246">
        Google
        <v-icon right dark></v-icon>
      </v-btn>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      has_error: false,
      loading: false
    };
  },
  mounted() {},
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("retriveToken", {
          email: this.user.email,
          password: this.user.password
        })
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.loading = false;
        });
    }
  }
};
</script>
