import { Component, HostListener } from '@angular/core';
import {trigger,style,transition,animate} from '@angular/animations';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {

}
