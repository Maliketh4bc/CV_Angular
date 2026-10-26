import { Component, input } from '@angular/core';
import { Experiencia, Formacion, Seccion } from '../../../cv.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  seccion = input<Seccion>('resumen');

  nombre = 'Marco Alvarez Armijo';
  foto = 'foto_carnet_marco.jpg';
  sobreMi = 'Desarrollador versátil y orientado a los resultados, con una gran motivación por el aprendizaje y la mejora continuos. Apasionado por crear soluciones tecnológicas eficientes, robustas y bien estructuradas, combinando el pensamiento lógico, el diseño y el trabajo en equipo eficaz. Se adapta rápidamente a nuevos entornos y disfruta afrontando retos técnicos. Además de mi formación académica, he creado proyectos autodidactas en el desarrollo de videojuegos y el modelado 3D utilizando Unity y Blender.';

  experiencias: Experiencia[] = [
    {
      id: 1,
      empresa: 'Bloombury',
      puesto: 'Dependiente de tienda',
      periodo: 'Jun 2024 - Sep 2024',
      descripcion: 'Atención al cliente, reposición de productos y gestión de caja.'
    },
    {
      id: 2,
      empresa: 'KayakenNerja',
      puesto: 'Alquiler de Kayak',
      periodo: 'Ago 2025 - Sep 2025',
      descripcion: 'Atención al cliente, gestión de reservas y preparación del material.'
    }
  ];

  formacion: Formacion[] = [
    {
      id: 1,
      titulo: 'Bachillerato Científico - 9.2 media',
      centro: 'IES El Chaparil',
      periodo: 'Sep 2023 - Jun 2025'
    }
  ];
}