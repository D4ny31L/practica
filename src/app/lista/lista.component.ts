import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../trabajadores.service';
import { Trabajador } from '../models/Trabajador';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  trabajador: any;

  constructor(private TrabajadoresService:TrabajadoresService) { }

  ngOnInit(): void {

    this.TrabajadoresService.getTrabajador().subscribe(
      (result:any) =>{
        //console.log(result)
        this.trabajador = result
      }
    )
  }

  deletetrabajador(Trabajador:any){
    console.log (Trabajador.ID_empleado)
    this.TrabajadoresService.deleteTrabajador(Trabajador.ID_empleado).subscribe(result=>{
      this.trabajador = this.trabajador.filter((u:any) => u !== Trabajador);
    })
  }

}
