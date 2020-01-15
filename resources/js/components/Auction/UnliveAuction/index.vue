<template>
  <div>
    <v-card class="mx-auto">
      <v-toolbar dense>
        <v-btn text icon to="/">
          <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        <v-toolbar-title>{{auction.product.name}}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-btn
        color="primary"
        class="mt-1"
        block
        tile
        @click="dialogParticiper = !dialogParticiper"
        v-if="!userParticipated"
      >Participer ({{ auction.entry_price }} CFA)</v-btn>
      <v-btn
        depressed
        small
        block
        dark
        text
        class="mt-1"
        color="pink"
      >Début: {{ moment(auction.start_date).format('DD/MM/YYYY') }} - {{ auction.start_time}}</v-btn>

      <v-btn
        depressed
        small
        block
        tile
        dark
        text
        color="success"
      >Participants: {{ auction.participations.length }}</v-btn>
      <v-img
        :aspect-ratio="1"
        max-height="376"
        max-width="375"
        :src="auction.product.img_path"
        class="grey lighten-2 mx-auto mt-5"
      ></v-img>

      <v-spacer></v-spacer>
      <v-card-text>{{ auction.product.desc }}</v-card-text>

      <!-- btn participer -->
    </v-card>
    <!-- Diablog participer -->
    <v-dialog v-model="dialogParticiper" width="500">
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
            @click="confirmerParticipation"
            :disabled="!$auth.check()"
          >Confirmer ({{ auction.entry_price }} CFA)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "UnliveAuction",
  props: ["auction"],
  created() {
    //
  },
  data() {
    return {
      moment: moment,
      dialogParticiper: false
    };
  },
  computed: {
    userParticipated() {
      let participations = this.auction.participations;
      let user_id = this.$auth.user().id;
      let participation = false;

      if (participations.length === 0) {
        return false;
      } else {
        participations.forEach(element => {
          if (element.user_id == this.$auth.user().id) {
            participation = true;
          } else participation = false;
        });
      }
      return participation;
    }
  },
  methods: {
    participer() {
      return null;
    },
    confirmerParticipation() {
      axios.post("/participer", { auction_id: this.auction.id }).then(data => {
        console.log(data);
        this.dialogParticiper = false;
        this.$emit("userParticipated");
      });
    }
  }
};
</script>