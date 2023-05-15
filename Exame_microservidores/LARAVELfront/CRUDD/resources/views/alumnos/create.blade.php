<x-indexAD>
    <div class="container mt-4">

        <form class="w-full  text-center bg-white rounded-xl pt-5 " action="{{url('/alumnos')}}" method="post" enctype="multipart/form-data">
            <div class="container flex justify-center items-center">
            @if (count($errors)>0)


                <div class="text-red-700  max-w-xl justify-center items-center  bg-blue-50 rounded-md text-left" role="alert">
                    <div class="bg-white text-stone-700 m-1 p-2 rounded-md">Ingrese los datos que faltan</div>
                    <ul class="pr-8">
                        @foreach ($errors->all() as $error)

                          <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
            <h1 class=" text-xl text-slate-400">Crear nuevo alumno Seccion A Pagina Inicio</h1>
            @csrf

{{--
            @include('alumnos.form',['Modo'=>'crear']) --}}




    <div class="container text-left">
        <div class="flex flex-wrap justify-center items-center -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nombre">{{'nombre'}}</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" name="nombre" id="nombre"
        value="{{ isset ($alumno->nombre )?$alumno->nombre:''}}">
        <br>

        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="apellido">{{'apellidos'}}</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" name="apellido" id="apellido"
        value="{{ isset ($alumno->apellido)?$alumno->apellido:''}}">
        <br>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="telefono">{{'telefono'}}</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" name="telefono" id="telefono"
        value="{{ isset ($alumno->telefono)?$alumno->telefono:''}}">
        <br>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="correo">{{'direccion'}}</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" name="direccion" id="direccion"
        value="{{ isset ($alumno->direccion)?$alumno->direccion:''}}">
        <br>

        <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-6/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tdocumento">{{'tipo de documento'}}</label>
                <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="tdocumento" name="tdocumento">
                    <option value="Null">Seleccione (null)</option>
                  <option value="DNI" {{ (isset($alumno->tdocumento) && $alumno->tdocumento == 'DNI') ? 'selected' : '' }}>DNI</option>
                  <option value="Carnet Estrangeria" {{ (isset($alumno->tdocumento) && $alumno->tdocumento == 'Carnet Estrangeria') ? 'selected' : '' }}>Carnet Estrangeria</option>
                  <option value="Pasaporte" {{ (isset($alumno->tdocumento) && $alumno->tdocumento == 'Pasaporte') ? 'selected' : '' }}>Pasaporte</option>
                </select>
            </div>
            <div class="w-full md:w-6/12 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="documento">{{'Documento'}}</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" name="documento" id="documento"
            value="{{ isset ($alumno->documento)?$alumno->documento:''}}">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-6/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="documento">{{'codigo'}}</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"type="text" name="codigo" id="codigo"
                value="{{ isset ($alumno->codigo)?$alumno->codigo:''}}">
                </div>
              <div class="w-full md:w-6/12 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"for="status">{{'Estado'}}</label>
                  <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4  mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="status" id="status">
                  <option value="">{{'Seleccione un estado'}}</option>
                  <option value="1" selected>{{'Activo'}}</option>
                  <option value="0">{{'Inactivo'}}</option>
                  </select>
              </div>
            </div>
        <br>
            <div class="flex justify-end items-end pb-5">
                <button  type="submit" class="ppt inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">CREAR</button>
            {{-- <input class="ppt inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition" type="submit" value="{{$Modo=='crear'?'Agregar':'Editar'}}"> --}}
            <a style="text-decoration: none" class=" inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition" href="{{url('alumnos')}}">Cancelar</a>
            </div>

        </form>
        </div>
</x-indexAD>
