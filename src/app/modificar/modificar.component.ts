import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajadoresService } from '../trabajadores.service';
import { Trabajador } from '../models/Trabajador';
import { identity } from 'rxjs';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  
  addForm:any;
  Trabajador_id: any;
  vals = ''
  data= this.vals.split(',');
 
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private TrabajadoresService:TrabajadoresService,
    private url:ActivatedRoute,
    ) {

      this.addForm = this.formBuilder.group({
        ID_empleado:[],
        Nombre: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],  
        Apellidop: ['', [Validators.required, Validators.maxLength(50),Validators.minLength(2)]],  
        Apellidom: ['', [Validators.required, Validators.maxLength(50),Validators.minLength(2)]] ,
        Telefono: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]] ,
        Sexo: ['', Validators.required],  
        Nacimiento: ['', Validators.required],   
      }
      )
     }

  ngOnInit(): void {
    this.Trabajador_id = this.url.snapshot.params['id']
    if (this.Trabajador_id>0) {
      this.TrabajadoresService.getOneTrabajador(this.Trabajador_id).subscribe((
        (data:any)=>{
          console.log(data);
          this.addForm.patchValue(data);}
      ))
    }

    //console.log(this.Trabajador_id);
  }


  onEdit(){
   
    // console.log(this.addForm.value)
    this.TrabajadoresService.updateTrabajador(this.Trabajador_id,this.addForm.value).subscribe(
      {
        next: (resp:any) => {
          console.log(resp);
          this.router.navigate(['/']);
        },
        error: err =>{
          alert(err.error.msg);        
        }
      } 
    );
  }

}
