<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    public function run()
    {
        // $this->call(ProductsTableSeeder::class);
        $this->call(AuctionsTableSeeder::class);
    }
}
