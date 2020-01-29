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
        // user
        $user_id = $request->user_id;
        // auction
        $auction_id = $request->auction_id;
        // mise price as integer
        $price = intval($request->price);

        $bet = Bet::create([
            'user_id' => $user_id,
            'auction_id' => $auction_id,
            'price' => $price
        ]);


        /**
         * Calculate final_price
         * - get all bets of the auction
         * - sum all bets
         * - update auction final_price
         */
        $auction = Auction::find($auction_id);
        $final_price = 0;

        foreach ($auction->bets as $bet) {
            $final_price += $bet->price;
        }

        $auction->final_price = $final_price;
        $auction->save();

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
