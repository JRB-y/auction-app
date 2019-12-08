<?php

namespace App\Http\Controllers\Auction;

use App\Auction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuctionController extends Controller
{

    public function index()
    {
        return Auction::all();
    }

    public function store(Request $request)
    {
        return Auction::create($request->all());
    }


    public function show(Auction $auction)
    {
        return $auction;
    }

    public function update(Request $request, $id)
    {
        return Auction::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        return Auction::find($id)->delete();
    }
}
