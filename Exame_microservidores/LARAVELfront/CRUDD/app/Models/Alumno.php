<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;
    protected $fillable=['Nombre','Apellido','tdocumento','documento','Codigo','Telefono','Direccion',	'status','Obserbaciones','Grupos_id','Piscinas_id','Horarios_id'];
     //Relación inversa 1 a *






}
