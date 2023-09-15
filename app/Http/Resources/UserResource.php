<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    public static $wrap='user';
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name'=>$this->name,
            'verified'=>true,
            'mobile'=>$this->mobile,
            'mobile_verified_at'=>$this->mobile_verified_at,
            'ability'=>[
                'role'=>$this->roles->pluck('name')->first(),
                'permissions'=>$this->getAllPermissions()->pluck('name')
            ]

        ];
    }
}
