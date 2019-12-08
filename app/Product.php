<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{

    use SoftDeletes;

    protected $fillable = ['name', 'desc', 'img_path'];

    public function auctions()
    {
        return $this->hasMany(Auction::class);
    }
}
