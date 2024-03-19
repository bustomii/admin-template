<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_super_admin = Role::create(['name' => 'DEVELOPER']);
        $role_admin = Role::create(['name' => 'ADMIN']);

        $permission_read = Permission::create(['name' => 'read']);
        $permission_edit = Permission::create(['name' => 'edit']);
        $permission_write = Permission::create(['name' => 'write']);
        $permission_delete = Permission::create(['name' => 'delete']);

        $permissions_super_admin = [$permission_read, $permission_edit, $permission_write, $permission_delete];
        $permissions_admin = [$permission_read, $permission_edit, $permission_write];

        $role_super_admin->syncPermissions($permissions_super_admin);
        $role_admin->syncPermissions($permissions_admin);
    }
}
