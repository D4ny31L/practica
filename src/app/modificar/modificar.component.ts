import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajadoresService } from '../trabajadores.service';
import { Trabajador } from '../models/Trabajador';
import { identity } from 'rxjs';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  
  addForm: FormGroup;
  Trabajador_id: any;
 
  constructor( 
    private router: Router,
    private TrabajadoresService:TrabajadoresService,
    private url:ActivatedRoute,
    ) {
      this.addForm = new FormBuilder().group({
        ID_empleado:[],
        Nombre: new FormControl('',[
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ]),
        Apellidop : new FormControl('',[
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ]),
        Apellidom : new FormControl('',[
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ]),
        Telefono : new FormControl('',[
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
        Sexo : new FormControl('',[
          Validators.required
        ]),
        Nacimiento : new FormControl('',[
          Validators.required
        ]),
      })
    };

  ngOnInit(): void {
    this.Trabajador_id = this.url.snapshot.params['id']
    if (this.Trabajador_id>0) {
      this.TrabajadoresService.getOneTrabajador(this.Trabajador_id).subscribe((
        (data:any)=>{
          console.log(data);
          this.addForm.setValue({
            ID_empleado: this.Trabajador_id,
            Nombre : "Nombre",
            Apellidop: "Apellido Paterno",
            Apellidom : "Apellido Materno",
            Telefono: "6677777777",
            Sexo : "hombre",
            Nacimiento: ""
          });}
      ))
    }

    //console.log(this.Trabajador_id);
  }
  UserUpdate(frmValues: FormGroup){
    if(!frmValues.valid) {
      console.log ('Form is Invalid');
      return;
    }
    
  }

  onEdit(){
   
    // console.log(this.addForm.value)
    this.TrabajadoresService.updateTrabajador(this.Trabajador_id,this.addForm.value).subscribe(
      {
        next: (resp:any) => {
          console.log(resp);
          this.router.navigate(['/']);
        },
        error: (err:any) =>{
          alert(err.error.msg);        
        }
      } 
    );
  }

}
