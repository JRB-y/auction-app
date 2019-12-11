<template>
  <v-card>
    <v-form enctype="multipart/form-data">
      <!-- title -->
      <v-card-title>
        <span class="headline">Product</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="editedProduct.name" label="Nom du Produit"></v-text-field>
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
              <image-input @fileChanged="fileChanged"></image-input>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </v-form>
  </v-card>
</template>
<script>
import ImageInput from "./imageInput";

export default {
  props: ["editedProduct"],
  components: { ImageInput },
  methods: {
    fileChanged: function(file) {
      this.$emit("fileChanged", file);
    },
    submit: function() {
      this.$emit("save");
    }
  }
};
</script>
