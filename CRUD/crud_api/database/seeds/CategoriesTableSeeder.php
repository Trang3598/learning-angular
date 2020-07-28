<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $limit = 2000;
        for ($i = 0; $i < $limit; $i++) {
            DB::table('categories')->insert([
                'id' => $i,
                'name' => $faker->languageCode,
                'created_at' => $faker->dateTime
            ]);
        }
    }
}
