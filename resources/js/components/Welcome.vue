<template>
  <div class="welcome">
    <!-- ==== Main Slider ==== -->
    <main-slider class="mb-4"></main-slider>

    <!-- ==== Auction online ==== -->
    <auction-slider
      :title="'Enchère en ligne'"
      :color="'success'"
      :auctions="onlineAuctions"
      :description="'Lorem Ipsum '"
    ></auction-slider>

    <!-- ==== Upcoming Auctions ==== -->
    <auction-slider
      :title="'Prochaine Enchère'"
      :color="'warning'"
      :auctions="upcomingAuctions"
      :description="'Lorem Ipsum '"
    ></auction-slider>
  </div>
</template>

<script>
import axios from "axios";
import MainSlider from "./Template/MainSlider";
import AuctionSlider from "./Auction/sliders/AuctionSlider";

export default {
  data() {
    return {
      auctions: [],
      upcomingAuctions: [],
      onlineAuctions: []
    };
  },
  components: { MainSlider, AuctionSlider },
  mounted() {
    this.getUpcomingAuctions();
    this.getOnlineAuctions();
  },
  methods: {
    getUpcomingAuctions: function() {
      axios.get("/auction/upcoming").then(data => {
        this.upcomingAuctions = data.data;
      });
    },
    getOnlineAuctions: function() {
      axios.get("/auction/live").then(data => {
        this.onlineAuctions = data.data;
      });
    }
  }
};
</script>
