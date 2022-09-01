import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Trabajador } from './models/Trabajador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor( private http:HttpClient) { }

  url:string = 'http://localhost:55493/api/Empleadosdaniel';  

  getTrabajador() {
    return this.http.get(this.url);
  }

  getOneTrabajador(id:any) {
    return this.http.get(this.url+"/"+ id);
  }

  addTrabajador(trabajador:Trabajador):Observable<Trabajador>{
    return this.http.post<Trabajador>(this.url, trabajador);

  }

  updateTrabajador(id:any, trabajador:Trabajador):Observable<Trabajador>{
    console.log(trabajador, id);
    return this.http.put<Trabajador>(this.url + "/"+ id, trabajador);
  }

  deleteTrabajador(id:number){
    return this.http.delete(this.url + "/" + id);
  }
}
