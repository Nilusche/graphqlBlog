<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Topic;
class Post extends Model
{
    use HasFactory;


    public function topic(){
        return $this->belongsTo(Topic::class);
    }

    public function author(){
        return $this->belongsTo(User::class, 'author_id');
    }
}
