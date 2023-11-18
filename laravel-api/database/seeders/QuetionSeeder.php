<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Quetion;
use Illuminate\Support\Str;

class QuetionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quetions')->truncate();

        Quetion::create([
            'id' => Str::uuid(),
            'image' => 'image.png',
            'quetion' => 'What is the capital of India?',
            'trueans' => 'Delhi',
            'falseans_1' => 'Mumbai',
            'falseans_2' => 'Kolkata',
            'falseans_3' => 'Chennai',
        ]);

        Quetion::create([
            'id' => Str::uuid(),
            'image' => 'image.png',
            'quetion' => 'What is the capital of Amerika?',
            'trueans' => 'Delhi',
            'falseans_1' => 'LA',
            'falseans_2' => 'Washington',
            'falseans_3' => 'Chennai',
        ]);
    }
}
