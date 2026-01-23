import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponente } from './secondo-componente/secondo-componente';
import { TerzoComponente } from './terzo-componente/terzo-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondoComponente, TerzoComponente],
  templateUrl: './app.html',
  styleUrls: './app.css'
})
export class App {
  protected readonly title = signal('Franco');
  name = {
    app : "app"
  }
}
