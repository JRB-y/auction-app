# Front Directory Structure

- components
  
  - _Admin_
    - _Auctions_
      - indedx.vue
  
    - _Products_
      - index.vue
  
    - AdminLayout.vue
    - index.vue

  - _Auction_
  - _Auth_
  - _Product_
    - imageInput.vue
    - ProductForm.vue
    - ProductsList.vue

  - _Template_
    - DropdownLogin.vue
    - Footer.vue
    - MainSlider.vue
    - TopNavbar.vue

  - App.vue
  - Welcome.vue

- _plugins_
  - vuetify.js

- app.js
- auth.js
- bootstrap.js
- router.js

==================

1. **components**
Contains all components of the application.

  1. **Admin**: contains all admin components.
     1. Auctions
        1. index.vue: *includes: Auctions\AuctionList & Auctions\AuctionForm*
     2. Products
        1. index.vue: the indedx vue of products
          *includes: Products\ProductList & Products\ProductForm*

     3. AdminLayout.vue (layout for Admin Backend)
     4. Index.vue (index of the backend: *extends AdminLayouts.vue*)

  2. **Auction**: contains all auction components
     1. AuctionList: Datatable of Auctions
     2. AuctionForm: Form for Create or Update an Auction
     3. SingleAuctionCard: are the small card on the welcome global page.
     4. AuctionDetails: Display all details of an Auction 

  3. **Auth** contains all auth component: 
      login, TODO: we miss register component.

  4. **Products**: contains all products components:
     1. ProductList: Datatable of Products
     2. ProductForm: Form of Create and Update a Product


1. plugins
Contains vue plugins: Vuetify


