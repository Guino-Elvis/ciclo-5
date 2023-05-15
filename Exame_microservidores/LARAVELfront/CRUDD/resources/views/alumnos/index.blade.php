<x-indexAD>
    @if( Session::has('Mensaje'))
    {{-- {{Session::get('Mensaje')}}
    @endif --}}
    <div class="bg-indigo-900 text-center py-4 lg:px-4">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">

          <span class="font-semibold mr-2 text-left flex-auto"> {{Session::get('Mensaje')}}</span>

        </div>
      </div>
      @endif


<div class="py-5">
    <div class=" mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
            <h1 class="text-center text-sm text-slate-400 ">alumno Seccion A Pagina Inicio</h1>
        <div class="flex items-center justify-between">
            <!--Input de busqueda   -->
           <form  action="{{route('alumnos.index')}}" method="get" class="flex items-center p-2 rounded-md flex-1">
                <div class="flex  p-2 rounded-md flex-1">
                    <div class="col-sm-8  ">
                         <input name="busqueda" class="w-full  rounded-md relative text-gray-400 focus-within:text-gray-600 block"  type="text">
                    </div>
                    <div class="col-auto ml-2">
                        <input  type="submit" class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" value="Buscar">
                    </div>
                </div>
            </form>
            <!--Boton nuevo   -->
        <a style="text-decoration: none" href="{{url('alumnos/create')}}" class="lg:ml-40 ml-10 space-x-8">
                    <button wire:click="" class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" >
                        <i class="fa-solid fa-plus"></i> Nuevo
                    </button>
            <a>
        </div>
        <!--Tabla lista de items   -->
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="w-full divide-y divide-gray-200 table-auto">
              <thead class="bg-indigo-500 text-white ">
                <tr class="text-left text-xs font-bold  uppercase ">
                  <td scope="col" class="px-6 py-3">ID</td>
                  <td scope="col" class="px-6 py-3">Codigo</td>
                  <td scope="col" class="px-6 py-3">Nombre y Apellido</td>
                  <td scope="col" class="px-6 py-3">Contacto</td>
                  <td scope="col" class="px-6 py-3">Documento</td>
                  <td scope="col" class="px-6 py-3 bg-slate-500">Estado Del Alumno</td>
                  <td scope="col" class="px-6 py-3">Creado</td>
                  <td scope="col" class="px-6 py-3">Actualizado</td>
                  <td scope="col" class="px-6 py-3">Opciones</td>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                @foreach ($data as $alumno)


                <tr class="text-sm font-medium text-gray-900 px-6 py-3 hover:bg-blue-50 ">
                  <td class="px-6 py-3 ">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-500 text-white">
                        {{$alumno->id}}
                    </span>
                  </td>
                  <td class="px-6 py-4">{{$alumno->codigo}}</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div class="">
                        <div class="text-sm font-medium text-gray-900">
                          {{$alumno->nombre.", ".$alumno->apellido}}
                        </div>
                      </div>
                    </div>
                  </td>
                  {{-- <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">{{$alumno->edad}}</div>
                  </td> --}}
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">{{$alumno->direccion}}</div>
                    <div class="text-sm text-gray-500">{{$alumno->telefono}}</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">{{$alumno->tdocumento}}</div>
                    <div class="text-sm text-gray-500">{{$alumno->documento}}</div>
                     {{-- <div class="text-sm text-gray-500">{{$alumno->tdatos}}</div> --}}
                  </td>
                  <td class="px-6 py-4"><span class="{{($alumno->status==0)?'bg-yellow-500 rounded p-1':'bg-green-500 rounded p-1'}}">{{($alumno->status=='0'?'Inactivo':'Activo')}}</span></td>
                  {{-- <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{{$alumno->tdatos}}</div>
                  </td>  --}}
                 <td class="px-6 py-4">{{$alumno->created_at}}</td>
                  <td class="px-6 py-4">{{$alumno->updated_at}}</td>
                  <td class="px-6 py-4" style="display: flex">
                    {{-- @livewire('alumno-edit',['alumno'=>$item],key($item->id)) --}}
                    {{-- <a href="{{url('/showproduc/'.$alumno->id.'/edit')}}" style="text-decoration: none">
                    <button class="inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-600 disabled:opacity-25 transition" >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    </a> --}}

                    <a href="{{url('/alumnos/'.$alumno->id.'/edit')}}" style="text-decoration: none">
                      <button class="inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-600 disabled:opacity-25 transition">
                          <i class="fas fa-edit"></i>
                      </button>
                      </a>

                   <form method="post" action="{{url('/alumnos/'.$alumno->id)}}" >
                        @csrf
                    {{method_field('DELETE')}}
                    <button class="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition" type="submit" onclick="return confirm('Esta Seguro De ¡Eliminar! este alumno?')">
                        <i class="fas fa-trash"></i>
                    </button>
                     </form>

                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>


        </div>
        </div>
      </div>
</div>
</x-indexAD>
