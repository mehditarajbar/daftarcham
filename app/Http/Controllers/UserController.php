<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function get(Request $request)
    {
        return  (new UserResource($request->user()));
    }

    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return response([
            'success'=>true
        ]);
    }
}
