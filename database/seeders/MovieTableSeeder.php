<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Matrix',
                'category' => 'Action',
                'slug' => 'the-matrix',
                'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'thumbnail' => '/assets/images/featured-1.png',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Matrix 2',
                'category' => 'Action',
                'slug' => 'the-matrix2',
                'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'thumbnail' => '/assets/images/featured-1.png',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Matrix 3',
                'category' => 'Action',
                'slug' => 'the-matrix3',
                'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                'thumbnail' => '/assets/images/featured-1.png',
                'rating' => 9.3,
                'is_featured' => 0,
            ]
        ];
        Movie::insert($movies);

    }
}
