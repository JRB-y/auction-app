<template>
    <div>
        <v-card max-width="344" class="mx-auto mr-3" outlined>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline text-center">
                        {{ auction.product.name }}
                    </v-list-item-title>
                    <v-btn small dark text color="pink">
                        {{ moment(auction.start_date).fromNow() }}
                    </v-btn>
                </v-list-item-content>
            </v-list-item>

            <v-img :src="auction.product.img_path" height="194"></v-img>

            <v-card-text v-text="auction.product.desc.substring(0, 100)">
            </v-card-text>

            <v-card-actions>
                <router-link
                    :to="{
                        name: 'auction-details',
                        params: { id: auction.id }
                    }"
                >
                    <v-btn text color="pink accent-4" small>
                        Détails
                    </v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-btn text color="pink accent-4">
                    Participer
                    <!-- <v-icon right dark>mdi-thumb-up-outline</v-icon> -->
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
var moment = require("moment");

export default {
    props: ["auction"],
    data() {
        return {
            moment: moment
        };
    }
};
</script>
