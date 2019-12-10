<template>
    <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Image du produit"
        prepend-icon="mdi-camera"
        label="Image"
        @change="onFilePicked"
    ></v-file-input>
</template>

<script>
export default {
    methods: {
        // file picked
        onFilePicked: function(file) {
            this.$emit("fileChanged", file);
        }
    }
};
</script>
