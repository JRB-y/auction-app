<template>
  <v-card class="mx-auto">
    <v-toolbar dense>
      <v-btn text icon to="/">
        <v-icon>keyboard_backspace</v-icon>
      </v-btn>
      <v-icon small color="success">mdi-checkbox-blank-circle</v-icon>

      <v-toolbar-title>{{auction.product.name}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="subtitle-2 success--text">
        <b>100</b> CFA
      </span>
    </v-toolbar>

    <!-- ==== 2 cols: Image  / Bets and button 'jouer' -->
    <v-row no-gutters class="mt-3 mx-auto mr-3 mb-3">
      <!-- ===== Col Left  ===== -->
      <v-col>
        <!-- ==== Image -->
        <v-img :aspect-ratio="1" max-height="376" max-width="375" :src="auction.product.img_path"></v-img>

        <!-- TODO: need to find a better place for the date_end  -->
        <!-- <span
          class="grey--text text--darken-1 caption ml-5"
        >Fin {{ moment(auction.end_date).locale('fr').fromNow() }}</span>-->
      </v-col>
      <!-- ===== Col Right  ===== -->
      <v-col>
        <!-- ==== Bet History ==== -->
        <bet-history :bets="bets"></bet-history>
        <!-- ==== Btn Jouer -->
        <v-btn depressed small color="primary" @click="dialogMise = true" block tile>
          <span>Mise</span>
        </v-btn>
      </v-col>
    </v-row>
    <!--  -->
    <!-- Auction description -->

    <v-spacer></v-spacer>
    <v-container>
      <div id="chat-box">
        <h1 class="title">Messages</h1>
        <v-card-text>{{ auction.product.desc }}</v-card-text>
      </div>
    </v-container>
    <!-- Footer Button -->
    <v-toolbar flat>
      <v-text-field v-model="message" label="Votre message"></v-text-field>
    </v-toolbar>

    <!-- Dialog mise -->
    <v-dialog v-model="dialogMise" width="500">
      <v-card class="mx-auto">
        <v-card-title>
          <h2 class="display-1">{{auction.product.name}}</h2>
        </v-card-title>

        <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt modi eius omnis reiciendis culpa ipsum, praesentium harum placeat sapiente aliquid ex porro perferendis veritatis ducimus tempore iusto voluptas? Sit, iste..</v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <span class="subheading">Vous pouvez miser:</span>

          <v-chip-group
            v-model="miseSelected"
            active-class="primary--text text--accent-4"
            mandatory
          >
            <v-chip v-for="mise in mises" :key="mise" :value="mise">{{ mise }}</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="primary accent-4"
            @click="miser"
            :loading="miseIsLoading"
          >Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import axios from "axios";

import BetHistory from "./BetHistory";
import moment from "moment";

export default {
  name: "LiveAuction",
  props: ["auction"],
  components: { BetHistory },
  data() {
    return {
      moment: moment,
      dialogMise: false,
      mises: [1, 5, 10, 50],
      miseSelected: null,
      // message for the chat
      message: "",
      miseIsLoading: false
    };
  },
  beforeCreate() {
    if (!this.$store.getters.loggedIn) {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    bets() {
      const bets = [];
      if (this.auction.bets.length !== 0) {
        if (this.auction.bets[this.auction.bets.length - 1])
          bets.push(this.auction.bets[this.auction.bets.length - 1]);

        if (this.auction.bets[this.auction.bets.length - 2])
          bets.push(this.auction.bets[this.auction.bets.length - 2]);

        if (this.auction.bets[this.auction.bets.length - 3])
          bets.push(this.auction.bets[this.auction.bets.length - 3]);
      }
      return bets;
    }
  },
  methods: {
    miser() {
      this.miseIsLoading = true;
      this.$store
        .dispatch("miser", {
          auction_id: this.auction.id,
          price: this.miseSelected,
          user_id: this.$store.getters.currentUser.id
        })
        .then(data => {
          this.$emit("newMise", data.data.bet);
          this.miseSelected = null;
          this.dialogMise = false;
          this.miseIsLoading = false;
        });
    }
  }
};
</script>