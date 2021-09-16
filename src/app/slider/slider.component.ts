import { Component, Input, OnInit, Output } from '@angular/core';
import { Stat } from '../models/stat.model'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  // attackValue:number = 3000;
  // cdValue:number = 350;
  // hpValue:number = 15000;

  @Input() element: Stat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
