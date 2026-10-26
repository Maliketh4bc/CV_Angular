import { Component, input, output } from '@angular/core';
import { Seccion } from '../../cv.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombre = 'Marco Alvarez Armijo';
  puesto = 'Jefe de Departamento de Informática';

  // PADRE -> HIJO: la cabecera necesita saber qué sección está activa para resaltar su botón
  seccionActiva = input<Seccion>('resumen');

  // HIJO -> PADRE: evento que avisa a AppComponent de la sección elegida
  seccionSeleccionada = output<Seccion>();

  seleccionar(seccion: Seccion): void {
    this.seccionSeleccionada.emit(seccion);
  }
}