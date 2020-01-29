<template>
  <v-menu v-model="menu" :close-on-content-click="true" :nudge-width="200" offset-x class="mr-5">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" large>account_circle</v-icon>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>account_circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{this.$store.getters.currentUser.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <!--  -->
        <!--  -->
        <!-- Logged as admin -->
        <v-list-item link @click="adminPanel">
          <v-list-item-icon>
            <v-icon>apps</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Backend</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!--  -->
        <!--  -->
        <!-- States BTN -->
        <!-- <v-list-item link>
          <v-list-item-icon>
            <v-icon>bar_chart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>States</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <!--  -->
        <!--  -->
        <!-- Logout btn -->
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Déconnexion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      menu: ""
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then(response => {
        this.$router.push({ name: "home" });
      });
    },
    // go to admin panel
    adminPanel() {
      this.$router.push({ name: "admin-backend" });
    }
  }
};
</script>
