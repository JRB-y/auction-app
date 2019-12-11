<template>
  <admin-layout>
    <v-card>
      <!-- headers (title, search & add-product) -->
      <v-card-title>
        Produits
        <v-spacer></v-spacer>
        <!-- search -->
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <!-- Add new Product -->
        <v-btn color="primary" dark class="mb-2" @click="newProduct">Nouveau Produit</v-btn>
      </v-card-title>

      <!-- Products Datatable -->
      <product-list
        :products="products"
        :search="search"
        @editClicked="editProduct"
        @deleteClicked="deleteProduct"
      ></product-list>
    </v-card>
    <!-- dialog btn -->
    <v-dialog v-model="dialog" max-width="500px">
      <product-form :editedProduct="editedProduct" @save="save" @fileChanged="fileChanged"></product-form>
    </v-dialog>
  </admin-layout>
</template>

<script>
import axios from "axios";
import AdminLayout from "../AdminLayout";

import ProductList from "../../Product/ProductsList";
import ProductForm from "../../Product/ProductForm";

export default {
  components: { AdminLayout, ProductList, ProductForm },
  data() {
    return {
      products: [],
      dialog: false,
      search: "",
      defaultProduct: {
        id: "",
        name: "",
        desc: "",
        img_path: ""
      },
      editedProduct: {
        id: "",
        name: "",
        desc: "",
        img_path: ""
      },
      image: null,
      editedIndex: -1
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    // get all the products
    getProducts: function() {
      axios.get("/product").then(data => {
        this.products = data.data;
      });
    },
    // when user click on "Nouveau Produit" btn
    newProduct: function() {
      Object.assign(this.editedProduct, this.defaultProduct);
      this.editedIndex = -1;
      this.dialog = true;
    },
    // delete Product
    deleteProduct: function(item) {
      // alert("Parent");
      let index = this.products.indexOf(item);
      if (index > -1) {
        axios.delete(`/product/${item.id}`).then(data => {
          console.log(data);
          this.products.splice(index, 1);
        });
      }
    },
    // Edit a product
    editProduct: function(item) {
      this.editedIndex = this.products.indexOf(item);
      if (this.editedIndex > -1) {
        this.editedProduct = Object.assign({}, item);
        this.dialog = true;
      }
    },
    // save
    save: function() {
      // its an edit
      if (this.editedIndex > -1) {
        let formData = this.setForm(new FormData());
        formData.append("_method", "PATCH");
        axios.post(`/product/${this.editedProduct.id}`, formData).then(data => {
          this.editedProduct.img_path = data.data.new_img_path;
          Object.assign(this.products[this.editedIndex], this.editedProduct);
          this.editedProduct = Object.assign({}, this.defaultProduct);
          this.dialog = false;
        });
      }
      // it's a creation
      else {
        let formData = this.setForm(new FormData());

        axios.post("/product", formData).then(data => {
          this.editedProduct.img_path = data.data.img_path;

          this.products.push(Object.assign({}, this.editedProduct));

          this.dialog = false;
          Object.assign({}, this.defaultProduct);
          this.editedIndex = -1;
        });
      }
    },
    fileChanged: function(file) {
      this.image = file;
    },
    setForm: function(formData) {
      formData.append("image", this.image || "");
      formData.append("name", this.editedProduct.name || "");
      formData.append("desc", this.editedProduct.desc || "");

      return formData;
    }
  }
};
</script>
