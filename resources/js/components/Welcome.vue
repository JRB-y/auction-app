<template>
  <div class="welcome">
    <!-- ==== Main Slider ==== -->
    <main-slider class="mb-4"></main-slider>

    <!-- ==== Upcoming Auctions ==== -->
    <upcoming-auctions :auctions="upcomingAuctions"></upcoming-auctions>

    <!-- ==== Auction online ==== -->
    <online-auctions :auctuions="onlineAuctions"></online-auctions>
  </div>
</template>

<script>
import axios from "axios";
import MainSlider from "./Template/MainSlider";
import UpcomingAuctions from "./Auction/sliders/UpcomingAuctions";
import OnlineAuctions from "./Auction/sliders/OnlineAuctions";

export default {
  data() {
    return {
      auctions: [],
      upcomingAuctions: [],
      onlineAuctions: []
    };
  },
  components: { MainSlider, UpcomingAuctions, OnlineAuctions },
  mounted() {
    this.getUpcomingAuctions();
  },
  methods: {
    getUpcomingAuctions: function() {
      axios.get("/auction").then(data => {
        this.upcomingAuctions = data.data;
      });
    }
  }
};
</script>
