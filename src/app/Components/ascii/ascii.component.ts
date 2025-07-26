import { Component } from '@angular/core';

@Component({
  selector: 'app-ascii',
  templateUrl: './ascii.component.html',
  styleUrls: ['./ascii.component.css']
})
export class AsciiComponent {
  characters: string = '*#,/FR';
  font: string = 'Martian Mono';
  size: number = 12;
  brightness: number = 0.3;
  fill: boolean = true;
  colorMode: string = 'RGB';
  backdropColor: string = '#000000';

  toggleFill() {
    this.fill = !this.fill;
  }
}
