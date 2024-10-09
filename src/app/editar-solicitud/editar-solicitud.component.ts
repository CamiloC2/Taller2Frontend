import { Component, OnInit } from '@angular/core';
import { SolicitudAdopcionModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  idSolicitud = '';
  solicitud = new SolicitudAdopcionModel('', '', '', '');  // Inicializamos el modelo de la solicitud

  constructor(
    private solicitudService: SolicitudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idSolicitud = this.route.snapshot.params['idSolicitud'];
    console.log(`El idSolicitud es ${this.idSolicitud}`);

    if (this.idSolicitud) {
      // Viene de Editar
      console.log('La solicitud viene de Editar');
      this.solicitudService.obtenerSolicitudAdopcion(this.idSolicitud).subscribe({
        next: data => {
          console.log(data);
          this.solicitud = data;
          console.log(this.solicitud);
        },
        error: err => {
          console.log(`Error ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nueva Solicitud');
    }
  }

  onSubmit() {
    console.log("On Submit");
    // Viene de Editar
    if (this.solicitud.id) {
      this.solicitudService.actualizarSolicitudAdopcion(this.solicitud).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/solicitudes-adopcion']);
        },
        error: err => {
          console.log(`Error al actualizar ${err}`);
        }
      });
    } else {
      // Viene de Nueva Solicitud
      this.solicitudService.agregarSolicitudAdopcion(this.solicitud).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/solicitudes-adopcion']);
        },
        error: err => {
          console.log(`Error al agregar ${err}`);
        }
      });
    }
  }
}
