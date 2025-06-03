import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-block',
  imports: [NgClass],
  templateUrl: './color-block.component.html',
  styleUrl: './color-block.component.css'
})
export class ColorBlockComponent {
@Input()
color!:{
  name:string;
  hex:string;
  active:boolean;
}

@Output()
toggle = new EventEmitter<void>();

onClick() {
  this.toggle.emit();
}

}