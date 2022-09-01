import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadoresService } from '../trabajadores.service';

@Component({
  selector: 'app-trabajador-alta',
  templateUrl: './trabajador-alta.component.html',
  styleUrls: ['./trabajador-alta.component.css'],
  
})
export class TrabajadorAltaComponent implements OnInit {
  addForm:any;

 
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private TrabajadoresService:TrabajadoresService
    ) {

      this.addForm = this.formBuilder.group({
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
  }


  onSubmit(){
   
    // console.log(this.addForm.value)
    this.TrabajadoresService.addTrabajador(this.addForm.value).subscribe(
      {
        next: (resp:any) => {
          console.log(resp);
          this.router.navigate(['/']);
        },
        error: (err:any) =>{
          console.log(err.error.msg);
          

        }
      });
  }


}