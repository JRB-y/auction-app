<?php

namespace App\Http\Controllers\Participation;

use App\Participation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ParticipationController extends Controller
{
    /**
     * The user has the ability to participate to an Auction.
     * Here we need to check the payement.
     *
     * @param Request $request contain the auction id
     * @return json
     */
    public function participer(Request $request)
    {
        // in the request we receive the { auction_id, user_id }
        // we get the user from the request() function
        $user_id = $request->user_id;
        // we get the auction id from the request
        $auction_id = $request->auction_id;


        // we try to create the participation
        // TODO: WE NEED to check the payement
        // Simulation of a verified payement
        $payed = true;

        if ($payed === true) {
            // we create the data bage
            $data = ['user_id' => $user_id, 'auction_id' => $auction_id, 'is_payed' => true];
            $participation = Participation::create($data);
        }

        if ($participation) {
            return response()->json(200);
        }
    }
}
