<template>
  <admin-layout>
    <v-card>
      <!-- headers (title, search & add-product) -->
      <v-card-title>
        Enchères
        <v-spacer></v-spacer>
        <!-- search -->
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <!-- Add new Product -->
        <v-btn color="primary" dark class="mb-2" @click="newAuction">Nouvelle Enchère</v-btn>
      </v-card-title>

      <!-- Auctions Datatable -->
      <auction-list
        :auctions="auctions"
        :search="search"
        @editClicked="editAuction"
        @deleteClicked="deleteAuction"
        @showResultat="showResultat"
        @goLive="goLive"
      ></auction-list>
    </v-card>
    <!-- dialog btn -->
    <v-dialog v-model="dialog">
      <auction-form :editedAuction="editedAuction" @save="save"></auction-form>
    </v-dialog>

    <v-dialog v-model="auctionResult">
      <auction-resultat :resultat="resultat"></auction-resultat>
    </v-dialog>
  </admin-layout>
</template>

<script>
import axios from "axios";
import AdminLayout from "../AdminLayout";

import AuctionList from "../../Auction/AuctionList";
import AuctionForm from "../../Auction/AuctionForm";
// auction resultat in dialog
import AuctionResultat from "./AuctionResultat";

export default {
  components: { AdminLayout, AuctionList, AuctionForm, AuctionResultat },
  data() {
    return {
      auctions: [],
      dialog: false,
      search: "",
      defaultAuction: {
        id: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        entry_price: "",
        is_live: "",
        room_size: "",
        productName: null,
        product: {
          name: ""
        },
        price: ""
      },
      editedAuction: {
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        entry_price: "",
        room_size: "",
        productName: null,
        product: {
          name: ""
        },
        price: ""
      },
      editedIndex: -1,
      auctionResult: false,
      resultat: null
    };
  },
  mounted() {
    this.getAuctions();
  },
  methods: {
    // get all the auctions
    getAuctions: function() {
      axios.get("/auction").then(data => {
        this.auctions = data.data;
      });
    },
    // when user click on "Nouvelle Enchère" btn
    newAuction: function() {
      Object.assign(this.editedAuction, this.defaultAuction);
      this.editedIndex = -1;
      this.dialog = true;
    },
    // delete Auction
    deleteAuction: function(item) {
      // alert("Parent");
      let index = this.auctions.indexOf(item);
      if (index > -1) {
        axios.delete(`/auction/${item.id}`).then(data => {
          this.auctions.splice(index, 1);
        });
      }
    },
    // Edit an auction
    editAuction: function(item) {
      this.editedIndex = this.auctions.indexOf(item);
      if (this.editedIndex > -1) {
        this.editedAuction = Object.assign({}, item);
        this.dialog = true;
      }
    },
    // save
    save: function() {
      // its an edit
      if (this.editedIndex > -1) {
        // let formData = this.setForm(new FormData(), "PATCH");
        axios
          .post(`/auction/${this.editedAuction.id}`, {
            auction: this.editedAuction,
            _method: "patch"
          })
          .then(data => {
            this.editedAuction.img_path = data.data.new_img_path;
            Object.assign(this.auctions[this.editedIndex], this.editedAuction);
            this.editedAuction = Object.assign({}, this.defaultAuction);
            this.dialog = false;
          });
      }
      // it's a creation
      else {
        // let formData = this.setForm(new FormData());

        axios.post("/auction", this.editedAuction).then(data => {
          this.auctions.push(Object.assign({}, this.editedAuction));
          this.dialog = false;
          Object.assign({}, this.defaultAuction);
          this.editedIndex = -1;
        });
      }
    },

    goLive: function(item) {
      let id = item.id;
      axios.post("/auction/goLive", { id }).then(data => {
        let auction = this.auctions[this.auctions.indexOf(item)];
        auction.is_live = !auction.is_live;
      });
    },
    showResultat: function(item) {
      // We need to get the last auctions and the total price of the auction.
      // All Auctions
      console.log(item);
      this.resultat = item.bets;
      this.auctionResult = true;
    },
    setForm: function(formData, method = "POST") {
      formData.append("date_start", this.editedAuction.date_start || "");
      formData.append("date_end", this.editedAuction.date_end || "");
      formData.append("entry_price", this.editedAuction.entry_price || "");
      formData.append("is_live", this.editedAuction.is_live || "");
      formData.append("room_size", this.editedAuction.room_size || "");
      formData.append("product_id", this.editedAuction.product_id || "");
      formData.append("_method", method);
      return formData;
    }
  }
};
</script>
