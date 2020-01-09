<?php

namespace App\Http\Controllers\Auction;

use App\Auction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;

class AuctionController extends Controller
{

    public function index()
    {
        return Auction::all();
    }

    public function store(Request $request)
    {
        $product = Product::where('name', $request->all()['product']['name'])->first();

        request()->merge(['is_live' => 0]);
        request()->merge(['product_id' => $product->id]);

        return Auction::create($request->all());
    }


    public function show(Auction $auction)
    {
        return $auction;
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $product_name = $data['auction']['product']['name'];

        $product = Product::where('name', $product_name)->first();
        $data['product_id'] = $product->id;
        $auction = Auction::find($id);
        $auction->product_id = $data['product_id'];
        $auction->start_date = $data['auction']['start_date'];
        $auction->end_date = $data['auction']['end_date'];
        $auction->start_time = $data['auction']['start_time'];
        $auction->end_time = $data['auction']['end_time'];
        $auction->is_live = 0;

        $auction->price = $data['auction']['price'];
        $auction->entry_price = $data['auction']['entry_price'];
        $auction->room_size = $data['auction']['room_size'];

        if ($auction->save()) {

            return response()->json(200);
        }
    }

    public function destroy($id)
    {
        return Auction::find($id)->delete();
    }

    public function getUpcoming()
    {
        return Auction::where('is_live', 0)->get();
    }

    public function getLive()
    {
        return Auction::where('is_live', 1)->get();
    }
}
