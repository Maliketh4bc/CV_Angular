import { Component, input } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { MainComponent } from '../main/main.component';
import { Seccion } from '../cv.model';

@Component({
  selector: 'app-main-layout',
  imports: [AsideComponent, MainComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  // Recibe la sección de AppComponent y la reenvía a MainComponent
  seccion = input<Seccion>('resumen');
}