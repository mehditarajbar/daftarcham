<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function get(Request $request)
    {
        return  (new UserResource($request->user()));
    }

    public function permissions()
    {
        return response([
            'role'=>Auth::user()->roles->pluck('name')->first(),
            'permissions'=>Auth::user()->getAllPermissions()->pluck('name')
        ],Response::HTTP_ACCEPTED);
    }
    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return response([
            'success'=>true
        ]);
    }
}
