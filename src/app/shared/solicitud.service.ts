import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudAdopcionModel } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  BASE_URL = 'http://localhost:4000';
  
  constructor(private http: HttpClient) {}

  // Obtener lista completa de solicitudes de adopción
  obtenerSolicitudesAdopcion() {
    return this.http.get<SolicitudAdopcionModel[]>(`${this.BASE_URL}/solicitudes/buscar`);
  }

  // Buscar una solicitud de adopción por ID
  obtenerSolicitudAdopcion(idSolicitud: string) {
    return this.http.get<SolicitudAdopcionModel>(`${this.BASE_URL}/solicitudes/buscarId/${idSolicitud}`);
  }

  // Crear una nueva solicitud de adopción
  agregarSolicitudAdopcion(solicitud: SolicitudAdopcionModel) {
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crear`, solicitud);
  }

  // Actualizar una solicitud de adopción
  actualizarSolicitudAdopcion(solicitud: SolicitudAdopcionModel) {
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizar/${solicitud.id}`, solicitud);
  }

  // Eliminar una solicitud de adopción
  borrarSolicitudAdopcion(idSolicitud: string) {
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/eliminar/${idSolicitud}`);
  }
}
