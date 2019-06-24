import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
//Angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatMenuModule, MatToolbarModule, MatAutocomplete, MatAutocompleteModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//rutas
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { PruebamaterialComponent } from './components/pruebamaterial/pruebamaterial.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { FacturadorComponent, EntidadPipe } from './components/facturador/facturador.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebamaterialComponent,
    HomeComponent,
    NavbarComponent,
    EntidadComponent,
    NavbarComponent,
    FacturadorComponent,
    EntidadPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    //MatAutocomplete,
    MatAutocompleteModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    NgxMatSelectSearchModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AppModule { }
