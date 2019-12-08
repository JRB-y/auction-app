<template>
    <div>
        <v-app-bar color="grey darken-4" dark flat>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-bold">
                AUCTION APP
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                depressed
                small
                color="pink lighten-2"
                class="ma-2 white--text"
            >
                Se Connecter
            </v-btn>

            <template v-slot:extension>
                <v-tabs align-with-title centered dark>
                    <v-tab to="/" ripple class="text--white">
                        <v-icon>home</v-icon>
                    </v-tab>
                    <v-tab class="white--text">HiTech</v-tab>
                    <v-tab class="white--text">Sport</v-tab>
                    <v-tab class="white--text">Téléphoens</v-tab>
                    <v-tabs-slider color="pink"></v-tabs-slider>
                </v-tabs>
            </template>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: null
        };
    }
};
</script>
