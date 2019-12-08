<?php

// product resource routes
Route::resource('product', 'Product\ProductController');
// auction resource routes
Route::resource('auction', 'Auction\AuctionController');

Route::get('/', function () {
    return view('welcome');
});
