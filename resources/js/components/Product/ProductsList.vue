<template>
  <v-data-table :headers="headers" :items="products" :search="search">
    <!-- img_path -->
    <template v-slot:item.img_path="{ item }">
      <div class="p-2">
        <v-avatar>
          <v-img :src="item.img_path" :alt="item.name"></v-img>
        </v-avatar>
      </div>
    </template>
    <!-- Description -->
    <template v-slot:item.desc="{ item }">
      <p>{{ item.desc !== null ? item.desc.slice(0, 100) : '' }}</p>
    </template>
    <!-- Edit Buttons -->
    <template v-slot:item.action="{ item }">
      <v-icon @click="editClicked(item)" small class="mr-2">edit</v-icon>
      <v-icon @click="deleteClicked(item)" small>delete</v-icon>
    </template>
  </v-data-table>
</template>
<script>
import axios from "axios";

export default {
  props: ["products", "search"],

  data() {
    return {
      headers: [
        { text: "Image", value: "img_path", sortable: false },
        { text: "Nom", value: "name", align: "left" },
        { text: "Description", value: "desc", sortable: false },
        { text: "Actions", value: "action", sortable: false }
      ]
    };
  },
  methods: {
    editClicked: function(item) {
      this.$emit("editClicked", item);
    },
    deleteClicked: function(item) {
      this.$emit("deleteClicked", item);
    }
  }
};
</script>
