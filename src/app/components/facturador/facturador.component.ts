import { Component, ViewChild, OnInit,OnDestroy, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort, MatSelectionList } from '@angular/material';
import { FacturadorService } from '../../services/facturador.service';
import { FormControl } from '@angular/forms';
import { Subject} from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

class Entidad {
  constructor(
  public id_entidad: string = '',
  public direccion: string = '',
  public nombre: string = '',
  public ruc_ci: string = '',
  public telefono: string = '',
  public localidad: Localidad= new Localidad()
  ) {}
}

class Localidad{
  constructor(
    public id_localidad: string = '',
    public nombre: string = '',
    public ciudad: string = ''
    ) {}
}

class Facturador {
  constructor(
  public id_facturador: string= '',
  public codigo: string= '',
  public descripcion: string= '',
  public entidad: Entidad = new Entidad()
  ){}
}

@Component({
  selector: 'app-facturador',
  templateUrl: './facturador.component.html',
  styleUrls: ['./facturador.component.css']
})
export class FacturadorComponent implements OnInit, AfterViewInit, OnDestroy  {

  facturadores: Facturador[];

  loading: boolean;

  public bankCtrl: FormControl = new FormControl();

  entidades: Entidad [] = [];

  protected _onDestroy = new Subject<void>();

  displayedColumns = ['id_facturador', 'codigo', 'descripcion', 'entidad', 'update', 'delete'];
  dataSource = new MatTableDataSource<Facturador>(this.facturadores);

  @ViewChild(MatSelectionList, {static: true}) selectionList: MatSelectionList;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getFacturadores();
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  regModel: Facturador;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;

  constructor(private documenta: FacturadorService) {
    this.loading=true;
    this.documenta.getEntidad()
      .subscribe((data: any) => {
        this.entidades = data;
        
      });
    // Add default registration data.
    this.documenta.getFacturador()
      .subscribe((data: any) =>{
          this.facturadores=data;

      });
   }

   

  public getFacturadores = () => {
    this.documenta.getFacturador()
      .subscribe((data: any) =>{
          this.dataSource.data = data as Facturador[]
          this.loading=false;

      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onNew() {
    // Initiate new registration.
    this.regModel = new Facturador();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.facturadores.push(this.regModel);
      console.log(this.regModel);
      this.documenta.saveFacturador(this.regModel);

      console.log('facturador agregado!');
    } else {
      // Update the existing properties values based on model.
      console.log(this.regModel);

      this.facturadores[this.selectedRow] = this.regModel;

      this.documenta.updateFacturador(this.regModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  onEdit(index: any) {
    console.log('ingreso a edit' + index.nombre);
    // Assign selected table row index.
    this.selectedRow = index;
    console.log('ingreso a edit2');
    // Initiate new registration.
    this.regModel = new Facturador();
    console.log('ingreso a edit3');
    // Retrieve selected registration from list and assign to model.
    console.log('ingreso a edit4');
    this.regModel = index;
    // this.regModel = Object.assign({}, this.entidades[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    //this.registrations.splice(index, 1);
  }

  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  onChangeEntidad(entidad: Entidad) {
    // Assign corresponding selected country to model.
    console.log('cambio ' + entidad);
    this.regModel.entidad = entidad;
  }

}
@Pipe({name: 'filtrarEntidades'})
   export class EntidadPipe implements PipeTransform {
    transform(allEntidad: Entidad[], searchText: string): Entidad[] {
      if(!allEntidad) return [];
      if(!searchText) return allEntidad;

      searchText = searchText.toLowerCase();

      return allEntidad.filter(it => {
        //console.log(it.nombre.toLowerCase().includes(searchText));
        return it.nombre.toLowerCase().includes(searchText);
      });
    }
  }