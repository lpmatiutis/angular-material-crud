import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Para Entity Entidad
export class ConsultaService {

  constructor(private http: HttpClient) {
    console.log('Documenta Entidad listo!');
  }

  getEntidad() {
    return this.http.get<Entidad>('http://localhost:3000/entidad/')
      .pipe(
        map(data => data)
      );
  }

  getLocalidad() {
    return this.http.get<any>('http://localhost:3000/localidad/')
      .pipe(
        map(data => data)
      );
  }

  saveEntidad(entidad: Entidad): Observable<void> {
    let autoentidad = 1;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    this.http.get('http://localhost:3000/entidad/entidadLast/').subscribe(
      (data: any) => {
        autoentidad = autoentidad + Number(data.max);
        entidad.id_entidad = autoentidad.toString();
        const entidadJson = JSON.stringify(entidad);
        console.log('entidad: ' + entidadJson);
        this.http.post('http://localhost:3000/entidad/create/', entidadJson, options).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (data: any) => {
            console.log(data);
          }
        );
      }
    );
    return;
  }

  updateEntidad(entidadActualizar: Entidad): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    const entidadJson = JSON.stringify(entidadActualizar);
    this.http.post('http://localhost:3000/entidad/', entidadJson, options).subscribe(
      data => {
        console.log(data);
      }
    );
    return;
  }

}

class Entidad {
  // tslint:disable-next-line:variable-name
  id_entidad: string;
  direccion: string;
  nombre: string;
  ruc_ci: string;
  telefono: string;
  localidad: Localidad;
}

class Localidad {
  id_localidad: string;
  nombre: string;
  ciudad: string;
}


