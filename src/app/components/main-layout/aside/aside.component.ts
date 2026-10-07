import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  email = 'marcoalvarezarmijo@gmail.com';
  telefono = '+34 641 32 50 22';
  ubicacion = 'Nerja';
  github = 'github.com/Maliketh4bc';
  idiomas = ['Español', 'Inglés'];
}
