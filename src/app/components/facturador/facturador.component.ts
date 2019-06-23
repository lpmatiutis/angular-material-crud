import { Component, ViewChild, OnInit,OnDestroy, AfterViewInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { MatSort, MatSelect, MatSelectionList } from '@angular/material';
import { FacturadorService } from '../../services/facturador.service';
import { FormControl } from '@angular/forms';
import { takeUntil, take } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';
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

  public bankCtrl: FormControl = new FormControl();

  entidades: Entidad [] = [];

  protected _onDestroy = new Subject<void>();

  public filteredBanks: ReplaySubject<Entidad[]> = new ReplaySubject<Entidad[]>(1);

  /** control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl();

  displayedColumns = ['id_facturador', 'codigo', 'descripcion', 'entidad', 'update', 'delete'];
  dataSource = new MatTableDataSource<Facturador>(this.facturadores);

  @ViewChild(MatSelectionList, {static: true}) selectionList: MatSelectionList;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getFacturadores();
    this.dataSource.paginator = this.paginator;
    this.bankCtrl.setValue(this.entidades[10]);
    this.filteredBanks.next(this.entidades.slice());

    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        console.log('Entidades' + this.entidades)
        this.filterBanks();
      });
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
    this.documenta.getEntidad()
      .subscribe((data: any) => {
        this.entidades = data;
        
      });
    // Add default registration data.
    this.documenta.getFactutrador()
      .subscribe((data: any) =>{
          this.facturadores=data;

      });
   }

   

  public getFacturadores = () => {
    this.documenta.getFactutrador()
      .subscribe((data: any) =>{
          this.dataSource.data = data as Facturador[];

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

  public doFilterEntidad = (value: string) => {
    this.entidades.filter(entidad => entidad);
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

  protected setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.selectionList.compareWith = (a: Entidad, b: Entidad) => a && b && a.id_entidad === b.id_entidad,
        error => console.error('Aqui' + error);
        
      });
  }

  protected filterBanks() {
    if (!this.entidades) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.entidades.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.entidades.filter(entidad => entidad.nombre.toLowerCase().indexOf(search) > -1)
    );
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
