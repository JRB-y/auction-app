<template>
  <v-card class="mx-auto">
    <v-toolbar dense>
      <v-btn text icon to="/">
        <v-icon>keyboard_backspace</v-icon>
      </v-btn>
      <v-toolbar-title>{{auction.product.name}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon color="primary">
        <span class="title">{{ auction.entry_price }}</span>
        <v-icon class>attach_money</v-icon>
      </v-btn>
    </v-toolbar>
    <v-btn
      small
      dark
      text
      class="mt-5"
      color="pink"
    >{{ moment(auction.start_date).format('DD/MM/YYYY') }} - {{ auction.start_time}}</v-btn>
    <v-img
      :aspect-ratio="1"
      max-width="500"
      max-height="300"
      :src="auction.product.img_path"
      class="grey lighten-2 mx-auto mt-5"
    ></v-img>

    <v-card-text>{{ auction.product.desc }}</v-card-text>
    <v-spacer></v-spacer>
    <v-col>
      <v-btn color="success" class depressed small width="100%">
        <span class="white--text">
          Participer avec
          <span>{{ auction.entry_price }}</span>
          <v-icon>attach_money</v-icon>
        </span>
        <!-- <v-icon class="white--text">mdi-heart</v-icon> -->
      </v-btn>
    </v-col>
    <!-- btn participer -->
  </v-card>
</template>
<script>
import moment from "moment";

export default {
  name: "UnliveAuction",
  props: ["auction"],
  created() {
    console.log(this.auction);
  },
  data() {
    return {
      moment: moment
    };
  }
};
</script>