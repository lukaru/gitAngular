import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  template: `
    <div class="ui container">
      <h1>Home</h1>
      <h3>Das ist die Corona-Shopping-App</h3>
      <p>Hier kannst du Hilfsbedrüftigen Senioren den Alltag erleichtern
         indem du alltägliche Aufgaben wie das einkaufen für sie übernimmst.</p>
      <a routerLink="../lists" class="ui yellow button">
        Gleich helfen!
        <i class="right arrow icon"></i>
      </a>
    </div>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
