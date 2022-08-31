import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TrabajadorAltaComponent } from './trabajador-alta/trabajador-alta.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {path: '', component: ListaComponent,pathMatch: 'full'},
  {path: 'trabajador-alta', component: TrabajadorAltaComponent},
  {path: 'edit/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
