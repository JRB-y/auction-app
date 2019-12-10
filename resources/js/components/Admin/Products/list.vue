<template>
    <v-data-table :headers="headers" :items="products" :search="search">
        <!-- slot (img) -->
        <template v-slot:item.img_path="{ item }">
            <div class="p-2">
                <v-avatar>
                    <v-img :src="item.img_path" :alt="item.name"></v-img>
                </v-avatar>
            </div>
        </template>
        <template v-slot:item.desc="{ item }">
            <p>{{ item.desc.slice(0, 100) }}</p>
        </template>
        <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editClicked(item)">
                edit
            </v-icon>
            <v-icon small @click="deleteClicked(item)">
                delete
            </v-icon>
        </template>
        <!-- end slot (imag) -->
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
                { text: "Description", value: "desc" },
                { text: "Actions", value: "action", sortable: false }
            ]
        };
    },
    methods: {
        editClicked: function(item) {
            this.$emit("editClicked", item);
            // console.log(this.$refs);
        },
        deleteClicked: function(item) {
            this.$emit("deleteClicked", item);
        }
    }
};
</script>
