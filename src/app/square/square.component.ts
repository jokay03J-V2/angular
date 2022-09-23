import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  @Input() value!: "X" | "O";

  constructor() { }

  winner = null;
  isX = false;

  get player() {
    return this.isX ? "X" : "O"
  }

  Click() {
    this.isX? this.isX = false : this.isX = true;
    console.log(this.isX);
    
  }
  


}
