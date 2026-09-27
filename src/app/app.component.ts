import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV';

  nombre = 'Marco Alvarez Armijo';
  puesto = 'Jefe de Departamento de Informática';
  email = 'marcoalvarezarmijo@gmail.com';
  telefono = '+34 641 32 50 22';
  ubicacion = 'Nerja';
  github = 'github.com/Maliketh4bc';
  idiomas = ['Español', 'Inglés'];
  sobreMi = 'Desarrollador versátil y orientado a los resultados, con una gran motivación por el aprendizaje y la mejora continuos. Apasionado por crear soluciones tecnológicas eficientes, robustas y bien estructuradas, combinando el pensamiento lógico, el diseño y el trabajo en equipo eficaz. Se adapta rápidamente a nuevos entornos y disfruta afrontando retos técnicos. Además de mi formación académica, he creado proyectos autodidactas en el desarrollo de videojuegos y el modelado 3D utilizando Unity y Blender.';

  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];

  // Experiencia 1
  exp1Puesto = 'Dependiente de tienda';
  exp1Empresa = 'Bloombury';
  exp1Periodo = 'Jun 2024 - Sep 2024';
  exp1Descripcion = 'Atención al cliente, reposición de productos y gestión de caja.';

  // Experiencia 2
  exp2Puesto = 'Alquiler de Kayak';
  exp2Empresa = 'KayakenNerja';
  exp2Periodo = 'Ago 2025 - Sep 2025';
  exp2Descripcion = 'Atención al cliente, gestión de reservas y preparación del material.';

  // Educación
  eduTitulo = 'Bachillerato Cientifico - 9.2 media';
  eduCentro = 'IES El Chaparil';
  eduPeriodo = 'Sep 2023 - Jun 2025';

  textoPie = 'Currículum desarrollado con Angular';
  fecha = new Date();
}
