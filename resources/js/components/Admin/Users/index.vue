<template>
  <admin-layout>
    <v-card>
      <!-- headers (title, search ) -->
      <v-card-title>
        Utilisateurs
        <v-spacer></v-spacer>
        <!-- search -->
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <!-- <v-btn color="primary" dark class="mb-2" @click="newAuction">Nouvelle Enchère</v-btn> -->
      </v-card-title>

      <!-- Users Datatable -->
      <v-data-table :headers="headers" :items="users" :search="search">
        <!-- <template v-slot:item.end_date="{ item }">{{ moment(item.end_date).format('DD/MM/YYYY') }}</template> -->
        <!-- Edit Buttons -->
        <template v-slot:item.actions="{ item }">
          <v-icon @click="deleteClicked(item)">delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
    <!-- dialog btn -->
    <v-dialog v-model="dialog">
      <h1>Users Info</h1>
    </v-dialog>
  </admin-layout>
</template>

<script>
import AdminLayout from "../AdminLayout";
export default {
  name: "UsersIndex",
  components: { AdminLayout },
  created() {
    this.getUsers();
  },
  data() {
    return {
      search: "",
      dialog: "",
      headers: [
        { text: "ID", value: "id", sortable: true },
        { text: "Nom", value: "name", align: "left" },
        { text: "Email", value: "email", sortable: true },
        { text: "Téléphone", value: "phone", sortable: true },
        { text: "Date création", value: "created_at", sortable: true },
        { text: "Actions", value: "actions", sortable: false }
      ],
      users: []
    };
  },
  methods: {
    getUsers() {
      axios
        .get("/users")
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteClicked(user) {
      return true;
    }
  }
};
</script>

<style>
</style>