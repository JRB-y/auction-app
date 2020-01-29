<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Product API routes
 */
Route::resource('product', 'Product\ProductController');

/**
 * Auction API routes
 */
Route::prefix('auction')->group(function () {
    Route::get('upcoming', 'Auction\AuctionController@getUpcoming');
    Route::get('live', 'Auction\AuctionController@getLive');
    Route::post('mise', 'Auction\AuctionMise@handle');
    // get my current validate auctions
    Route::get('my-current', 'Auction\MyCurrentAuctions@get');
});

// auction resource routes
Route::resource('auction', 'Auction\AuctionController');
Route::post('/auction/goLive', 'Auction\GoLive@handle');

/**
 * Facebook Authentication
 */

// Route::get('/login/facebook', 'FacebookAuthController@redirectToProvider');
// Route::get('/login/facebook/callback', 'FacebookAuthController@handleProviderCallback');
Route::post('login/facebook', 'FacebookAuthController@redirectToProvider');
Route::get('login/facebook/callback', 'FacebookAuthController@handleProviderCallback');


Route::post('/participer', 'Participation\ParticipationController@participer');

/**
 * Authentication Routes
 */
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {

    Route::group(['middleware' => 'api'], function () {
        Route::post('login', 'Auth\AuthController@login');
        Route::post('logout', 'Auth\AuthController@logout');
        Route::post('refresh', 'Auth\AuthController@refresh');
        Route::post('me', 'Auth\AuthController@me');
        // register route
        Route::post('register', 'Auth\AuthController@register');
    });
});


/**
 * Bets
 */
Route::group(['middleware' => 'api', 'prefix' => 'bets'], function () {
    Route::get('last', 'Bet\BetController@last');
});
