import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturadorService {

  constructor(private http: HttpClient) {
    console.log('Documenta Facturador listo!');
  }

  getFactutrador(){
    return this.http.get<Facturador>('http://localhost:3000/facturador/')
      .pipe(
        map(data => data)
      );
  }
  //Posibles errores de que no encuentra la funcion
  getEntidad() {
    return this.http.get<any>('http://localhost:3000/entidad/')
      .pipe(
        map(data => data)
      );
  }

  saveFacturador(facturador: Facturador): Observable<void> {
    let autofacturador = 1;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    this.http.get('http://localhost:3000/facturadorLast/').subscribe(
      (data: any) => {
        autofacturador = autofacturador + Number(data.max);
        facturador.id_facturador = autofacturador.toString();
        facturador.codigo = autofacturador.toString();
        const facturadorJson = JSON.stringify(facturador);
        this.http.post('http://localhost:3000/entidad/', facturadorJson, options).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (data: any) => {
            console.log(data);
          }
        );
      }
    );
    return;
  }

  updateFacturador(facturadorActualizar: Facturador): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    const facturadorJson = JSON.stringify(facturadorActualizar);
    this.http.post('http://localhost:3000/facturador/', facturadorJson, options).subscribe(
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

class Facturador {
  id_facturador: string;
  codigo: string;
  descripcion: string;
  entidad: Entidad;
}


