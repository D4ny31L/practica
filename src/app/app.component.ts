import { Component } from '@angular/core';
import { Trabajador } from './models/Trabajador';
import { TrabajadoresService } from './trabajadores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trabajador:Trabajador = new Trabajador();
  datatable:any = [];

  constructor(private TrabajadoresService:TrabajadoresService){

  }

  ngOnInit(): void{
  }

}
