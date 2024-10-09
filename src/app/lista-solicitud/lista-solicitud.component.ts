import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudAdopcionModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitud.component.html',
  styleUrls: ['./lista-solicitud.component.css']
})
export class ListaSolicitudComponent implements OnInit {
  solicitudes: Observable<SolicitudAdopcionModel[]> | undefined;

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit() {
    this.solicitudes = this.solicitudService.obtenerSolicitudesAdopcion();
  }

  borrarSolicitud(idSolicitud: string) {
    this.solicitudService.borrarSolicitudAdopcion(idSolicitud).subscribe({
      next: data => {
        console.log(`Solicitud de adopción eliminada`);
        this.ngOnInit();  // Recargar la lista después de eliminar
      },
      error: err => {
        console.log(`Error al eliminar la solicitud de adopción: ${err}`);
      }
    });
  }
}
