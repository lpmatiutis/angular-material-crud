import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { MatSort } from '@angular/material';
import { ConsultaService } from '../../services/consulta.service';

class Entidad {
  constructor(
  public id_entidad: string = '',
  public direccion: string = '',
  public nombre: string = '',
  public ruc_ci: string = '',
  public telefono: string = '',
  public localidad: Localidad = new Localidad()
  ) {}
}
class Localidad{
  constructor(
    public id_localidad: string = '',
    public nombre: string = '',
    public ciudad: string = ''
    ) {}
}

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.css']
})
export class EntidadComponent implements OnInit, AfterViewInit {

  // It maintains list of Registrations
  entidades: Entidad[] = [];

  loading: boolean;

  displayedColumns = ['id_entidad', 'nombre', 'ruc_ci', 'telefono', 'direccion', 'localidad', 'update', 'delete'];
  dataSource = new MatTableDataSource<Entidad>(this.entidades);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getEntidades();
    this.dataSource.paginator = this.paginator;
    //this.loading=false;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  regModel: Entidad;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;

  localidades: Localidad [] = [];
  
  constructor(private documenta: ConsultaService) {
  this.loading=true;
    this.documenta.getLocalidad()
      .subscribe((data: any) => {
        this.localidades = data;
      });
    // Add default registration data.
    this.documenta.getEntidad()
      .subscribe((data: any) =>{
          this.entidades=data
      });
  }

  public getEntidades = () => {
    this.documenta.getEntidad()
      .subscribe((data: any) =>{
          this.dataSource.data = data as Entidad[]
          this.loading=false;

      });
  }

  onNew() {
    // Initiate new registration.
    this.regModel = new Entidad();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.entidades.push(this.regModel);
      console.log(this.regModel);
      this.documenta.saveEntidad(this.regModel);

      console.log('objeto agregado!');
    } else {
      // Update the existing properties values based on model.
      console.log(this.regModel);

      this.entidades[this.selectedRow] = this.regModel;

      this.documenta.updateEntidad(this.regModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: any) {
    console.log('ingreso a edit' + index.nombre);
    // Assign selected table row index.
    this.selectedRow = index;
    console.log('ingreso a edit2');
    // Initiate new registration.
    this.regModel = new Entidad();
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

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    //this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(localidad: Localidad) {
    // Assign corresponding selected country to model.
    console.log('cambio ' + localidad);
    this.regModel.localidad = localidad;
  }

    getUsuario(){
     console.log('entidad = ' + this.entidades[0].localidad.nombre);
   }

}