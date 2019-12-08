<template>
    <v-card class="mb-4">
        <v-toolbar flat>
            <v-toolbar-title class="font-weight-bold">
                <v-icon small color="success">
                    mdi-checkbox-blank-circle
                </v-icon>
                Enchères en cours
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-banner single-line :sticky="sticky">
            Vous ne pouvez pas participez à une enchère en cours.
        </v-banner>

        <v-card-text class="grey lighten-4">
            <v-sheet class="mx-auto">
                <v-slide-group v-model="model" class="pa-4" show-arrows>
                    <v-slide-item
                        v-for="n in 10"
                        :key="n"
                        v-slot:default="{ active, toggle }"
                    >
                        <v-card
                            :color="
                                active ? 'pink lighten-2' : 'grey lighten-1'
                            "
                            class="ma-4"
                            height="200"
                            width="250"
                            @click="toggle"
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                            </v-row>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            model: null,
            sticky: false
        };
    }
};
</script>
