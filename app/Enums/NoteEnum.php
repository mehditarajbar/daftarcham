<?php

namespace App\Enums;

enum NoteEnum: string
{
    case PUBLIC = 'public';
    case PRIVATE = 'private';
    case NEW = 'new';
    case CONTINUATION = 'continuation';

    public static function visibility(): array
    {
        return [
            NoteEnum::PRIVATE->value,
            NoteEnum::PUBLIC->value,
        ];
    }

    public static function type(): array
    {
        return[
            NoteEnum::NEW->value,
            NoteEnum::CONTINUATION->value
        ];
    }


}
