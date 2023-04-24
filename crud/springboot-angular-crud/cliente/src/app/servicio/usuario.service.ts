import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from 'app/models/usuario';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = `${environment.apiUrl}/usuario`;

  private buscarObserver = new Subject();
  public buscarSuscriber$ = this.buscarObserver.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  enviarBusqueda(data: string) {
    this.buscarObserver.next(data);
  }

  buscar(nombre: string): Observable<Usuario[]> {
    let url = nombre ? `${this.baseUrl}/buscar/${nombre}` : `${this.baseUrl}`;
    return this.http.get<Usuario[]>(url);
  }

  actualizar(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(this.baseUrl, usuario, this.httpOptions);
  }

  agregar(usurio: Usuario): Observable<any> {
    return this.http.post<Usuario>(this.baseUrl, usurio, this.httpOptions);
  }

  eliminar(usuario: Usuario): Observable<any> {
    return this.http.delete<Usuario>(
      `${this.baseUrl}/${usuario.id}`,
      this.httpOptions
    );
  }
}
