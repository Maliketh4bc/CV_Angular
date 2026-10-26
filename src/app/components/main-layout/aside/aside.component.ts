import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  ubicacion = 'Nerja';
  telefono = '+34 641 32 50 22';
  email = 'marcoalvarezarmijo@gmail.com';
  github = 'github.com/Maliketh4bc';
  idiomas = ['Español', 'Inglés'];

  mostrarContacto = true;

  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];

  tecnologiaSeleccionada: string | null = null;

  alternarContacto(): void {
    this.mostrarContacto = !this.mostrarContacto;
  }

  seleccionarTecnologia(tec: string): void {
    this.tecnologiaSeleccionada = tec;
  }
}