<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $limit = 10;
        $categories = \App\Category::all()->pluck('id')->toArray();
        for ($i = 0; $i < $limit; $i++) {
            DB::table('posts')->insert([
                'name' => $faker->name,
                'description' => $faker->sentence,
                'content' => $faker->paragraph,
                'image' => $faker->image,
                'category_id' => $faker->randomElement($categories),
                'created_at' => $faker->dateTime
            ]);
        }
    }
}
