import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV';

  nombre = 'Marco Alvarez Armijo';
  puesto = 'Jefe de Departamente de Informática';
  email = 'marcoalvarezarmijo@gmail.com';
  telefono = '+34 641 32 50 22';
  ubicacion = 'Nerja';
  sobreMi = 'Desarrollador versátil y orientado a los resultados, con una gran motivación por el aprendizaje y la mejora continuos. Apasionado por crear soluciones tecnológicas eficientes, robustas y bien estructuradas, combinando el pensamiento lógico, el diseño y el trabajo en equipo eficaz. Se adapta rápidamente a nuevos entornos y disfruta afrontando retos técnicos. Además de mi formación académica, he creado proyectos autodidactas en el desarrollo de videojuegos y el modelado 3D utilizando Unity y Blender.';

  // Habilidades (texto simple, separado por comas)
  habilidades = '';

  // Experiencia 1
  exp1Puesto = 'Dependiente de tienda';
  exp1Empresa = 'Bloombury';
  exp1Periodo = 'Jun 2024 - Sep 2024';
  exp1Descripcion = '...';

  // Experiencia 2
  exp2Puesto = 'Alquiler de Kayak';
  exp2Empresa = 'KayakenNerja';
  exp2Periodo = 'Ago 2025 - Sep 2025';
  exp2Descripcion = '...';

  // Educación
  eduTitulo = 'Bachillerato Cientifico - 9.2 media';
  eduCentro = 'IES El Chaparil';
  eduPeriodo = 'Sep 2023 - Jun 2025';

  fecha = new Date();
}