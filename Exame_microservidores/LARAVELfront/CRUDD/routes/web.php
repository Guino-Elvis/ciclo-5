<?php

use App\Http\Controllers\AlumnosController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
   return view('welcome');
});



// Route::get('/', function () {
//     $response = Http::get('http://127.0.0.1:9090/alumnos');
//     $data =$response ->json();
//    foreach($data as $alumno){
//     echo $alumno['nombre'];
//     echo $alumno['apellido'];
//     echo "<br>";
//    }
// });


// //   //grupos

route::Resource('alumnos',AlumnosController::class);
// route::get('/alumnos/{idAlumno}',[AlumnosController::class,'view'])->name('alumno.view');
