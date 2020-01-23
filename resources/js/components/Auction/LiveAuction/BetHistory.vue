<template>
  <v-list two-line class="overflow-y-auto" style="max-height: 400px">
    <h4 class="title grey--text text--darken-3">Dernières mises</h4>
    <v-list-item-group active-class="primary--text">
      <template v-for="(item, index) in bets">
        <v-list-item :key="item.title" :class="{succes: index === 0, 'theme-light' : index === 0}">
          <template v-slot:default="{ active, toggle }">
            <v-list-item-content>
              <v-list-item-title v-text="item.user.name"></v-list-item-title>
              <v-list-item-subtitle
                class="primary--text"
                v-text="moment(item.created_at).locale('fr').fromNow()"
              ></v-list-item-subtitle>
              <!-- <v-list-item-subtitle>BBBB</v-list-item-subtitle> -->
            </v-list-item-content>

            <v-list-item-action>
              <v-btn depressed small>
                <v-icon small>money</v-icon>
                {{ item.price }} CFA
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index + 1 < bets.length" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
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