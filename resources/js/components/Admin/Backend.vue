<template>
    <v-card flat height="200px" tile>
        <v-toolbar dense flat color="grey lighten-3">
            <v-toolbar-title>Administration</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text :to="{ name: 'admin-products' }">Produits</v-btn>
                <v-btn text :to="{ name: 'admin-auctions' }">Enchères</v-btn>
                <v-btn text disabled>Statistiques</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <slot></slot>
    </v-card>
</template>
<script>
export default {};
</script>
