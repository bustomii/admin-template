<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Bustomi',
                'email' => 'bustomi@astronacci.net',
                'password' => '12345678',
                'role' => [
                    'DEVELOPER',
                ],
            ],
            [
                'name' => 'Admin 14DP',
                'email' => 'admin@astronacci.net',
                'password' => 'astronacci@2024',
                'role' => [
                    'ADMIN',
                ],
            ]
        ];

        foreach($users as $user) {
            $created_user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => Hash::make($user['password']),
                'created_at' => now(),
                'updated_at' => now(),
                'email_verified_at' => now(),
            ]);

            foreach($user['role'] as $role) {
                $created_user->assignRole($role);
            }

        }
    }
}
