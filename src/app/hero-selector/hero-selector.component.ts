import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-selector',
  templateUrl: './hero-selector.component.html',
  styleUrls: ['./hero-selector.component.css']
})
export class HeroSelectorComponent implements OnInit {

  @Input() element: Hero[] = [];
  link: String = '../assets/heroes/achates.png';
  @Input() transform: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
