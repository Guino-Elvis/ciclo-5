<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/
// Route::post('/broadcasting/auth', 'Illuminate\Broadcasting\BroadcastController@authenticate');
Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('chat-room', function ($user) {
    return  $user;

});


Broadcast::channel('chat-room.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
