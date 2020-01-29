<template>
  <div>
    <unlive-auction
      v-if="auction && !auction.is_live"
      :auction="auction"
      @userParticipated="userParticipatedEvent"
    ></unlive-auction>

    <live-auction v-if="auction && auction.is_live" :auction="auction" @newMise="newMise"></live-auction>
  </div>
</template>
<script>
/** ===== import axios to get the current Auction from props id ===== **/
import UnliveAuction from "./UnliveAuction";
import LiveAuction from "./LiveAuction";

export default {
  components: { UnliveAuction, LiveAuction },
  data() {
    return {
      auction: null
    };
  },
  created() {
    this.getAuction();
  },
  methods: {
    getAuction: function() {
      axios.get(`/auction/${this.$route.params.id}`).then(data => {
        this.auction = data.data;
      });
    },
    newMise: function(bet) {
      this.auction.bets.push(bet);
      this.getAuction();
    },
    userParticipatedEvent() {
      // After the user click on 'confirme participation' we need to refresh the
      // auction model just by calling getAuction.
      this.getAuction();
    }
  }
};
</script>
