import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
   url='http://127.0.0.1:8080/producto';
   selectProducto:Producto=new Producto();

  reqHeader=new HttpHeaders({
     'Content-Type':'aplication/json'
  });
  constructor(private http:HttpClient) { }
    getProductos():Observable<Producto>{
     return this.http.get<Producto>(this.url);
   }
  // getProductos(page: number, size: number): Observable<Producto> {
  //   return this.http.get<Producto>(`${this.url}?page=${page}&size=${size}`);
  // }

 createProducto(producto:Producto):Observable<Producto>{
    return this.http.post(this.url,producto,{headers:this.reqHeader});
  }

  updateProducto(id:number, producto:Producto){
    return this.http.put(this.url+'/'+id+'/',producto,{headers:this.reqHeader});
  }

 deleteProducto(id:number){
    return this.http.delete(this.url+'/'+id+'/');
  }
}


