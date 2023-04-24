import { Injectable } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  mensaje: Mensaje | undefined;

  constructor() {}

  agregarMensaje(mensaje: Mensaje) {
    this.mensaje = mensaje;
  }
}
