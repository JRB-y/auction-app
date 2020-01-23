<?php

namespace App\Http\Controllers\Auction;

use App\Bet;
use App\Auction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuctionMise extends Controller
{
    public function handle(Request $request)
    {
        // get the user
        $user_id = $request->user_id;
        $auction_id = $request->auction_id;
        $price = intval($request->price);

        $bet = Bet::create([
            'user_id' => $user_id,
            'auction_id' => $auction_id,
            'price' => $price
        ]);

        $bet = Bet::find($bet->id);

        if ($bet) {
            $data = [
                'message' => 'Votre mise est enregistré',
                'bet' => $bet
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Erreur'
            ];

            return response()->json(500);
        }
    }
}
