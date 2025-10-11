import { Component, HostListener } from '@angular/core';
import {trigger,style,transition,animate} from '@angular/animations';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.hero-content');
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - 100) {
        this.isVisible = true;
      }
    }
  }
}
