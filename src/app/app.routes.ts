import {Routes} from '@angular/router';
import { PruebamaterialComponent } from './components/pruebamaterial/pruebamaterial.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { FacturadorComponent } from './components/facturador/facturador.component';
import { ServicioOperacionComponent } from './components/servicio-operacion/servicio-operacion.component';




export const ROUTES: Routes = [
    {path: 'home', component: PruebamaterialComponent},
    {path: 'entidad', component: EntidadComponent},
    {path: 'facturador', component: FacturadorComponent},
    {path: 'serviciooperacion', component: ServicioOperacionComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];