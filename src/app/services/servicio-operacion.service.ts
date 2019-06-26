import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioOperacionService {

  constructor(private http: HttpClient) {
    console.log('Documenta ServicioOperacion listo!');
   }

   getTipoPlantilla(){
     return this.http.get<any>('http://localhost:3000/plantilla-servicio/')
       .pipe(
         map(data => data)
       );
   }

   getRed(){
    return this.http.get<any>('http://localhost:3000/red/')
      .pipe(
        map(data => data)
      );
  }

  getFormaPago(){
    return this.http.get<any>('http://localhost:3000/tipo-pago/')
      .pipe(
        map(data => data)
      );
  }

  getMoneda(){
    return this.http.get<any>('http://localhost:3000/moneda-nanduti/')
      .pipe(
        map(data => data)
      );
  }

  getFacturadorNanduti(){
    return this.http.get<any>('http://localhost:3000/facturador-nanduti/')
      .pipe(
        map(data => data)
      );
  }

  getServicioNanduti(){
    return this.http.get<any>('http://localhost:3000/servicio/')
      .pipe(
        map(data => data)
      );
  }
  //http://localhost:3000/servicio-operacion/test
  getServicioOperacionBy(consultar: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    const entidadJson = JSON.stringify(consultar);
    return this.http.get<any>('http://localhost:3000/servicio-operacion/test/'/*, entidadJson, options*/)
      .pipe(
        map(data => data)
      );
  }
}
