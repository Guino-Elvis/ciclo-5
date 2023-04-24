import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { Rol } from '../models/rol';
import { UsuarioService } from '../servicio/usuario.service';
import { RolserviceService } from '../servicio/rolservice.service';
import { MensajeService } from '../servicio/mensaje.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Input() usuarioSelected?: Usuario;

  roles: Rol[] = [];
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

  guardar(usuarioForm: NgForm): void {
    const usuario: Usuario = usuarioForm.value;
    this.usuarioService.agregar(usuario).subscribe(
      () => {
        this.mensajeService.agregarMensaje({
          texto: `Usuario ${usuario.nombre} guardado.`,
          tipo: 1,
        });
        this.cerrarFormulario();
      },
      () => {
        this.mensajeService.agregarMensaje({
          texto: 'No se pudo guardar. intente de nuevo.',
          tipo: 2,
        });
      }
    );
  }

  editar(usuarioForm: NgForm): void {
    const usuario: Usuario = usuarioForm.value;
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
    if (!this.usuarioSelected) {
      // Si usuarioSelected es undefined, no hacemos nada.
      return;
    }
    const nombre = this.usuarioSelected.nombre;
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
    this.usuarioService.enviarBusqueda('');
    this.usuarioSelected = undefined;
  }
}
