import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CambiarFondoDirective } from './cambiar-fondo.directive';
import { ListadoComponent } from './listado/listado.component';
import { AutosService } from './services/autos.service';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CalcularImporteService } from './services/calcular-importe.service';
import { CalcularImporteRegularService } from './services/calcular-importe-regular.service';
import { CalcularImporteEspecialService } from './services/calcular-importe-especial.service';

@NgModule({
  declarations: [
    AppComponent,
    CambiarFondoDirective,
    ListadoComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    // AutosService
    {
      provide: CalcularImporteService,
      // useClass: CalcularImporteRegularService
      useClass: CalcularImporteEspecialService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
