<template>
    <v-card max-width="344" class="mx-auto mr-1 ml-1" outlined>
        <!-- Title and start_date -->
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

        <!-- Auction image -->
        <v-img :src="auction.product.img_path" height="194"></v-img>

        <!-- Auction description -->
        <v-card-text v-text="auction.product.desc.substring(0, 100)">
        </v-card-text>

        <!-- Details and participer btns -->
        <v-card-actions>
            <!-- details btn -->
            <router-link
                :to="{
                    name: 'auction-details',
                    params: { id: auction.id }
                }"
            >
                <v-btn text color="primary accent-4" small>
                    Détails
                </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <!-- Participer btn -->
            <v-btn color="success accent-4" depressed small>
                Participer
                <!-- <v-icon right dark>mdi-thumb-up-outline</v-icon> -->
            </v-btn>
        </v-card-actions>
    </v-card>
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
