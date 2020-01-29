<template>
  <v-card>
    <v-card-title>
      <span class="headline">Resultat de l'enchère</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <!-- price and other stats -->
          <v-col md="6" xs="12" sm="12">
            <h3 class="subtitle">Other stats</h3>Prix final
            <v-chip class="ma-2" label color="success">197 CFA</v-chip>
          </v-col>
          <!-- bets list  -->
          <v-col md="6" xs="12" sm="12">
            <h3 class="subtitle">Mises ({{ resultat.length }})</h3>
            <div id="result-bets-box">
              <div v-for="(res, index) in resultat" :key="index">
                <b>{{index + 1}} - {{ res.user.name }}</b> mise
                <v-chip class="ma-2" label>{{ res.price }} CFA</v-chip>
                <span>le {{ res.created_at }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AuctionResultat",
  props: ["resultat"]
};
</script>

<style>
</style>