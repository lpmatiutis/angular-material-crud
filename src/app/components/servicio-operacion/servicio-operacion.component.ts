import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { MatSort } from '@angular/material';
import {ServicioOperacionService} from '../../services/servicio-operacion.service';

//Clases
class Idcliente {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdpersonaId {
  constructor(
  public idcliente: Idcliente = new Idcliente()
  ){}
}

class Idcliente2 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdclienteId {
  constructor(
  public idcliente: Idcliente2 = new Idcliente2()
  ){}
}

class Idtipopago {
  constructor(
  public idmoneda: number = 0,
  public activo: boolean = true,
  public descripcion: string = '',
  public idpersonaId: IdpersonaId = new IdpersonaId(),
  public idclienteId: IdclienteId = new IdclienteId(),
  public idtipopagoId: number = 0,
  ){}
}

class Idcliente3 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdpersonaId2 {
  constructor(
  public idcliente: Idcliente3 = new Idcliente3()
  ){}
}

class Idcliente4 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdclienteId2 {
  constructor(
  public idcliente: Idcliente4 = new Idcliente4()
  ){}
}

class Idcliente5 {
  constructor(
  idcliente: number = 0
  ){}
}

class IdservicioId {
  constructor(
  public idcliente: Idcliente5 = new Idcliente5()
  ){}
}

class Idservicio {
  constructor(
  public idmoneda: number = 0,
  public activo: boolean = true,
  public idserviciodocumenta: string = '',
  public idpersonaId: IdpersonaId2 = new IdpersonaId2(),
  public idclienteId: IdclienteId2 = new IdclienteId2(),
  public idservicioId: IdservicioId = new IdservicioId()
  ){}
}

class Idcliente6 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdpersonaId3 {
  constructor(
  public idcliente: Idcliente6 = new Idcliente6()
  ){}
}

class Idcliente7 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdclienteId3 {
  constructor(
  public idcliente: Idcliente7 = new Idcliente7()
  ){}
}

class Idmoneda {
  constructor(
  public idmoneda: number = 0,
  public activo: boolean = true,
  public descripcion: string = '',
  public idpersonaId: IdpersonaId3 = new IdpersonaId3(),
  public idclienteId: IdclienteId3 = new IdclienteId3(),
  public idtipopagoId: number = 0
  ){}
}

class Idtipopago2 {
  constructor(
  public idtipopago: number = 0
  ){}
}

class IdpersonaId4 {
  constructor(
  public idtipopago: Idtipopago2 = new Idtipopago2()
  ){}
}

class Idtipopago3 {
  constructor(
  public idtipopago: number = 0
  ){}
}

class IdclienteId4 {
  constructor(
  public idtipopago: Idtipopago3 = new Idtipopago3()
  ){}
}

class Idtipopago4 {
  constructor(
  public idtipopago: number = 0
  ){}
}

class IdtipopagoId {
  constructor(
  public idtipopago: Idtipopago4 = new Idtipopago4()
  ){}
}

class Idtipopago5 {
  constructor(
  public idtipopago: number = 0
  ){}
}

class IdmonedaId {
  constructor(
  public idtipopago: Idtipopago5 = new Idtipopago5()
  ){}
}

class Idservicio2 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdpersonaservicioId {
  constructor(
  public idservicio: Idservicio2 = new Idservicio2()
  ){}
}

class Idservicio3 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdclienteservicioId {
  constructor(
  public idservicio: Idservicio3 = new Idservicio3()
  ){}
}

class Idservicio4 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdservicioId2 {
  constructor(
  public idservicio: Idservicio4 = new Idservicio4()
  ){}
}

class Idservicio5 {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdmonedaservicioId {
  constructor(
  public idservicio: Idservicio5 = new Idservicio5()
  ){}
}

class ServicioOperacion {
  constructor(
  public idserviciooperacion: number = 0,
  public idbanco: number = 0,
  public idcuenta: number = 0,
  public activo: boolean = true,
  public clubcajeropuntos: string = '',
  public idtipopago: Idtipopago = new Idtipopago(),
  public idservicio: Idservicio = new Idservicio(),
  public idpersona?: any,
  public idmoneda: Idmoneda = new Idmoneda(),
  public idpersonaId: IdpersonaId4 = new IdpersonaId4(),
  public idclienteId: IdclienteId4 = new IdclienteId4(),
  public idtipopagoId: IdtipopagoId = new IdtipopagoId(),
  public idmonedaId: IdmonedaId = new IdmonedaId(),
  public idpersonaservicioId: IdpersonaservicioId = new IdpersonaservicioId(),
  public idclienteservicioId: IdclienteservicioId = new IdclienteservicioId(),
  public idservicioId: IdservicioId2 = new IdservicioId2(),
  public idmonedaservicioId: IdmonedaservicioId = new IdmonedaservicioId()
  ){}
}

class ServicioOperacionJoin {
  constructor(
  public id: number = 0,
    public persona: string = '',
    public tipo: string = '',
    public servicio: string = '',
    public facturador: string = '',
    public idservicio: number = 0,
    public estado: boolean = true,
    public moneda: string = ''
  ) {
    
  }
}

class IdclienteR {
  constructor(
  public idpersona: number = 0,
  public idcliente: number = 0,
  public aud_fecalta: Date = new Date(),
  public aud_idusuarioalta: number = 0,
  public aud_fecmodif?: any,
  public aud_idusuariomodif?: any,
  public fecbajadefinitiva?: any,
  public idusuariobaja?: any,
  public diasvigenciapwd: number = 0,
  public correoresponsable?: any
  ){}
}

class Red {
  constructor(
  public codigo: string = '',
  public descripcion: string = '',
  public activo: boolean = true,
  public colorbase?: any,
  public iddocumenta?: any,
  public codera: string = '',
  public clubcajero: boolean = true,
  public idpersona?: any,
  public idcliente: IdclienteR = new IdclienteR(),
  public idpersonaId: IdpersonaId = new IdpersonaId(),
  public idclienteId: IdclienteId = new IdclienteId()
  ){}
}

class Moneda {
  constructor(
  idmoneda: number = 0,
  descripcion: string = '',
  simbolo: string = '',
  mascaraentrada: string = '',
  mascarasalida: string = '',
  decimales: number = 0,
  activo: boolean = true,
  iddocumenta: string = ''
  ){}
}

class TipoPago {
  constructor(
  idtipopago: number = 0,
  codigo: string = '',
  descripcion: string = '',
  activo: boolean = true
  ){}
}

class IdpersonaIdF {
  constructor(
  idcliente: number = 0
  ){}
}

class IdclienteIdF {
  constructor(
  idcliente: number = 0
  ){}
}

class Facturador {
  constructor(
  public etiquetaticket: string = '',
  public activo: boolean = true,
  public logoprincipal: string = '',
  public logosecundario?: any,
  public nota?: any,
  public feciniprd: string = '',
  public fecbajadefinitivaprd?: any,
  public rankingdocumenta?: any,
  public textobusqueda?: any,
  public codteclado: number = 0,
  public idfacturadordocumenta: string = '',
  public clasecontroladoracb?: any,
  public idtipoestadocliente?: any,
  public idpersonaId: IdpersonaIdF = new IdclienteIdF(),
  public idclienteId: IdclienteIdF = new IdclienteIdF(),
  public idtipofacturadorId: number = 0
  ){}
}

class IdclienteS {
  constructor(
  public idcliente: number = 0
  ){}
}

class IdpersonaIdS {
  constructor(
  public idcliente: IdclienteS = new IdclienteS()
  ){}
}

class IdclienteIdS {
  constructor(
  public idcliente: Idcliente2 = new Idcliente2()
  ){}
}

class ServicioNanduti {
  constructor(
  public idservicio: number = 0,
  public idtipoestadoservicio: number = 0,
  public descripcion: string = '',
  public etiquetaticket: string = '',
  public fecdesde: Date = new Date(),
  public fechasta: string = '',
  public acumulable: boolean = false,
  public nota: string = '',
  public notaestadoservicio: string = '',
  public logoprincipal?: any,
  public imgayuda?: any,
  public logosecundario?: any,
  public trxindividual: boolean = false,
  public totalapagareditable: boolean = false,
  public importeeditable: boolean = false,
  public idfacturadordocumenta: string = '',
  public ranking: number = 0,
  public middlewareclass: string = '',
  public refconverterclass?: any,
  public refconverterdelimitador: string = '',
  public tiempoesperaconsulta: number = 0,
  public tiempoesperapago: number = 0,
  public middlewareclasspay: string = '',
  public middlewareclassticket: string = '',
  public solopago: boolean = false,
  public controllerclass: string = '',
  public multiformadepago: boolean = false,
  public tipomovcaja: string = '',
  public orden: number = 0,
  public obsmarketing: string = '',
  public funcionalidad: string = '',
  public clubcajeropuntos: string = '',
  public idpersonaId: IdpersonaIdS = new IdpersonaIdS(),
  public idclienteId: IdclienteIdS = new IdclienteIdS()
  ){}
}

class ConsultarServicio {
  constructor(
    public servicio: string = '',
    public facturador: string = ''
  ){}
}

//
@Component({
  selector: 'app-servicio-operacion',
  templateUrl: './servicio-operacion.component.html',
  styleUrls: ['./servicio-operacion.component.css']
})
export class ServicioOperacionComponent implements OnInit, AfterViewInit {

  servicioOperacion: ServicioOperacion[] = [];

  servicioOperacionJoin: ServicioOperacionJoin [] = [];

  loading : boolean;
  
  displayedColumns = ['id', 'persona', 'tipo', 'servicio', 'facturador', 'idservicio', 'estado', 'moneda', 'update', 'delete'];
  dataSource = new MatTableDataSource<ServicioOperacionJoin>(this.servicioOperacionJoin);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getServicioOperacion();
    this.dataSource.paginator = this.paginator;
    //this.loading=false;
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  regModel: ServicioOperacion;
  consultMode: ConsultarServicio = new ConsultarServicio();
  redMode: Red [] = [];
  tipoPagoMode: TipoPago [] = [];
  monedaMode: Moneda [] = [];
  facturadorMode: Facturador [] = [];
  servicioMode: ServicioNanduti [] = [];

  facturadorSelect: Facturador = new Facturador;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;

  //localidades: Localidad [] = [];

  constructor(private documenta: ServicioOperacionService) {
    this.loading=true;
    // this.documenta.getLocalidad()
    //   .subscribe((data: any) => {
    //     this.localidades = data;
    //   });
    // Add default registration data.
    this.documenta.getServicioOperacionBy(this.consultMode)
      .subscribe((data: any) =>{
          this.servicioOperacionJoin = data;
      });

    this.documenta.getRed()
    .subscribe((data: any) =>{
        this.redMode = data;
    });

    this.documenta.getFormaPago()
    .subscribe((data: any) => {
      this.tipoPagoMode = data;
    });

    this.documenta.getMoneda()
    .subscribe((data: any) =>{
      this.monedaMode = data;
    });

    this.documenta.getFacturadorNanduti()
    .subscribe((data: any) =>{
      this.facturadorMode = data;
      this.facturadorSelect = data;
    });

    this.documenta.getServicioNanduti()
      .subscribe((data: any) => {
        this.servicioMode = data;
      });
  }

  public getServicioOperacion = () => {
    this.documenta.getServicioOperacionBy(this.consultMode)
      .subscribe((data: any) =>{
          this.dataSource.data = data as ServicioOperacionJoin[];
          this.loading=false;

      });
  }

  onNew() {
    // Initiate new registration.
    this.regModel = new ServicioOperacion();
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
      this.servicioOperacion.push(this.regModel);
      console.log(this.regModel);
      //this.documenta.saveOperacion(this.regModel);

      console.log('objeto agregado!');
    } else {
      // Update the existing properties values based on model.
      console.log(this.regModel);

      this.servicioOperacion[this.selectedRow] = this.regModel;

      //this.documenta.updateOperacion(this.regModel);
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  Consultar() {
    console.log(this.consultMode.servicio);
    this.documenta.getServicioOperacionBy(this.consultMode)
      .subscribe((data: any) =>{
          this.dataSource.data = data as ServicioOperacionJoin[];
          this.loading=false;

      });
  }

  onEdit(index: any) {
    console.log('ingreso a edit' + index.nombre);
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new ServicioOperacion();
    // Retrieve selected registration from list and assign to model.
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

  onChangeRed(red: Red) {
    // Assign corresponding selected country to model.
    console.log('cambio red: ' + JSON.stringify(red));
    //this.regModel. = localidad;
  }

  onChangeForma(tipoPago: TipoPago) {
    console.log('cambio forma: ' + JSON.stringify(tipoPago));
    //this.regModel. = localidad;
  }

  onChangeMoneda(moneda: Moneda) {
    console.log('cambio moneda: ' + JSON.stringify(moneda));
    //this.regModel. = localidad;
  }

  onChangeFacturador(facturador: Facturador) {
    console.log('cambio facturador: ' + JSON.stringify(facturador));
    // this.facturadorSelect.idfacturadordocumenta
    // let dropDownData = this.facturadorMode.find((data: any) => data.idfacturadordocumenta === facturador.idfacturadordocumenta);
    // if(dropDownData){
    //   this.servicioMode = dropDownData
    // }
    //this.regModel. = localidad;
    
  }

  onChangeServicio(servicio: ServicioNanduti) {
    console.log('cambio servicio: ' + JSON.stringify(servicio));
    //this.regModel. = localidad;
  }

  public getRedes = () => {
    this.documenta.getRed()
      .subscribe((data: any) =>{
          //this.dataSource.data = data as ServicioOperacionJoin[];
          this.redMode = data;

      });
  }


}
