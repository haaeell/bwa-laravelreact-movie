<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 'admin' role
        Role::create(['name' => 'admin']);

        // Create 'user' role
        Role::create(['name' => 'user']);
    }
}
