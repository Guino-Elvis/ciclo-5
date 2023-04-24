import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rol } from 'app/models/rol';
import { Usuario } from 'app/models/usuario';
import { MensajeService } from 'app/servicio/mensaje.service';
import { RolserviceService } from 'app/servicio/rolservice.service';
import { UsuarioService } from 'app/servicio/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Input() usuarioSelected?: Usuario;

  roles: Rol[];
  constructor(
    private usuarioService: UsuarioService,
    private rolService: RolserviceService,
    private mensajeService: MensajeService
  ) {}

  ngOnInit(): void {
    this.rolService.consultarRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  guardar(usuario: Usuario): void {
    this.usuarioService.agregar(usuario).subscribe(
      (res) => {
        this.mensajeService.agregarMensaje({
          texto: `Usuario ${usuario.nombre} guardado.`,
          tipo: 1,
        });
        this.cerrarFormulario();
      },
      (error) => {
        this.mensajeService.agregarMensaje({
          texto: 'No se pudo guardar. intente de nuevo.',
          tipo: 2,
        });
      }
    );
  }

  editar(usuario: Usuario): void {
    this.usuarioService.actualizar(usuario).subscribe(
      (res) => {
        this.mensajeService.agregarMensaje({
          texto: `Usuario ${usuario.nombre} ha sido modificado.`,
          tipo: 1,
        });
        this.cerrarFormulario();
      },
      (error) => {
        this.mensajeService.agregarMensaje({
          texto: 'No se pudo editar. intente de nuevo.',
          tipo: 2,
        });
      }
    );
  }

  eliminar(): void {
    let nombre = this.usuarioSelected.nombre;
    this.usuarioService.eliminar(this.usuarioSelected).subscribe(
      (res) => {
        this.mensajeService.agregarMensaje({
          texto: `Se ha eliminado al Usuario ${nombre}.`,
          tipo: 1,
        });
        this.cerrarFormulario();
      },
      (error) => {
        this.mensajeService.agregarMensaje({
          texto: 'No se pudo eliminar. intente de nuevo.',
          tipo: 2,
        });
      }
    );
  }

  private cerrarFormulario(): void {
    this.usuarioService.enviarBusqueda(null);
    this.usuarioSelected = null;
  }
}
