<template>
    <admin-backend>
        <v-card>
            <!-- headers (title, search & add-product) -->
            <v-card-title>
                Produits
                <v-spacer></v-spacer>
                <!-- search -->
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <!-- Add new Product -->
                <v-btn color="primary" dark class="mb-2" @click="dialog = true">
                    Nouveau Produit
                </v-btn>
            </v-card-title>

            <!-- Products Datatable -->
            <product-list
                :products="products"
                :search="search"
                @editClicked="editProduct"
                @delete-clicked="deleteProduct"
            >
            </product-list>
        </v-card>
        <!-- dialog btn -->
        <v-dialog v-model="dialog" max-width="500px" @click:outside="close()">
            <v-card>
                <v-form enctype="multipart/form-data">
                    <v-card-title>
                        <span class="headline">Produit</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="editedProduct.name"
                                        label="Nom du Produit"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        filled
                                        label="Description"
                                        auto-grow
                                        v-model="editedProduct.desc"
                                        :value="editedProduct.desc"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <image-input
                                        @fileChanged="fileChanged"
                                    ></image-input>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">
                            Cancel
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="save"
                            >Save</v-btn
                        >
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </admin-backend>
</template>

<script>
import axios from "axios";
import AdminBackend from "../Backend";
import ProductList from "./list";
import ImageInput from "./imageInput";

export default {
    components: { AdminBackend, ProductList, ImageInput },
    data() {
        return {
            products: [],
            dialog: false,
            search: "",
            defaultProduct: {
                name: "",
                desc: "",
                img_path: "",
                image: {}
            },
            editedProduct: {
                name: "",
                desc: "",
                img_path: "",
                image: {}
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
        // delete Product
        deleteProduct: function() {
            //
        },
        // save
        save: function() {
            // its an edit
            if (this.editedIndex > -1) {
                const config = {
                    headers: { "content-type": "multipart/form-data" }
                };
                let formData = this.setForm(new FormData());

                axios
                    .put(`/product/${this.editedProduct.id}`, formData, config)
                    .then(data => {
                        // Object.assign(
                        //     this.products[this.editedIndex],
                        //     this.editedProduct
                        // );

                        console.log("YESSSS");
                    });
            }
            // it's a creation
            else {
                const config = {
                    headers: { "content-type": "multipart/form-data" }
                };
                let formData = this.setForm(new FormData());

                axios.post("/product", formData, config).then(data => {
                    this.products.push(this.editedProduct);
                });
            }
            this.close();
        },
        // edit product
        editProduct: function(item) {
            this.editedIndex = this.products.indexOf(item);
            if (this.editedIndex > -1) {
                this.editedProduct = item;
            } else {
                this.editedProduct = Object.assign({}, item);
            }
            this.dialog = true;
        },
        // close
        close: function() {
            this.dialog = false;
            this.editedProduct = this.defaultProduct;
            this.editedIndex = -1;
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
