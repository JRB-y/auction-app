<template>
  <div class="welcome">
    <!-- ==== Main Slider ==== -->
    <!-- <main-slider class="mb-4"></main-slider> -->

    <!-- ==== My Participated Auctions  ==== -->
    <!-- v-if="$auth.check()" -->
    <!-- <auction-slider
      :title="'Mes Enchères'"
      :color="'primary'"
      :auctions="myCurrentAuctions"
      :description="'Lorem Ipsum'"
    ></auction-slider>-->

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
import AuctionSlider from "./Auction/sliders/AuctionSlider";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Welcome",
  components: { AuctionSlider },
  created() {
    this.$store.dispatch("onlineAuctions");
    this.$store.dispatch("upcomingAuctions");
  },
  computed: {
    onlineAuctions: {
      get() {
        return this.$store.getters.onlineAuctions;
      },
      set(val) {
        this.value = val;
      }
    },
    upcomingAuctions: {
      get() {
        return this.$store.getters.upcomingAuctions;
      },
      set(val) {
        this.value = val;
      }
    }
  },
  methods: mapActions(["upcomingAuctions", "onlineAuctions"])
};
</script>
