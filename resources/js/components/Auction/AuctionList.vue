<template>
  <v-data-table :headers="headers" :items="auctions" :search="search">
    <!-- Start date -->
    <template v-slot:item.start_date="{ item }">{{ moment(item.start_date).format('DD/MM/YYYY') }}</template>

    <!-- End Date -->
    <template v-slot:item.end_date="{ item }">{{ moment(item.end_date).format('DD/MM/YYYY') }}</template>

    <!-- Room Size / Participant -->
    <template
      v-slot:item.room_size="{ item }"
    >{{ item.participations.length }} / {{ item.room_size }}</template>

    <template v-slot:item.is_live="{ item }">
      <v-icon @click="goLive(item)" color="success" v-if="item.is_live">check_circle</v-icon>
      <v-icon @click="goLive(item)" v-else>check_circle</v-icon>
    </template>

    <!-- Resultat Buttons -->
    <template v-slot:item.res="{ item }">
      <v-icon @click="resultatAuction(item)" class="mr-2" color="success">done_outline</v-icon>
    </template>

    <!-- Edit Buttons -->
    <template v-slot:item.action="{ item }">
      <v-icon @click="editClicked(item)" class="mr-2">edit</v-icon>
      <v-icon @click="deleteClicked(item)">delete</v-icon>
    </template>
  </v-data-table>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  props: ["auctions", "search"],
  mounted() {
    this.moment = moment;
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id", sortable: true },
        { text: "product", value: "product.name", align: "left" },
        { text: "Début", value: "start_date", sortable: true },
        { text: "HeureDébut", value: "start_time", sortable: true },
        { text: "Fin", value: "end_date", sortable: true },
        { text: "Heure Fin", value: "end_time", sortable: true },
        { text: "Prix", value: "price", sortable: true },
        { text: "Entrée", value: "entry_price", sortable: true },
        { text: "Participants", value: "room_size", sortable: true },
        { text: "Création", value: "created_at", sortable: true },
        { text: "Résultat", value: "res", sortable: false },
        { text: "Live", value: "is_live", sortable: false },
        { text: "action", value: "action", sortable: false }
      ]
    };
  },
  methods: {
    editClicked: function(item) {
      this.$emit("editClicked", item);
    },
    deleteClicked: function(item) {
      this.$emit("deleteClicked", item);
    },
    goLive(item) {
      this.$emit("goLive", item);
    },
    resultatAuction(item) {
      this.$emit("showResultat", item);
    }
  }
};
</script>
