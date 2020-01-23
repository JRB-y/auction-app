<template>
  <div>
    <!-- ==== title ==== -->
    <h4 class="title grey--text text--darken-3">Dernières mises</h4>
    <!-- ==== List Item Group ==== -->
    <v-list dense>
      <v-list-item-group>
        <!--  :class="{'primary-active': index === 0}" -->
        <div v-for="(bet, index) in bets" :key="bet.title">
          <v-list-item :class="{'success': index === 0}">
            <v-list-item-content :class="{ 'white--text': index === 0 }">
              <!-- ==== User name ==== -->
              <v-list-item-title>{{ index + 1 }}. {{bet.user.name}}</v-list-item-title>
            </v-list-item-content>
            <!-- ==== Bet Price ==== -->
            <small class="subtitle" :class="{ 'white--text': index === 0 }">{{ bet.price }} CFA</small>
          </v-list-item>
          <v-divider v-if="index + 1 < bets.length" :key="index"></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "BetHistory",
  props: ["bets"],
  data() {
    return {
      moment: moment
    };
  }
};
</script>