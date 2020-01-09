<?php

namespace App\Http\Controllers\Auction;

use App\Auction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Golive extends Controller
{
    public function handle(Request $request)
    {
        $auction = Auction::find($request->id);
        if ($auction) {
            $auction->is_live = !$auction->is_live;
            if ($auction->save()) {
                return response()->json(200);
            }
            return response()->json(500);
        }
    }
}
