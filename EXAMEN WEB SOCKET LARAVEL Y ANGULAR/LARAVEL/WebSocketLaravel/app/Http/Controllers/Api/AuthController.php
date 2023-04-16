<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;

class AuthController extends Controller
{



    public function register(Request $request)
    {
        $user = new User([
            'email' => $request->email,
            'name' => $request->name,
            'password' => bcrypt($request->password),
        ]);

        $user->save();

        // Generamos un token de acceso para el usuario
        $token = $this->generateAccessToken($user);

        return response()->json([
            'ok' => true,
            'user' => $user,
            'token' => $token,
        ]);
    }

    private function generateAccessToken(User $user)
    {
        $timestamp = time(); // Obtiene la marca de tiempo actual
        $randomBytes = random_bytes(32); // Genera 32 bytes aleatorios
        $token = $timestamp . bin2hex($randomBytes); // Agrega la marca de tiempo a los bytes aleatorios y codifica en hexadecimal

        // Guarda el token de acceso en la base de datos o en cualquier otro lugar que desees

        return $token;
    }

    public function login(Request $request){

        $data = $request->only('email','password');

        if (! Auth::attempt($data)){
            return response()->json([
                'ok'=>false,
                'message'=>'error de credencialesss',
            ]);
        }

        // Generamos un nuevo token de acceso para el usuario
        $token = $this->generateAccessToken(Auth::user());

        return response()->json([
            'ok'=>true,
            'user'=>Auth::user(),
            'token'=>$token,
        ]);
    }




    public function me (){
        return response()->json([

            'ok'=>true,
            'user'=>Auth::user(),
            // 'token'=>$token,
        ]);
    }







 // public function register(Request $request){
    //     $user = new User([
    //         'email' => $request->email,
    //         'name' => $request->name,
    //         'password' => bcrypt($request->password),
    //     ]);
    //     $user->save();

    //     $token = $user->createToken('authToken')->accessToken;

    //     return response()->json([

    //         'ok'=>true,
    //         'user'=>$user,
    //         'token'=>$token,
    //     ]);

    // }





    // public function register(Request $request)
    // {
    //     $user = new User([
    //         'email' => $request->email,
    //         'name' => $request->name,
    //         'password' => bcrypt($request->password),
    //     ]);

    //     $user->save();

    //     // Generamos un token JWT para el usuario
    //     $token = $this->generateToken($user);

    //     return response()->json([
    //         'ok' => true,
    //         'user' => $user,
    //         'token' => $token,
    //     ]);
    // }

    // private function generateToken(User $user)
    // {
    //     // Codificamos los datos del usuario en formato JSON
    //     $payload = json_encode([
    //         'sub' => $user->id,
    //         'name' => $user->name,
    //         'email' => $user->email,
    //     ]);

    //     // Generamos la firma del token
    //     $signature = hash_hmac('sha256', $payload, env('APP_KEY'));

    //     // Combinamos los datos del usuario y la firma en el token JWT
    //     $token = base64_encode($payload) . '.' . base64_encode($signature);

    //     return $token;
    // }



    // public function login(Request $request){

    //     $data = $request->only('email','password');

    //     if (! Auth::attempt($data)){
    //         return response()->json([
    //             'ok'=>false,
    //             'message'=>'error de credenciales',
    //         ]);
    //     }

    //     $timestamp = time(); // Obtiene la marca de tiempo actual
    //     $randomBytes = random_bytes(32); // Genera 32 bytes aleatorios
    //     $token = $timestamp . bin2hex($randomBytes); // Agrega la marca de tiempo a los bytes aleatorios y codifica en hexadecimal

    //     // Guarda el token de acceso en la base de datos o en cualquier otro lugar que desees

    //     return response()->json([
    //         'ok'=>true,
    //         'user'=>Auth::user(),
    //         'token'=>$token,
    //     ]);
    // }
















    // public function login(Request $request){

    //     $data = $request->only('email','password');


    //     if (! Auth::attempt($data)){
    //      return response()->json([
    //         'ok'=>false,
    //         'message'=>'error de credenciales',

    //      ]);
    //     }


    //     // $token = Auth::user()->createToken('authToken')->accessToken;

    //     return response()->json([

    //         'ok'=>true,
    //         'user'=>Auth::user(),
    //   //    'token'=>$token,
    //     ]);

    // }


}
