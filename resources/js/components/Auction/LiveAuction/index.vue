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
        PRIX:
        <b>100</b> CFA
      </span>
    </v-toolbar>

    <v-row no-gutters>
      <v-col>
        <v-img
          :aspect-ratio="1"
          :src="auction.product.img_path"
          class="grey lighten-2 mx-auto mt-5"
        ></v-img>
        <span
          class="grey--text text--darken-1 caption ml-5"
        >Fin {{ moment(auction.end_date).locale('fr').fromNow() }}</span>
      </v-col>
      <v-col>
        <bet-history :bets="bets"></bet-history>
      </v-col>
    </v-row>
    <hr />
    <!-- Auction description -->
    <div id="chat-box">
      <v-card-text>{{ auction.product.desc }}</v-card-text>
    </div>

    <v-spacer></v-spacer>

    <!-- Footer Button -->
    <v-toolbar flat>
      <br />

      <v-text-field v-model="message" label="Votre message"></v-text-field>
      <!-- <v-btn depressed small color="primary">
        <span>Prix Total: 10</span>
      </v-btn>-->
    </v-toolbar>

    <v-btn depressed small color="success" @click="dialogMise = true" block tile>
      <span>Jouer</span>
    </v-btn>

    <!-- Dialog mise -->
    <v-dialog v-model="dialogMise" width="500">
      <v-card class="mx-auto">
        <v-card-title>
          <h2 class="display-1">{{auction.product.name}}</h2>
          <v-spacer></v-spacer>
          <span class="title">40 FCA</span>
        </v-card-title>

        <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt modi eius omnis reiciendis culpa ipsum, praesentium harum placeat sapiente aliquid ex porro perferendis veritatis ducimus tempore iusto voluptas? Sit, iste..</v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <span class="subheading">Votre mise</span>

          <v-chip-group
            v-model="miseSelected"
            active-class="primary--text text--accent-4"
            mandatory
          >
            <v-chip v-for="mise in mises" :key="mise" :value="mise">{{ mise }}</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn block class="white--text" color="primary accent-4" @click="miser">Miser</v-btn>
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
  name: "UnliveAuction",
  props: ["auction"],
  components: { BetHistory },
  data() {
    return {
      moment: moment,
      dialogMise: false,
      mises: [1, 5, 10, 50],
      miseSelected: null,
      // message for the chat
      message: ""
    };
  },
  computed: {
    bets() {
      const bets = [];
      bets.push(this.auction.bets[this.auction.bets.length - 1]);
      bets.push(this.auction.bets[this.auction.bets.length - 2]);
      bets.push(this.auction.bets[this.auction.bets.length - 3]);
      return bets;
    }
  },
  methods: {
    miser() {
      this.$store
        .dispatch("miser", {
          auction_id: this.auction.id,
          price: this.miseSelected,
          user_id: this.$store.getters.currentUser.id
        })
        .then(data => {
          this.$emit("newMise", data.data.bet);
          this.dialogMise = false;
          this.miseSelected = null;
        });
    }
  }
};
</script>