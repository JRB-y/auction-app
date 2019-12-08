<template>
    <div>
        <v-card>
            <v-system-bar></v-system-bar>
            <v-toolbar flat>
                <v-toolbar-title class="font-weight-bold">
                    <v-icon small color="warning">
                        mdi-checkbox-blank-circle
                    </v-icon>
                    Enchères à venir <small>({{ auctions.length }})</small>
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-banner single-line>
                Vous pouvez participer aux prochaines enchères.
            </v-banner>

            <v-card-text class="grey lighten-4">
                <v-sheet class="mx-auto">
                    <v-slide-group class="pa-4" show-arrows>
                        <v-slide-item
                            v-for="auction in auctions"
                            :key="auction.id"
                        >
                            <!-- ===== Signle Auction Card ===== -->

                            <single-auction-card :auction="auction">
                            </single-auction-card>

                            <!-- ===== End Signle Auction Card ===== -->
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import SingleAuctionCard from "../SingleAuctionCard";

export default {
    props: ["auctions"],
    components: { SingleAuctionCard },
    data() {
        return {};
    }
};
</script>
