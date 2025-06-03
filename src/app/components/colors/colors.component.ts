import { Component } from '@angular/core';
import { ColorBlockComponent } from "../color-block/color-block.component";

@Component({
  selector: 'app-colors',
  imports: [ColorBlockComponent],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent {
  colors = [
    { name: 'Rosso', hex: '#FF0000', active: false },
    { name: 'Verde', hex: '#00FF00', active: false },
    { name: 'Blu', hex: '#0000FF', active: false },
    { name: 'Giallo', hex: '#FFFF00', active: false },
  ];

 toggleColor(index: number) {
    this.colors[index].active = !this.colors[index].active;
  }
}
