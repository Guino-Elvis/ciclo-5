import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RolserviceService {
  constructor(private http: HttpClient) {}

  consultarRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.apiUrl}/rol`);
  }
}
