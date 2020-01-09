<template>
  <v-card>
    <v-form>
      <!-- title -->
      <v-card-title>
        <span class="headline">Enchère</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <!-- ====== Debut ====== -->
            <!-- Date -->
            <v-col cols="12" lg="6">
              <v-menu
                v-model="menuDateStart"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field label="Début" prepend-icon="event" v-on="on" :value="dateStart"></v-text-field>
                </template>
                <v-date-picker
                  v-model="editedAuction.start_date"
                  @input="menuDateStart = false"
                  locale="fr-FR"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <!-- Time -->
            <v-col cols="12" lg="6">
              <v-menu
                ref="menu"
                v-model="menuTimeStart"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="editedAuction.start_time"
                    label="Heure Début"
                    prepend-icon="access_time"
                    readonly
                    :value="editedAuction.start_time"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker v-if="menuTimeStart" v-model="editedAuction.start_time" full-width></v-time-picker>
              </v-menu>
            </v-col>
            <!-- ====== Fin ====== -->
            <!-- Date -->
            <v-col cols="12" lg="6">
              <v-menu
                v-model="menuDateEnd"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field label="Fin" prepend-icon="event" v-on="on" :value="dateEnd"></v-text-field>
                </template>
                <v-date-picker
                  v-model="editedAuction.end_date"
                  @input="menuDateEnd = false"
                  locale="fr-FR"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <!-- Time -->
            <v-col cols="12" lg="6">
              <v-menu
                ref="menu"
                v-model="menuTimeEnd"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="editedAuction.end_time"
                    label="Heure Fin"
                    prepend-icon="access_time"
                    readonly
                    :value="editedAuction.end_time"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker v-if="menuTimeEnd" v-model="editedAuction.end_time" full-width></v-time-picker>
              </v-menu>
            </v-col>

            <!-- ====== Products ====== -->
            <v-col cols="12" class="d-flex">
              <v-select
                :items="items"
                label="Produit"
                v-model="editedAuction.product.name"
                prepend-icon="pages"
                required
                flat
              ></v-select>
            </v-col>

            <!-- ====== Price ====== -->
            <v-col cols="12">
              <v-text-field
                v-model="editedAuction.price"
                label="Prix globale"
                type="number"
                prepend-icon="money"
                required
              />
            </v-col>

            <!-- ====== Entry Price ====== -->
            <v-col cols="12">
              <v-text-field
                v-model="editedAuction.entry_price"
                label="Droit d'entrée"
                type="number"
                prepend-icon="money"
                required
              />
            </v-col>

            <!-- ====== Room Size ====== -->
            <v-col cols="12">
              <v-text-field
                v-model="nbrJoueurs"
                label="Nombre de joueurs"
                type="number"
                prepend-icon="people"
                readonly
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="red darken-1" text>Annuler</v-btn>
        <v-btn color="green darken-1" text @click="submit">Enregistrer</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
import DatetimePicker from "vuetify-datetime-picker";
import axios from "axios";
import moment from "moment";

export default {
  props: ["editedAuction"],
  components: { DatetimePicker },
  data() {
    return {
      items: [],
      menuDateStart: false,
      menuDateEnd: false,
      menuTimeStart: false,
      menuTimeEnd: false
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    submit: function() {
      this.$emit("save");
    },
    getProducts: function() {
      axios.get("/product").then(data => {
        console.log(data.data);
        this.items = data.data.map(item => item.name);

        console.log(this.editedAuction);
      });
    }
  },
  computed: {
    dateStart() {
      return this.editedAuction.start_date
        ? moment(this.editedAuction.start_date).format("DD/MM/YYYY")
        : "";
    },
    dateEnd() {
      return this.editedAuction.end_date
        ? moment(this.editedAuction.end_date).format("DD/MM/YYYY")
        : "";
    },
    nbrJoueurs() {
      return Math.ceil(
        this.editedAuction.price / Math.max(this.editedAuction.entry_price, 1)
      );
    }
  }
};
</script>
