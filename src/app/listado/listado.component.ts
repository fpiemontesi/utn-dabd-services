import { Component, OnInit } from '@angular/core';
import { Auto } from '../auto';
import { AutosService } from '../services/autos.service';
import { CalcularImporteService } from '../services/calcular-importe.service';

@Component({
  selector: 'ma-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  // providers: [AutosService]
})
export class ListadoComponent implements OnInit {
  listado: Auto[] = [];

  constructor(private service: AutosService,
    private calculador: CalcularImporteService) { }

  ngOnInit(): void {
    this.listado = this.service.obtenerListado();
  }

  calcularImporte(precio: number): void {
    const importe = this.calculador.calcularImporte(precio);
    alert('El importe total es: ' + importe);
  }

}
