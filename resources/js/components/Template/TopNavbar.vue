<template>
    <nav>
        <v-app-bar color="grey darken-4" dark flat>
            <!-- Toggle drawer (menu) -->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <!-- Application title / logo -->
            <v-toolbar-title class="font-weight-bold">
                AUCTION APP
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- Se connecter -->
            <router-link to="/login">
                <v-btn depressed small color="primary" class="ma-2 white--text">
                    Se Connecter
                </v-btn>
            </router-link>

            <!-- Categories items -->
            <template v-slot:extension>
                <v-tabs align-with-title centered dark>
                    <v-tab to="/" ripple class="primary">
                        <v-icon>home</v-icon>
                    </v-tab>
                    <v-tab class="white--text">HiTech</v-tab>
                    <v-tab class="white--text">Sport</v-tab>
                    <v-tab class="white--text">Téléphoens</v-tab>
                    <v-tabs-slider color="primary"></v-tabs-slider>
                </v-tabs>
            </template>
        </v-app-bar>
    </nav>
</template>
<script>
export default {};
</script>
