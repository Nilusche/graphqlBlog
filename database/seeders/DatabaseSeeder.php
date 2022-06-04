<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Topic;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(20)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Topic::create(['name'=>'Featured Sites', 'slug'=>'featured']);
        Topic::create(['name'=>'Useful Links', 'slug'=>'links']);
        Topic::create(['name'=>'Guides & Tutorials', 'slug'=>'tutorials']);

        \App\Models\Post::factory(20)->create();
    }
}
