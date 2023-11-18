<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quetion extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'quetion',
        'trueans',
        'falseans_1',
        'falseans_2',
        'falseans_3',
    ];

    public function getIncrementing() {
        return false;
    }

    public function getKeyType() {
        return 'string';
    }
}
