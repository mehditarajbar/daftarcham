<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Models\Note;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNoteRequest $request)
    {

        $note = Note::create([
            'title' => $request->title,
            'category_id' => (integer)$request->category_id,
            'description' => $request->description,
            'story_type' => $request->story_type,
            'continuation_story' => $request->continuation_story,
            'visibility' => $request->visibility,
            'image'=>$request->image??'Null',
            'user_id'=>Auth::user()->id,
        ]);
        return response([
            'success'=>true,
            'id'=>$note->id,
            'message'=>'Note Created Successfully'
        ],Response::HTTP_ACCEPTED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        //
    }
}
