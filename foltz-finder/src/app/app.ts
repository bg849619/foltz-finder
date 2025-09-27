import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Finder } from './finder/finder';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Finder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // DUMMY DATA
  protected readonly title = signal('foltz-finder');
}
