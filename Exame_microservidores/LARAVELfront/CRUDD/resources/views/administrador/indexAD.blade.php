<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'Infotel') }}</title>
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <!-- Styles -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"  />
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <title>Infotel</title>
    </head>
    <style>

        /* Compiled dark classes from Tailwind */
        .dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
          border-color: rgba(55, 65, 81);
        }
        .dark .dark\:bg-gray-50 {
          background-color: rgba(249, 250, 251);
        }
        .dark .dark\:bg-gray-100 {
          background-color: rgba(243, 244, 246);
        }
        .dark .dark\:bg-gray-600 {
          background-color: rgba(75, 85, 99);
        }
        .dark .dark\:bg-gray-700 {
          background-color: rgba(55, 65, 81);
        }
        .dark .dark\:bg-gray-800 {
          background-color: rgba(31, 41, 55);
        }
        .dark .dark\:bg-gray-900 {
          background-color: rgba(17, 24, 39);
        }
        .dark .dark\:bg-red-700 {
          background-color: rgba(185, 28, 28);
        }
        .dark .dark\:bg-green-700 {
          background-color: rgba(4, 120, 87);
        }
        .dark .dark\:hover\:bg-gray-200:hover {
          background-color: rgba(229, 231, 235);
        }
        .dark .dark\:hover\:bg-gray-600:hover {
          background-color: rgba(75, 85, 99);
        }
        .dark .dark\:hover\:bg-gray-700:hover {
          background-color: rgba(55, 65, 81);
        }
        .dark .dark\:hover\:bg-gray-900:hover {
          background-color: rgba(17, 24, 39);
        }
        .dark .dark\:border-gray-100 {
          border-color: rgba(243, 244, 246);
        }
        .dark .dark\:border-gray-400 {
          border-color: rgba(156, 163, 175);
        }
        .dark .dark\:border-gray-500 {
          border-color: rgba(107, 114, 128);
        }
        .dark .dark\:border-gray-600 {
          border-color: rgba(75, 85, 99);
        }
        .dark .dark\:border-gray-700 {
          border-color: rgba(55, 65, 81);
        }
        .dark .dark\:border-gray-900 {
          border-color: rgba(17, 24, 39);
        }
        .dark .dark\:hover\:border-gray-800:hover {
          border-color: rgba(31, 41, 55);
        }
        .dark .dark\:text-white {
          color: rgba(255, 255, 255);
        }
        .dark .dark\:text-gray-50 {
          color: rgba(249, 250, 251);
        }
        .dark .dark\:text-gray-100 {
          color: rgba(243, 244, 246);
        }
        .dark .dark\:text-gray-200 {
          color: rgba(229, 231, 235);
        }
        .dark .dark\:text-gray-400 {
          color: rgba(156, 163, 175);
        }
        .dark .dark\:text-gray-500 {
          color: rgba(107, 114, 128);
        }
        .dark .dark\:text-gray-700 {
          color: rgba(55, 65, 81);
        }
        .dark .dark\:text-gray-800 {
          color: rgba(31, 41, 55);
        }
        .dark .dark\:text-red-100 {
          color: rgba(254, 226, 226);
        }
        .dark .dark\:text-green-100 {
          color: rgba(209, 250, 229);
        }
        .dark .dark\:text-blue-400 {
          color: rgba(96, 165, 250);
        }
        .dark .group:hover .dark\:group-hover\:text-gray-500 {
          color: rgba(107, 114, 128);
        }
        .dark .group:focus .dark\:group-focus\:text-gray-700 {
          color: rgba(55, 65, 81);
        }
        .dark .dark\:hover\:text-gray-100:hover {
          color: rgba(243, 244, 246);
        }
        .dark .dark\:hover\:text-blue-500:hover {
          color: rgba(59, 130, 246);
        }

        /* Custom style */
        .header-right {
            width: calc(100% - 3.5rem);
        }
        .sidebar:hover {
            width: 16rem;
        }
        @media only screen and (min-width: 768px) {
            .header-right {
                width: calc(100% - 16rem);
            }
        }
      </style>

{{-- <!DOCTYPE html>
<script src="https://cdn.tailwindcss.com"></script> --}}
<div x-data="setup()" :class="{ 'dark': isDark }">
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <!-- Sidebar -->
       <div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-blue-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
                <li class="px-5 hidden md:block">
                  <div class="flex flex-row items-center h-8">
                    <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Inicio</div>
                  </div>
                </li>
                <li>
                  <a href="/home" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Pagina Princial</span>
                  </a>
                </li>

                <li>
                    <a href="" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                        <span class="inline-flex justify-center items-center ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </span>
                      <span class="ml-2 text-sm tracking-wide truncate">Carrucel IMG</span>
                    </a>
                  </li>
            </ul>
            <ul class="flex flex-col py-4 space-y-1">
              <li class="px-5 hidden md:block">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                </div>
              </li>
              <li>
                <a href="/" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                </a>
              </li>
              <li>
                <a href=" " class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Inscripccion</span>
                  <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
                </a>
              </li>
              <li>
                <a href="{{route('alumnos.index')}}" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>

                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Alumnos</span>
                </a>
              </li>
              <li>
                <a href="{{url('comprobantes')}}" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>

                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Inscripcciones Realizadas</span>
                  {{-- <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span> --}}
                </a>
              </li>
              <li>
                <div class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                      @include('administrador.btnProduc')
                  </span>
                </div>
              </li>
              <li class="px-5 hidden md:block">
                <div class="flex flex-row items-center mt-5 h-8">
                  <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Tablas CRUD</div>
                </div>
              </li>
                <li>
                    <a href="" class=" mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                        <span class="inline-flex justify-center items-center ml-4">
                          <i class="fa-solid fa-chalkboard-user"></i>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Docentes</span>
                      </a>
                    <a href="" class=" mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                      <span class="inline-flex justify-center items-center ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                          </svg>
                      </span>
                      <span class="ml-2 text-sm tracking-wide truncate">Usuarios</span>
                    </a>
                </ul>
                <ul class="flex flex-col py-4 space-y-1">
                    <li class="px-5 hidden md:block">
                      <div class="flex flex-row items-center h-8">
                        <div class=" text-sm font-light tracking-wide text-red-600  p-2  uppercase" style="border: solid yellow 1px; border-left: none; border-right: none;">Alistar la matricula </div>
                      </div>
                    </li>
                        <a href="" class=" mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-red-600 font-bold hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Grupos</span>
                        </a>

                        <a href="" class=" mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-red-600 font-bold hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Horarios</span>
                        </a>
                        <a href=" " class=" mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-red-600 font-bold hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                            <span class="inline-flex justify-center items-center ml-4">
                            <i class="fas fa-swimmer text-yellow-400"></i>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Piscinas</span>
                        </a>
                        <a href="" class="mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-red-600 font-bold hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Tipo De Becas</span>
                        </a>
                        <a href="" class="mt-4 flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-red-600 font-bold hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6 pl-2">
                        <span class="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">Costo De Inscripccion</span>
                        </a>
                        <li>
                        <div class="relative flex flex-row items-center h-11 mt-4 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                @include('administrador.btnOpcion')
                            </span>

                        </div>
                        </li>
                    </li>
              <li class="px-5 hidden md:block">
                <div class="flex flex-row items-center mt-20 h-8">
                  <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                </div>
              </li>
              <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
                </a>
              </li>
              <li>
                <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
                </a>
              </li>
            </ul>
            <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
          </div>
        </div>
        <!-- ./Sidebar -->

         <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
            {{ $slot }}
        </div>
      </div>
    </div>
    <script src="https://cdn.tailwindcss.com"></script>
     <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
     <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
     <script>
       const setup = () => {
         const getTheme = () => {
           if (window.localStorage.getItem('dark')) {
             return JSON.parse(window.localStorage.getItem('dark'))
           }
           return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
         }
         const setTheme = (value) => {
           window.localStorage.setItem('dark', value)
         }
         return {
           loading: true,
           isDark: getTheme(),
           toggleTheme() {
             this.isDark = !this.isDark
             setTheme(this.isDark)
           },
         }
       }
     </script>
   </body>
   </html>



