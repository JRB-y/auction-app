<template>
  <v-container>
    <h1>Enchères en Ligne</h1>
    <v-card dark v-for="(auction, index) in onlineAuctions" :key="index" class="mb-1">
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="auction.product.img_path"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="headline">
            <span class="mr-1">{{auction.product.name}}</span>
            <small class="title primary--text">Prix {{ auction.final_price }} CFA</small>
          </v-card-title>
          <v-card-subtitle>Fin: {{ moment(auction.end_date).format('DD/MM/YYYY') }} à {{ auction.end_time }}</v-card-subtitle>
          <v-card-subtitle>Participations: {{ auction.participations.length }}</v-card-subtitle>
          <v-spacer></v-spacer>
        </div>
      </div>
      <v-card-actions>
        <v-btn color="green" small depressed block @click="enterAuction(auction)">Entrer</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  name: "LiveAuctions",
  data() {
    return {
      moment: null,
      auction: null,
      loading: false
    };
  },
  created() {
    this.$store.dispatch("onlineAuctions");
    this.moment = moment;
  },
  computed: {
    onlineAuctions: {
      get() {
        return this.$store.getters.onlineAuctions;
      },
      set(val) {
        this.value = val;
      }
    }
  },
  methods: {
    userParticipated(auction) {
      if (!this.$store.getters.loggedIn) {
        return undefined;
      }
      let participations = auction.participations;
      let user_id = this.$store.getters.currentUser.id;
      let participation = false;

      if (participations.length === 0) {
        return false;
      } else {
        participations.forEach(element => {
          if (element.user_id == user_id) {
            participation = true;
          } else participation = false;
        });
      }
      return participation;
    },
    enterAuction(auction) {
      this.$router.push("/auction/" + auction.id);
    }
  }
};
</script>

<style>
</style>