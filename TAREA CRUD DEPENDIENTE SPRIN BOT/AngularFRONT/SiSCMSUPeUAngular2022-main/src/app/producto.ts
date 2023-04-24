// export enum Status {
//   ACTIVO = '1',
//   INACTIVO = '0'
// }
export class Producto {
  id?:number;
  nombre?:string;
  descripccion?:string;
  detalles?:string;
  precio?: number | null | undefined | string;
  // Precio?:number;
  oferta?:string;
  color?:string;
  talla?:string;
  categorias_Id?: string;
  // status?: Status;
  // categoriasId?: number;


}
