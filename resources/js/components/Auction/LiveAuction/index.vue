<template>
  <v-card class="mx-auto">
    <v-toolbar dense>
      <v-btn text icon to="/">
        <v-icon>keyboard_backspace</v-icon>
      </v-btn>
      <v-icon small color="success">mdi-checkbox-blank-circle</v-icon>

      <v-toolbar-title>{{auction.product.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="primary" depressed small>
        <span>Fin {{ moment(auction.end_date).locale('fr').fromNow() }}</span>
      </v-btn>
    </v-toolbar>

    <v-row no-gutters>
      <v-col>
        <v-img
          :aspect-ratio="1"
          max-width="375"
          max-height="376"
          :src="auction.product.img_path"
          class="grey lighten-2 mx-auto mt-5"
        ></v-img>
      </v-col>
      <v-col>
        <bet-history :bets="auction.bets"></bet-history>
      </v-col>
    </v-row>

    <!-- Auction description -->
    <v-card-text>{{ auction.product.desc }}</v-card-text>

    <v-spacer></v-spacer>

    <!-- Footer Button -->
    <v-toolbar flat>
      <v-btn text icon>
        <v-icon>exit_to_app</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn depressed small color="success" @click="dialogMise = true">
        <span>Mise</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed small color="primary">
        <span>Prix Total: 10</span>
      </v-btn>
    </v-toolbar>

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
      miseSelected: null
    };
  },
  methods: {
    miser() {
      axios
        .post("/auction/mise", {
          id: this.auction.id,
          price: this.miseSelected
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