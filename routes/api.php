<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyCodeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function (){
    Route::controller(UserController::class)
        ->group(function (){
            Route::get('/user','get');
            Route::get('/permissions','permissions');
            Route::post('/logout','logout');
        });
    Route::apiResource('/notes', NoteController::class);
    Route::apiResource('/categories', CategoriesController::class);
});


Route::post('/auth',[AuthController::class,'authenticate'])->name('login');
Route::post('/verify-code',[VerifyCodeController::class,'verify']);
