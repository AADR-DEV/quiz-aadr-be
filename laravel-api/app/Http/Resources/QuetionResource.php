<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuetionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image' => $this->image,
            'quetion' => $this->quetion,
            'trueans' => $this->trueans,
            'falseans_1' => $this->falseans_1,
            'falseans_2' => $this->falseans_2,
            'falseans_3' => $this->falseans_3,
            'created_at' => date_format($this->created_at, "Y/m/d H:i:s"),
            'updated_at' => date_format($this->updated_at, "Y/m/d H:i:s"),
        ];
    }
}
