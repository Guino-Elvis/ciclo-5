import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/servicio/usuario.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  nombreBuscar: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  consultar(): void {
    this.usuarioService.enviarBusqueda(this.nombreBuscar);
  }

  limpiar(): void {
    this.nombreBuscar = '';
    this.usuarioService.enviarBusqueda(null);
  }
}
