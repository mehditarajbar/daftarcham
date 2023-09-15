<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'sub_count'=>$this->user_id,
            'title'=>$this->title,
            'created_at'=>(new DateTime($this->created_at))->format('Y-m-d H:i:s')
        ];
    }
}
