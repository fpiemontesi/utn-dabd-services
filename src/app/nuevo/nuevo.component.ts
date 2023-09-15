import { Component, OnInit } from '@angular/core';
import { Auto } from '../auto';
import { NgForm } from '@angular/forms';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'ma-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  auto: Auto = new Auto();

  constructor(private servicio: AutosService) { }

  ngOnInit(): void {
  }

  guardar(formulario: NgForm): void {
    if (formulario.invalid) {
      alert('Formulario inválido');
      return;
    }
    
    this.servicio.guardar(this.auto);
  }

}
