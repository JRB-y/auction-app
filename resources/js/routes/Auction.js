export default [
  {
    path: '/auction/:id',
    name: 'auction-details',
    component: () => import('../components/Auction/AuctionDetails.vue'),
    meta: {
      auth: undefined
    }
  }
]