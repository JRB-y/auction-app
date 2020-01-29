<template>
  <admin-layout>
    <h1 class="title mt-5">Enchères en ligne</h1>
    <div class="text-center">
      <span
        class="red--text font-weight-black"
        v-if="onlineAuctions.length === 0"
      >Pas d'enchère en cours</span>
    </div>
    <v-row>
      <v-col cols="6" v-for="(auction, index) in onlineAuctions" :key="index">
        <v-card color="primary" class="mb-3" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{auction.product.name}}</v-card-title>

              <v-card-subtitle>{{ auction.final_price }} / {{ auction.price }} CFA</v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <h1 class="title mt-5">Dernière mises</h1>
    <template>
      <v-data-table :headers="headers" :items="last_bets" :items-per-page="5" class="elevation-1">
        <template
          v-slot:item.created_at="{ item }"
        >{{ moment(item.created_at).format('DD/MM/YYYY - HH:mm') }}</template>
      </v-data-table>
    </template>
  </admin-layout>
</template>


<script>
import moment from "moment";
import AdminLayout from "./AdminLayout";

export default {
  components: { AdminLayout },
  data() {
    return {
      headers: [
        { text: "#", value: "id" },
        { text: "Utilisateur", value: "user.name" },
        { text: "Somme", value: "price" },
        { text: "Produit", value: "auction.product.name" },
        { text: "Date", value: "created_at" }
      ]
    };
  },
  created() {
    this.moment = moment;
    this.$store.dispatch("lastBets");
    this.$store.dispatch("onlineAuctions");
  },
  computed: {
    last_bets: {
      get() {
        return this.$store.getters.lastBets;
      },
      set(val) {
        this.value = val;
      }
    },
    onlineAuctions: {
      get() {
        return this.$store.getters.onlineAuctions;
      },
      set(val) {
        this.value = val;
      }
    }
  }
};
</script>
