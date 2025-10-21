import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bubbledrop } from './chatWidgets/bubbledrop/bubbledrop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bubbledrop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'chatWidgets';
}
