<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Auction extends Model
{

    use SoftDeletes;

    protected $with = ['product'];

    protected $fillable = [
        'start_date', 'end_date', 'product_id',
        'entry_price', 'is_live', 'room_size'
    ];

    protected $dates = ['start_date', 'end_date'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
