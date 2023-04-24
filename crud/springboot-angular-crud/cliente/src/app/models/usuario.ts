import { Rol } from './rol';

export interface Usuario {
  id: number;
  id_rol: number;
  rol: Rol;
  nombre: string;
  activo: string;
}
