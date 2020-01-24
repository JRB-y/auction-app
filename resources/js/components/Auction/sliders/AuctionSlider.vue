<template>
  <v-card class="mb-4">
    <v-toolbar flat>
      <v-toolbar-title class="font-weight-bold">
        <v-icon small :color="color">mdi-checkbox-blank-circle</v-icon>
        {{ title }}
        <small>({{ auctions.length }})</small>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- <v-banner single-line>{{ description }}.</v-banner> -->

    <v-slide-group show-arrows center-active>
      <v-slide-item v-for="auction in auctions" :key="auction.id">
        <!-- ===== Signle Auction Card ===== -->
        <auction-card :auction="auction" max-width="1"></auction-card>

        <!-- ===== End Signle Auction Card ===== -->
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
import AuctionCard from "../AuctionCard";

export default {
  props: ["auctions", "title", "color", "description"],
  components: { AuctionCard },
  data() {
    return {};
  }
};
</script>
