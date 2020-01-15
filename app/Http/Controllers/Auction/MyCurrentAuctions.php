<?php

namespace App\Http\Controllers\Auction;

use App\Auction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MyCurrentAuctions extends Controller
{
    public function get()
    {
        $user_id = request()->user()->id;

        $auctions = Auction::whereHas('participations', function ($q) use ($user_id) {
            $q->where('user_id', $user_id);
        })->get();

        return $auctions;
    }
}
