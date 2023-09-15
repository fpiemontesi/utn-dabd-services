import { Injectable } from '@angular/core';
import { Auto } from '../auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private listado: Auto[] = [
    {
      nombre: 'Mi auto',
      modelo: 'Nuevo',
      precio: 15000
    },
    {
      nombre: 'Otro auto',
      modelo: 'Viejo',
      precio: 20000
    }
  ];

  constructor() { }

  obtenerListado(): Auto[] {
    return this.listado;
  }

  guardar(auto: Auto): void {
    this.listado.push(auto);
  }
}
