import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  array = Array(9).fill(null);
  winner = null;
  isX = false;
  constructor() { }

  get player() {
    return this.isX ? "X" : "O"
  }

}