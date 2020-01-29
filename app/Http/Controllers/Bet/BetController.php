<?php

namespace App\Http\Controllers\Bet;

use App\Bet;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BetController extends Controller
{
    /**
     * We get the 50 last bets.
     * With user, auction.
     * And inside auction we find the product.
     *
     * @return Collection
     */
    public function last()
    {
        $last_bets = Bet::orderBy('created_at', 'desc')->with('auction')->limit(50)->get();
        return $last_bets;
    }
}
