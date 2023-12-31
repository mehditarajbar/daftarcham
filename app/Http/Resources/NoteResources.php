<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use DateTime;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteResources extends JsonResource
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
            'title'=>$this->title,
            'image'=>$this->image,
            'visibility'=>$this->visibility,
            'story_type'=>$this->story_type,
            'description'=>$this->description,

            'category'=>$this->whenLoaded('category',[
                'title'=>$this->category->title
            ]),
            'author'=>$this->whenLoaded('user',[
                'name'=>$this->user->name
            ]),
            'updated_at'=>(new DateTime($this->updated_at))->format('Y-m-d H:i:s')
        ];
    }
}
