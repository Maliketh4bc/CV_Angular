export type Seccion = 'resumen' | 'experiencia' | 'formacion';

export interface Experiencia {
  id: number;
  empresa: string;
  puesto: string;
  periodo: string;
  descripcion: string;
}

export interface Formacion {
  id: number;
  titulo: string;
  centro: string;
  periodo: string;
}