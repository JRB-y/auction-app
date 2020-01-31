export default [
  {
    path: '/auction/:id',
    name: 'auction-details',
    component: () => import('../components/Auction/AuctionDetails.vue'),
    meta: {
      auth: undefined
    },
  },
  {
    path: '/auction/live',
    name: 'live-auctions',
    component: () => import('../components/Auction/LiveAuctions.vue'),
    meta: {
      auth: undefined
    },
  },
  {
    path: '/auction/upcoming',
    name: 'upcoming-auctions',
    component: () => import('../components/Auction/UpcomingAuctions.vue'),
    meta: {
      auth: undefined
    }
  }

]