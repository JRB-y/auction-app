<?php

use App\Auction;
use Illuminate\Database\Seeder;

class AuctionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Auction::create([
            'product_id' => 1,
            'start_date' => Carbon\Carbon::tomorrow(),
            'end_date' => Carbon\Carbon::tomorrow(),
            'entry_price' => 5,
            'is_live' => false,
            'room_size' => 120
        ]);

        Auction::create([
            'product_id' => 2,
            'start_date' => Carbon\Carbon::tomorrow(),
            'end_date' => Carbon\Carbon::tomorrow(),
            'entry_price' => 3,
            'is_live' => false,
            'room_size' => 30
        ]);

        Auction::create([
            'product_id' => 3,
            'start_date' => Carbon\Carbon::tomorrow(),
            'end_date' => Carbon\Carbon::tomorrow(),
            'entry_price' => 1,
            'is_live' => false,
            'room_size' => 100
        ]);
    }
}
