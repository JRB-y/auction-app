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

    Route::post('login', 'Auth\AuthController@login');

    Route::post('logout', 'Auth\AuthController@logout');

    Route::post('refresh', 'Auth\AuthController@refresh');

    Route::post('me', 'Auth\AuthController@me');
});


/**
 * Authentication API endpoints 
 */
// Route::prefix('auth')->group(function () {
//     // register
//     Route::post('register', 'AuthController@register');
//     // login
//     Route::post('login', 'AuthController@login');
//     // refresh token
//     Route::get('refresh', 'AuthController@refresh');

//     Route::group(['middleware' => 'auth:api'], function () {
//         // get the user
//         Route::get('user', 'AuthController@user');
//         // logout
//         Route::post('logout', 'AuthController@logout');
//     });
// });
