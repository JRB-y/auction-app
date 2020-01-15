<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Auction extends Model
{

    use SoftDeletes;

    protected $with = ['product', 'bets', 'participations'];

    protected $fillable = [
        'start_date', 'end_date', 'product_id', 'start_time', 'end_time',
        'entry_price', 'is_live', 'room_size', 'price'
    ];


    protected $dates = ['start_date', 'end_date'];

    // public function getStartDateAttribute($value)
    // {
    //     return Carbon::parse($value);
    // }
    // public function getEndDateAttribute($value)
    // {
    //     return Carbon::parse($value);
    // }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function bets()
    {
        return $this->hasMany(Bet::class);
    }

    public function participations()
    {
        return $this->hasMany(Participation::class);
    }
}
