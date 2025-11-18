import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Crud } from "./crud/crud";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Crud],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-crud');
}
