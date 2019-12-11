<template>
  <v-card class="mb-4">
    <v-toolbar flat>
      <v-toolbar-title class="font-weight-bold">
        <v-icon small color="warning">mdi-checkbox-blank-circle</v-icon>Enchères à venir
        <small>({{ auctions.length }})</small>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-banner single-line>Vous pouvez participer aux prochaines enchères.</v-banner>

    <v-card-text class="grey lighten-4">
      <v-slide-group show-arrows center-active>
        <v-slide-item v-for="auction in auctions" :key="auction.id">
          <!-- ===== Signle Auction Card ===== -->

          <single-auction-card :auction="auction"></single-auction-card>

          <!-- ===== End Signle Auction Card ===== -->
        </v-slide-item>
      </v-slide-group>
    </v-card-text>
  </v-card>
</template>

<script>
import AuctionCard from "../AuctionCard";

export default {
  props: ["auctions"],
  components: { AuctionCard },
  data() {
    return {};
  }
};
</script>
