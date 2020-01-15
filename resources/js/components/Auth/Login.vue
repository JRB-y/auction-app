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
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="person"
          type="email"
          color="primary"
          v-model="user.email"
        />

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          color="primary"
          type="password"
          v-model="user.password"
        />
        <v-btn type="submit" dark class="mr-4" color="primary" depressed small block>Connexion</v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      has_error: false
    };
  },
  mounted() {},
  methods: {
    login() {
      // get the redirect object
      var redirect = this.$auth.redirect();
      var app = this;
      this.$auth.login({
        params: {
          email: app.user.email,
          password: app.user.password
        },
        success: function() {
          // handle redirection
          // const redirectTo = redirect ? redirect.form.name : this.$auth.user().role ===
          this.$router.push("/");
        },
        error: function() {
          app.has_error = true;
        },
        rememberMe: true,
        fetchUser: true
      });
    }
  }
};
</script>
