<?php

use Illuminate\Http\Request;

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


// product resource routes
Route::resource('product', 'Product\ProductController');
// auction resource routes
Route::resource('auction', 'Auction\AuctionController');


/** ==== Authentication endpoints ===== **/
Route::prefix('auth')->group(function () {
    // register
    Route::post('register', 'AuthController@register');
    // login
    Route::post('login', 'AuthController@login');
    // refresh token
    Route::get('refresh', 'AuthController@refresh');

    Route::group(['middleware' => 'auth:api'], function () {
        // get the user
        Route::get('user', 'AuthController@user');
        // logout
        Route::post('logout', 'AuthController@logout');
    });
});
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
