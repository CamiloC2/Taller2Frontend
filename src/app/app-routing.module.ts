import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { ListaSolicitudComponent } from './lista-solicitud/lista-solicitud.component';  // Nuevo componente
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';  // Nuevo componente

const routes: Routes = [
  // Rutas para mascotas
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent },
  { path: 'mascotas/agregar', component: EditarMascotasComponent },
  
  // Rutas para solicitudes de adopción
  { path: 'solicitudes', component: ListaSolicitudComponent },
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudComponent },
  { path: 'solicitudes/agregar', component: EditarSolicitudComponent },
  
  // Redirección a la lista de mascotas por defecto
  { path: '**', redirectTo: '/mascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
