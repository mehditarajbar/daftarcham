<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        $this->createPermission(group: 'category', permissions: ['create', 'delete', 'show', 'edit']);
    }

    private function createPermission($group, array $permissions): void
    {
        $role = Role::create(['name' => 'admin']);
        foreach ($permissions as $permission) {
            Permission::create(['name' => $group . '-' . $permission]);
            $role->givePermissionTo($group . '-' . $permission);
        }


    }
}
