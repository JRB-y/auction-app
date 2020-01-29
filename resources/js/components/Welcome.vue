<template>
  <div class="welcome">
    <!-- ==== Main Slider ==== -->
    <main-slider class="mb-4"></main-slider>

    <!-- New Section -->
    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h1 class="display-1">Meilleurs produits au prix réduit.</h1>
            <span
              class="subheading"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nesciunt consequatur illo. Aliquid, veniam voluptatem tempora rem quia, in distinctio praesentium minus hic ipsam, possimus neque dolore non dicta quae!</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">accessibility</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Insription Facile</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">credit_card</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Payement Sécurisé</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="primary--text">mdi-wrench</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">Livraison gratuite</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- Parallax -->

    <!-- End New Section -->

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
import MainSlider from "./Template/MainSlider";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Welcome",
  components: { AuctionSlider, MainSlider },
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
