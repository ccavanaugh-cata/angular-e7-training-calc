import { Component } from '@angular/core';
import { Hero } from './models/hero.model';
import { Stat } from './models/stat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e7calc';

  statAtkTypes: Stat[] = [
    new Stat('Attack', 1, 10000, 3000, 'sliderAtk'),
    new Stat('Critical Damage', 150, 350, 200, 'sliderCd'),
    new Stat('Hit Points', 1, 50000, 20000, 'sliderHp'),
    new Stat('Defense', 1, 5000, 1000, 'sliderDef'),
    new Stat('Speed', 1, 400, 100, 'sliderSpd')
  ]

  statDefTypes: Stat[] = [
    new Stat('Attack', 1, 10000, 3000, 'sliderAtk'),
    new Stat('Hit Points', 1, 50000, 20000, 'sliderHp'),
    new Stat('Defense', 0, 5000, 1000, 'sliderDef'),
    new Stat('Speed', 1, 400, 100, 'sliderSpd')
  ]

  heroes: Hero[] = [
    new Hero('Achates', '../assets/heroes/achates.png'),
    new Hero('Adlay', '../assets/heroes/adlay.png'),
  ];

  classType: Boolean = true;
}
