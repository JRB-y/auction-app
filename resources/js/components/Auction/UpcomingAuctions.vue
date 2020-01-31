<template>
  <v-container>
    <h1>Prochaines Enchères</h1>
    <v-card dark v-for="(auction, index) in upcomingAuctions" :key="index" class="mb-1">
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="auction.product.img_path"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="headline">
            <span class="mr-1">{{auction.product.name}}</span>
            <small class="title primary--text">entrée {{ auction.entry_price }} CFA</small>
          </v-card-title>
          <v-card-subtitle>Début: {{ moment(auction.start_date).format('DD/MM/YYYY') }} à {{ auction.start_time }}</v-card-subtitle>
          <v-card-subtitle>Participations: {{ auction.participations.length }}</v-card-subtitle>
          <v-spacer></v-spacer>
        </div>
      </div>
      <v-card-actions>
        <v-btn
          color="green"
          depressed
          block
          small
          @click="participerClicked(auction)"
          v-if="!userParticipated(auction)"
        >Participer {{ auction.entry_price }} CFA</v-btn>

        <v-chip
          class="ma-2"
          color="green"
          text-color="white"
          block
          v-if="userParticipated(auction)"
        >Vous participez déjà</v-chip>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialogParticiper" v-if="auction != null" width="500">
      <v-card class="mx-auto">
        <v-card-title>
          <h2 class="display-1">{{auction.product.name}}</h2>
          <v-spacer></v-spacer>
          <span class="title">{{auction.entry_price}} CFA</span>
        </v-card-title>

        <v-card-text>Pour participer il faut payer le droit d'entrée.</v-card-text>
        <v-card-text>
          <span
            class="subheading"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt modi eius omnis reiciendis culpa ipsum, praesentium harum placeat sapiente aliquid ex porro perferendis veritatis ducimus tempore iusto voluptas? Sit, iste..</span>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="primary accent-4"
            :loading="loading"
            @click="confirmerParticipation"
          >Confirmer ({{ auction.entry_price }} CFA)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  name: "UpcomingAuctions",
  data() {
    return {
      moment: null,
      dialogParticiper: false,
      auction: null,
      loading: false
    };
  },
  created() {
    this.$store.dispatch("upcomingAuctions");
    this.moment = moment;
  },
  computed: {
    upcomingAuctions: {
      get() {
        return this.$store.getters.upcomingAuctions;
      },
      set(val) {
        this.value = val;
      }
    }
  },
  methods: {
    participerClicked(auction) {
      this.auction = auction;
      this.dialogParticiper = true;
    },
    confirmerParticipation() {
      if (!this.$store.getters.currentUser) {
        this.$router.push({ name: "login" });
        return;
      }
      this.loading = true;
      this.$store
        .dispatch("participer", {
          auction_id: this.auction.id,
          user_id: this.$store.getters.currentUser.id
        })
        .then(data => {
          this.$store.dispatch("upcomingAuctions");
          this.dialogParticiper = false;
          this.loading = false;
          // this.$emit("userParticipated");
        });
    },
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
    }
  }
};
</script>

<style>
</style>