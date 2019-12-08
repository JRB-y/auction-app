<template>
    <div>
        <v-card class="mx-auto">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline">
                        {{ auction.product.name }}
                        <v-btn small dark text color="pink">
                            {{ moment(auction.start_date).fromNow() }}
                        </v-btn>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-img
                :src="auction.product.img_path"
                aspect-ratio="1"
                class="grey lighten-2 mx-auto"
                max-width="500"
                max-height="300"
            ></v-img>

            <v-card-text> {{ auction.product.desc }} </v-card-text>

            <v-bottom-navigation horizontal height="40">
                <v-btn text color="red" to="/">
                    <span>Retour</span>
                    <v-icon>keyboard_backspace</v-icon>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn large dark color="success" depressed>
                    <span class="white--text">Participer</span>
                    <!-- <v-icon class="white--text">mdi-heart</v-icon> -->
                </v-btn>

                <v-btn color="primary">
                    <span class="white--text">0 / {{ auction.room_size }}</span>
                    <v-icon class="white--text">mdi-account</v-icon>
                </v-btn>
            </v-bottom-navigation>
            <!-- <v-card-actions>
                <v-btn color="primary accent-4" depressed small>
                    Participer
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="success" depressed small>
                    0 / {{ auction.room_size }}
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </v-card-actions> -->
        </v-card>
    </div>
</template>
<script>
/** ===== import axios to get the current Auction from props id ===== **/
import axios from "axios";
var moment = require("moment");

export default {
    data() {
        return {
            moment: moment,
            auction: []
        };
    },
    mounted() {
        // console.log(this.$route.params.id);
        this.getAuction();
    },
    methods: {
        getAuction: function() {
            axios.get(`/api/auction/${this.$route.params.id}`).then(data => {
                this.auction = data.data;
            });
        }
    }
};
</script>
