import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from 'app/models/rol';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolserviceService {
  constructor(private http: HttpClient) {}

  consultarRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.apiUrl}/rol`);
  }
}
