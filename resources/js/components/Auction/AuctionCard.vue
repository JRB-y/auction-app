<template>
  <v-card max-width="300" class="ma-1" outlined @click="auctionClicked(auction)">
    <!-- Title and start_date -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline text-center">{{ auction.product.name }}</v-list-item-title>
        <v-btn small dark text color="pink">
          {{ dateDiff }}
          <br />
          {{ moment(auction.start_date).format('DD/MM/YYYY') }} - {{ auction.start_time }}
        </v-btn>
        <!-- {{ moment(auction.start_date).format('DD/MM/YYYY') }}  -->
      </v-list-item-content>
    </v-list-item>

    <!-- Auction image -->
    <v-img :src="auction.product.img_path" aspect-ratio="1"></v-img>

    <!-- Auction description -->
    <v-card-text v-text="auction.product.desc.substring(0, 100)"></v-card-text>
  </v-card>
</template>
<script>
var moment = require("moment");

export default {
  props: ["auction"],
  data() {
    return {
      moment: moment
    };
  },
  methods: {
    auctionClicked: function(auction) {
      if (!this.$store.getters.loggedIn && auction.is_live) return null;
      if (auction.id !== undefined)
        this.$router.push({
          name: "auction-details",
          params: { id: auction.id }
        });
    }
  },
  computed: {
    dateDiff() {
      // let nbrDate = this.moment().diff(this.auction.start_date, "day");
      // let nbrTime = this.moment().diff(this.auction.start_time);

      let date = moment(
        this.auction.start_date + " - " + this.auction.start_time,
        "YYYY-MM-DD - HH:mm"
      );

      return date.fromNow();
    }
  }
};
</script>
