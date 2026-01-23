import { Component } from '@angular/core';
import { QuartoComponente } from './quarto-componente/quarto-componente';

@Component({
  selector: 'app-terzo-componente',
  imports: [QuartoComponente],
  templateUrl: './terzo-componente.html',
  styleUrls: './terzo-componente.css',
})
export class TerzoComponente {
  name = {
    third: "terzo"
  }
}
