import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { Seccion } from './cv.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainLayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';

  seccionActiva: Seccion = 'resumen';

  cambiarSeccion(seccion: Seccion): void {
    this.seccionActiva = seccion;
  }
}