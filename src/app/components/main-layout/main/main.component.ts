import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  nombre = 'Marco Alvarez Armijo'
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
}
