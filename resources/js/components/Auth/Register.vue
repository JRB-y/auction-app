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
      >
        <ul>
          <li v-for="(err, index) in err_bag" :key="index">{{err[0]}}</li>
        </ul>
      </v-alert>

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
          v-model="user.phone"
          type="number"
          label="Numéro de téléphone"
          prepend-icon="phone"
          hint="Le téléphone n'est pas obligatoire"
        ></v-text-field>

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

        <v-btn
          type="submit"
          dark
          class="mr-4"
          color="primary"
          depressed
          small
          block
          :loading="loading"
        >Enristrer</v-btn>

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
        phone: ""
      },
      has_error: false,
      err_bag: "",
      loading: false
    };
  },
  mounted() {},
  methods: {
    register() {
      this.loading = true;
      this.$store
        .dispatch("register", this.user)
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "login" });
        })
        .catch(err => {
          this.loading = false;
          this.err_bag = err.response.data.errors;
          this.has_error = true;
        });
    }
  }
};
</script>
