<template>
  <div>
    <v-card class="pr-5 pl-5 mx-auto pb-5" max-width="500" outlined>
      <H1 class="title">Créer un compte</H1>
      <v-list-item-subtitle>
        La création de compte est rapide et facile.
        <br />Si vous avez déjà un compte veuillez vous
        <router-link to="/login">connecter</router-link>
      </v-list-item-subtitle>
      <!-- Alert if Errors -->
      <v-alert
        color="red lighten-2"
        v-model="has_error"
        dismissible
        border="left"
        elevation="2"
        colored-border
        icon="mdi-alert"
      >Impossible de se connecter</v-alert>

      <v-form autocomplete="off" @submit.prevent="register" method="post">
        <v-text-field
          label="Nom et Prénom"
          name="email"
          prepend-icon="person"
          type="email"
          color="primary"
          v-model="user.name"
          hint="Votre nom ne sera pas afficher"
        />

        <v-text-field
          label="Email"
          name="email"
          prepend-icon="email"
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

        <v-text-field
          id="password_confirmation"
          label="Password Confirmation"
          name="password_confirmation"
          prepend-icon="lock"
          color="primary"
          type="password"
          v-model="user.password_confirmation"
        />

        <v-btn type="submit" dark class="mr-4" color="primary" depressed small block>Enristrer</v-btn>

        <v-divider class="mt-5"></v-divider>
        <p class="mt-5">Ou vous pouvez créer un compte avec les réseau sociaux</p>
        <v-btn class="ma-2 white--text" block depressed small style="background-color: #3578E5">
          Facebook
          <v-icon right dark></v-icon>
        </v-btn>
        <v-btn class="ma-2 white--text" block depressed small style="background-color: #de5246">
          Google
          <v-icon right dark></v-icon>
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        inset: false
      },
      has_error: false
    };
  },
  mounted() {},
  methods: {
    register() {
      // get the redirect object
      var redirect = this.$auth.redirect();
      var app = this;
      this.$auth.register({
        params: {
          name: app.user.name,
          email: app.user.email,
          password: app.user.password,
          password_confirmation: app.user.password_confirmation
        },
        success: function() {
          // handle redirection
          // const redirectTo = redirect ? redirect.form.name : this.$auth.user().role ===
          this.$router.push("/login");
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
