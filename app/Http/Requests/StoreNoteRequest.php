<?php

namespace App\Http\Requests;

use App\Enums\NoteEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreNoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title'=>['required','string'],
            'description'=>['required','string'],
            'category_id'=>['required','integer'],
            'story_type'=>['nullable','required_if:category,=,Story',Rule::in(NoteEnum::type())],
            'continuation_story'=>['required_if:story_type,=,continuation'],
            'visibility'=>['required','string',Rule::in(NoteEnum::visibility())]
        ];
    }
}
