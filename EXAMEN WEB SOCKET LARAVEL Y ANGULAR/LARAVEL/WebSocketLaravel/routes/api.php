<?php

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
// Route::post('/broadcasting/auth', 'Illuminate\Broadcasting\BroadcastController@authenticate');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

route::post('auth/register', 'App\Http\Controllers\Api\AuthController@register')->name('api.auth.register');
route::post('auth/login', 'App\Http\Controllers\Api\AuthController@login')->name('api.auth.login');
// route::get('auth/me', 'App\Http\Controllers\Api\AuthController@me')
// ->name('api.auth.me')
// ->middleware('auth:api');

Route::get('auth/me', 'Api\AuthController@me')
    ->name('api.auth.me')
    ->middleware('auth:api');

    Route::post('message/send', 'Api\MessageController@send')
    ->name('api.message.send')
    ->middleware('auth:api');

Route::post('message/sendDM', 'Api\MessageController@sendDM')
    ->name('api.message.sendDM')
    ->middleware('auth:api');
