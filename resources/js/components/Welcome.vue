<template>
  <div class="welcome">
    <!-- ==== Main Slider ==== -->
    <!-- <main-slider class="mb-4"></main-slider> -->

    <!-- ==== My Participated Auctions  ==== -->
    <auction-slider
      :title="'Mes Enchères'"
      :color="'primary'"
      :auctions="myCurrentAuctions"
      :description="'Lorem Ipsum'"
      v-if="$auth.check()"
    ></auction-slider>

    <!-- ==== Auction online ==== -->
    <auction-slider
      :title="'Enchères en ligne'"
      :color="'success'"
      :auctions="onlineAuctions"
      :description="'Lorem Ipsum '"
    ></auction-slider>

    <!-- ==== Upcoming Auctions ==== -->
    <auction-slider
      :title="'Prochaines Enchères'"
      :color="'warning'"
      :auctions="upcomingAuctions"
      :description="'Lorem Ipsum '"
    ></auction-slider>
  </div>
</template>

<script>
import axios from "axios";
// import MainSlider from "./Template/MainSlider";
import AuctionSlider from "./Auction/sliders/AuctionSlider";

export default {
  data() {
    return {
      auctions: [],
      upcomingAuctions: [],
      onlineAuctions: [],
      myCurrentAuctions: []
    };
  },
  // MainSlider
  components: { AuctionSlider },
  mounted() {
    this.getUpcomingAuctions();
    this.getOnlineAuctions();
    // check user if online to get his current auctions
    this.$auth.check() ? this.getMyCurrentAuctions() : "";
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
    },
    getMyCurrentAuctions: function() {
      axios.get("/auction/my-current").then(data => {
        this.myCurrentAuctions = data.data;
      });
    }
  }
};
</script>
